import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DftBg5Oc.mjs';
import { $ as $$Index$1 } from '../chunks/index_CiqwD1Al.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DY5zhuKj.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "IndexPage", $$Index$1, {})}`;
}, "/home/jesusdicen/Proyects/Portfolio/Codebase/src/pages/en/index.astro", void 0);

const $$file = "/home/jesusdicen/Proyects/Portfolio/Codebase/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
