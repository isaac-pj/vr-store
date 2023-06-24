const flexItem = AFRAME.registerComponent("flex-item", {
  schema: {
    align: {
      default: "none",
      oneOf: ["none", "center", "start", "end", "baseline", "stretch"],
    },
    grow: { default: 1 },
    shrink: { default: 1 },
    fixed: { default: false },
  },
  update(oldData) {
    if (oldData.align) {
      let xycontainer = this.el.parentNode.components.xycontainer;
      if (xycontainer) {
        xycontainer.update();
      }
    }
  },
});

const flexContainer = AFRAME.registerComponent("flex-container", {
  dependencies: ["frame"],
  schema: {
    gap: { default: 0.0 },
    padding: { default: 0 },
    reverse: { default: false },
    wrap: { default: "nowrap", oneOf: ["wrap", "nowrap"] },
    flexDirection: {
      default: "column",
      oneOf: ["none", "row", "column", "vertical", "horizontal"],
    },
    alignItems: {
      default: "none",
      oneOf: ["none", "center", "start", "end", "baseline", "stretch"],
    },
    justifyContent: {
      default: "start",
      oneOf: [
        "center",
        "start",
        "end",
        "space-between",
        "space-around",
        "stretch",
      ],
    },
    alignContent: {
      default: "",
      oneOf: ["", "none", "start", "end", "center", "stretch"],
    },
  },
  init() {
    for (let e of ["child-attached", "child-detached", "xyresize"]) {
      this.el.addEventListener(
        e,
        ev => ev.target == this.el && setTimeout(() => this.update())
      );
    }
  },
  update() {
    let data = this.data;
    let flexDirection = data.flexDirection;
    if (flexDirection == "none") {
      return;
    }
    let containerRect = this.el.components.frame.data
      ? this.el.components.frame
      : { data: { height: -1, width: -1 } };
    let children = this.el.children;
    let isVertical = flexDirection == "vertical" || flexDirection == "column";
    let padding = data.padding;
    let gap = data.gap;
    let mainDir = data.reverse != isVertical ? -1 : 1;
    let toXY = (m, c) => (isVertical ? [c, m * mainDir] : [m * mainDir, -c]);
    let xyToMainCross = (x, y) => (isVertical ? [y, x] : [x, y]);
    let [containerSizeM, containerSizeC] = xyToMainCross(
      containerRect.width - padding * 2,
      containerRect.height - padding * 2
    );
    let [attrNameM, attrNameC] = xyToMainCross("width", "height");

    // lines
    let mainSize = 0;
    let crossSizeSum = 0;
    let targets = [];
    let lines = [];
    let sizeSum = 0;
    let growSum = 0;
    let shrinkSum = 0;
    let crossSize = 0;
    let newLine = () => {
      mainSize = Math.max(mainSize, sizeSum + gap * (targets.length - 1));
      crossSizeSum += crossSize;
      lines.push([targets, sizeSum, growSum, shrinkSum, crossSize]);
      targets = [];
      sizeSum = 0;
      growSum = 0;
      shrinkSum = 0;
      crossSize = 0;
    };
    for (let el of children) {
      let flexItem = el.getAttribute("flex-item");
      if (flexItem && flexItem.fixed) {
        continue;
      }
      let frame = el.components.frame ||
        el.getAttribute("geometry") || {
          width: +(el.getAttribute("width") || NaN),
          height: +(el.getAttribute("height") || NaN),
        };
      let childScale = /** @type {{x:number, y:number}} */ (
        el.getAttribute("scale") || { x: 1, y: 1 }
      );
      let size = xyToMainCross(
        frame.width * childScale.x,
        frame.height * childScale.y
      );
      let [sizeM, sizeC] = size;
      if (sizeM == null || isNaN(sizeM)) {
        continue;
      }
      let pivot = frame.data ? frame.data.pivot : { x: 0.5, y: 0.5 };
      let contentSize = sizeSum + sizeM + gap * targets.length;
      if (data.wrap == "wrap" && sizeSum > 0 && contentSize > containerSizeM) {
        newLine();
      }
      targets.push([
        el,
        flexItem,
        size,
        xyToMainCross(pivot.x, pivot.y),
        xyToMainCross(childScale.x, childScale.y),
      ]);
      sizeSum += sizeM;
      growSum += flexItem ? flexItem.grow : 1;
      shrinkSum += flexItem ? flexItem.shrink : 1;
      crossSize = sizeC > crossSize ? sizeC : crossSize;
    }
    if (targets.length > 0) {
      newLine();
    }

    crossSizeSum += gap * (lines.length - 1);
    if (containerRect.data[attrNameM] == -1) {
      containerSizeM = mainSize;
      containerRect[attrNameM] = mainSize + padding * 2;
    }
    if (containerRect.data[attrNameC] == -1) {
      containerSizeC = crossSizeSum;
      containerRect[attrNameC] = crossSizeSum + padding * 2;
    }
    let crossOffset = -containerSizeC / 2;
    let crossStretch = 0;
    let alignContent = data.alignContent || data.alignItems;
    if (alignContent == "end") {
      crossOffset += containerSizeC - crossSizeSum;
    } else if (alignContent == "center") {
      crossOffset += (containerSizeC - crossSizeSum) / 2;
    } else if (alignContent == "stretch" || alignContent == "none") {
      crossStretch = (containerSizeC - crossSizeSum) / lines.length;
    }
    for (let [targets, sizeSum, growSum, shrinkSum, crossSize] of lines) {
      this._layoutLine(
        targets,
        sizeSum,
        growSum,
        shrinkSum,
        -containerSizeM / 2,
        crossOffset,
        containerSizeM,
        crossSize + crossStretch,
        attrNameM,
        attrNameC,
        toXY
      );
      crossOffset += crossSize + crossStretch + gap;
    }
  },
  _layoutLine(
    targets,
    sizeSum,
    growSum,
    shrinkSum,
    offset0,
    offset1,
    containerSize0,
    containerSize1,
    attrName0,
    attrName1,
    toXY
  ) {
    let { justifyContent, alignItems, gap, wrap } = this.data;
    let stretchFactor = 0;
    let numTarget = targets.length;
    if (justifyContent === "center") {
      offset0 += (containerSize0 - sizeSum - gap * numTarget) / 2;
    } else if (justifyContent === "end") {
      offset0 += containerSize0 - sizeSum - gap * numTarget;
    } else if (justifyContent === "stretch") {
      stretchFactor = containerSize0 - sizeSum - gap * (numTarget - 1);
      if (stretchFactor > 0) {
        stretchFactor = growSum > 0 ? stretchFactor / growSum : 0;
      } else {
        stretchFactor = shrinkSum > 0 ? stretchFactor / shrinkSum : 0;
      }
    } else if (justifyContent === "space-between") {
      gap = (containerSize0 - sizeSum) / (numTarget - 1);
    } else if (justifyContent === "space-around") {
      gap = (containerSize0 - sizeSum) / numTarget;
      offset0 += gap / 2;
    }

    for (let [
      el,
      flexItem,
      [size0, size1],
      [pivot0, pivot1],
      [scale0, scale1],
    ] of targets) {
      let align = (flexItem && flexItem.align) || alignItems;
      let stretch =
        (flexItem ? (stretchFactor > 0 ? flexItem.grow : flexItem.shrink) : 1) *
        stretchFactor;
      let posCross = offset1 + containerSize1 / 2; // center
      let pos = el.getAttribute("position") || { x: 0, y: 0 };
      if (scale0 > 0 && stretch != 0) {
        size0 += stretch;
        el.setAttribute(attrName0, size0 / scale0);
      }
      if (scale1 > 0 && align === "stretch") {
        size1 = containerSize1;
        el.setAttribute(attrName1, size1 / scale1);
      }
      if (align === "start" || align === "stretch") {
        posCross = offset1 + pivot1 * size1;
      } else if (align === "end") {
        posCross = offset1 + containerSize1 - (1 - pivot1) * size1;
      } else if (align === "center") {
        posCross += (pivot1 - 0.5) * size1;
      } else if (align === "none" && wrap != "wrap") {
        // Keep original cross position if nowrap.
        posCross = attrName1 == "width" ? pos.x : -pos.y;
      }
      [pos.x, pos.y] = toXY(offset0 + size0 * pivot0, posCross);
      el.setAttribute("position", pos);
      offset0 += size0 + gap;
    }
  },
});

export default {
  flexItem,
  flexContainer,
};
