import { p as decodeKey } from './chunks/astro/server_L-HSU99n.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CNorvNLI.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/jesusdicen/Proyects/Portfolio/Codebase/","cacheDir":"file:///home/jesusdicen/Proyects/Portfolio/Codebase/node_modules/.astro/","outDir":"file:///home/jesusdicen/Proyects/Portfolio/Codebase/dist/","srcDir":"file:///home/jesusdicen/Proyects/Portfolio/Codebase/src/","publicDir":"file:///home/jesusdicen/Proyects/Portfolio/Codebase/public/","buildClientDir":"file:///home/jesusdicen/Proyects/Portfolio/Codebase/dist/client/","buildServerDir":"file:///home/jesusdicen/Proyects/Portfolio/Codebase/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.14.0_@types+node@24.5.2_@vercel+functions@2.2.13_@aws-sdk+credential-provider-w_99dda6827149e1fe4aa6d23b4c4baf91/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/cookies/theme","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/cookies\\/theme\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"cookies","dynamic":false,"spread":false}],[{"content":"theme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/cookies/theme.ts","pathname":"/api/cookies/theme","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/emails/send","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/emails\\/send\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"emails","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/emails/send.ts","pathname":"/api/emails/send","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.9GaM2tj6.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.9GaM2tj6.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.9GaM2tj6.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.9GaM2tj6.css"}],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-portfolio-eight-rho.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jesusdicen/Proyects/Portfolio/Codebase/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/jesusdicen/Proyects/Portfolio/Codebase/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/home/jesusdicen/Proyects/Portfolio/Codebase/src/pages/es/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.14.0_@types+node@24.5.2_@vercel+functions@2.2.13_@aws-sdk+credential-provider-w_99dda6827149e1fe4aa6d23b4c4baf91/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/cookies/theme@_@ts":"pages/api/cookies/theme.astro.mjs","\u0000@astro-page:src/pages/api/emails/send@_@ts":"pages/api/emails/send.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_6EEtPG7k.mjs","/home/jesusdicen/Proyects/Portfolio/Codebase/node_modules/.pnpm/@astrojs+vercel@8.2.8_@aws-sdk+credential-provider-web-identity@3.899.0_astro@5.14.0_@t_249e28d0638a894bad332498c5bd9cdc/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_BQt4L-mU.mjs","/home/jesusdicen/Proyects/Portfolio/Codebase/src/components/pageComponents/ScrollButton.svelte":"_astro/ScrollButton.DIu20nRM.js","$components/shared/ui/github/GithubButton.svelte":"_astro/GithubButton.CdXGuGkO.js","$ui/linkedin/LinkedinButton.svelte":"_astro/LinkedinButton.BR6vMGy1.js","$pageComponents/ContactForm.svelte":"_astro/ContactForm.BFJVGkQj.js","$ui/navbar/Menu.svelte":"_astro/Menu.CG1xPvkH.js","$ui/locale/ChangeLocalePopover.svelte":"_astro/ChangeLocalePopover.BkMjXilS.js","$ui/theme/ToggleTheme.svelte":"_astro/ToggleTheme.Dsfm-hNJ.js","@astrojs/svelte/client.js":"_astro/client.svelte.C9sUKX7X.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/profile.B6HImF6r.jpg","/_astro/DiazJesus_CV_EN.DkWJHcDk.pdf","/_astro/DiazJesus_CV_ES.DDd0oE3q.pdf","/_astro/index.9GaM2tj6.css","/favicon.png","/robot.txt","/_astro/ChangeLocalePopover.BkMjXilS.js","/_astro/ContactForm.BFJVGkQj.js","/_astro/GithubButton.CdXGuGkO.js","/_astro/LinkedinButton.BR6vMGy1.js","/_astro/Menu.CG1xPvkH.js","/_astro/ScrollButton.DIu20nRM.js","/_astro/ToggleTheme.Dsfm-hNJ.js","/_astro/async.Bl16-LZK.js","/_astro/button.BGZ3VW_W.js","/_astro/client.svelte.C9sUKX7X.js","/_astro/constants.ByBzOtma.js","/_astro/if.BUV4IJrD.js","/_astro/index.DBCfEmck.js","/_astro/index.T_1GpjCC.css","/_astro/legacy.BWLF0_wV.js","/_astro/render.ay8f7T2c.js","/_astro/scroll-lock.CmxHrh2X.js","/_astro/snippet.BrtRqP9F.js","/_astro/template.CT3fyaAz.js","/_astro/utils.Ci7rUgqW.js","/_astro/watch.svelte.DXY4dhyq.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["en","es"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"zo2ANsy52Xlpc3HjV9wduOIQvt6ggHJyiHE9dFY77C8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
