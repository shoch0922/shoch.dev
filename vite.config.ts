import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    //開発環境設定
    return {
      server: {
		host: true,
        port: 3000,
      },
    };
  } else {
    //本番環境設定
    return {
      css: {
        postcss: {
          plugins: [autoprefixer],
        },
      },
    };
  }
});