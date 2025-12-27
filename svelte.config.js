import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md", ".svx"],

  preprocess: [vitePreprocess(), mdsvex({ extensions: [".md", ".svx"] })],

  kit: {
    adapter: adapter(),

    alias: {
      $static: path.resolve("static"),
      $content: path.resolve("content"),
    },
  },
};

export default config;
