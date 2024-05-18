import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CMFI2AIi.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BXIJYozT.mjs');
const _page1 = () => import('./chunks/about_Bkr33F0H.mjs');
const _page2 = () => import('./chunks/beyond-tech_BfniX0kY.mjs');
const _page3 = () => import('./chunks/rust-javascript-tooling_C2rvlDkF.mjs');
const _page4 = () => import('./chunks/sleep-more_MKqzModg.mjs');
const _page5 = () => import('./chunks/typescript-is-the-new-javascript_BpYWGvtu.mjs');
const _page6 = () => import('./chunks/philosophies_Bebg7ctP.mjs');
const _page7 = () => import('./chunks/work-summary_DhxP-Uf4.mjs');
const _page8 = () => import('./chunks/index_BiKnErSz.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/beyond-tech.md", _page2],
    ["src/pages/blogs/rust-javascript-tooling.md", _page3],
    ["src/pages/blogs/sleep-more.md", _page4],
    ["src/pages/blogs/typescript-is-the-new-javascript.md", _page5],
    ["src/pages/philosophies.md", _page6],
    ["src/pages/work-summary.md", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "518f8b08-6b6e-495c-8dc1-65ddcf72777c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
