import { r as renderers } from './chunks/_@astro-renderers_DY5zhuKj.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CQZUoEX_.mjs';
import { manifest } from './manifest_BpdGmk0n.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/cookies/theme.astro.mjs');
const _page2 = () => import('./pages/api/emails/send.astro.mjs');
const _page3 = () => import('./pages/en.astro.mjs');
const _page4 = () => import('./pages/es.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.0_@types+node@24.5.2_@vercel+functions@2.2.13_@aws-sdk+credential-provider-w_99dda6827149e1fe4aa6d23b4c4baf91/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/cookies/theme.ts", _page1],
    ["src/pages/api/emails/send.ts", _page2],
    ["src/pages/en/index.astro", _page3],
    ["src/pages/es/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bb06cab0-6d5e-44ba-ba03-3182d6ffa2da",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
