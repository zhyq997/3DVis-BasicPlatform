import jiti from "file:///D:/code/3DVis-BasicPlatform/node_modules/.pnpm/jiti@1.21.6/node_modules/jiti/lib/index.js";

/** @type {import("D:/code/3DVis-BasicPlatform/internal/vite-config/src/index")} */
const _module = jiti(null, {
  "esmResolve": true,
  "interopDefault": true,
  "alias": {
    "@vben/vite-config": "D:/code/3DVis-BasicPlatform/internal/vite-config"
  }
})("D:/code/3DVis-BasicPlatform/internal/vite-config/src/index.ts");

export const defineApplicationConfig = _module.defineApplicationConfig;
export const definePackageConfig = _module.definePackageConfig;