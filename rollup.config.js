import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-css-only";
import html from "rollup-plugin-html";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),

    // Rollup plugin to import HTML files
    html({
      // Defines witch HTML files should be imported (can be modified)
      include: "src/primitives/**/*.html",
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // copy assets and run time files to public folder
    copy({
      targets: [
        { src: "src/assets", dest: "public/build" },
        { src: "src/components", dest: "public/build" },
        { src: "src/primitives", dest: "public/build" },
        { src: "src/spaces", dest: "public/build" },
      ],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production &&
      serve({
        contentBase: "public",
        verbose: false,
        historyApiFallback: true,
        host: "localhost",
        port: 5000,
      }),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    // !production && livereload("public"),
    !production &&
      livereload({
        watch: "public",
        // delay: 400,
        // watch: ["public", "src/**/*.html", "src/**/*.js"]
      }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
