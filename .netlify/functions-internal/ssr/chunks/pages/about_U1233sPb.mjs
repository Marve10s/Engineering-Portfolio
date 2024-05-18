import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as createAstro } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>About us!</h1> </body></html>`;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/about.astro", void 0);

const $$file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
