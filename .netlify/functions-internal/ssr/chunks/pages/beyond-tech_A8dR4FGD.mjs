import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro, g as renderComponent, h as renderSlot, e as renderHead, d as addAttribute, u as unescapeHTML } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>&copy; Ruslana Avramova</footer> `;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$ThemeToggler = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeToggler;
  return renderTemplate`${maybeRenderHead()}<button aria-label="Theme toogler" data-theme-toggle data-astro-cid-ef2qs43u> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0,
    0.3);transform: ;msFilter:;" data-astro-cid-ef2qs43u><path class="sun" d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" data-astro-cid-ef2qs43u></path> <path class="moon" d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z" data-astro-cid-ef2qs43u></path> </svg> </button>  `;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/components/ThemeToggler.astro", void 0);

const $$Astro$2 = createAstro();
const $$NavigationBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-xkrhstpm> <ul data-astro-cid-xkrhstpm> <li data-astro-cid-xkrhstpm><a href="/" data-astro-cid-xkrhstpm>Home</a></li> <li data-astro-cid-xkrhstpm><a href="/philosophies" data-astro-cid-xkrhstpm>Philosophies</a></li> <li data-astro-cid-xkrhstpm><a href="/beyond-tech" data-astro-cid-xkrhstpm>Beyond technology</a></li> <li data-astro-cid-xkrhstpm><a href="/work-summary" data-astro-cid-xkrhstpm>Work summary</a></li> </ul> ${renderComponent($$result, "ThemeToggler", $$ThemeToggler, { "data-astro-cid-xkrhstpm": true })} </nav>  `;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/components/NavigationBar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description" content="test portfolio"><title>', '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">', "</head> <body> <main> ", " ", " ", " </main> <script>\n      const DARK_THEME_CLASS = 'dark';\n      const COLOUR_MODE = 'COLOUR_MODE';\n      const LIGHT_THEME = 'LIGHT';\n      const DARK_THEME = 'DARK';\n\n      const rootEl = document.documentElement;\n\n      const getInitialColourMode = () => {\n        const previouslySavedColourMode =\n          window.localStorage.getItem(COLOUR_MODE);\n\n        if (previouslySavedColourMode) {\n          return previouslySavedColourMode;\n        }\n\n        if (window.matchMedia('prefers-color-scheme: dark').matches) {\n          return DARK_THEME;\n        }\n\n        return LIGHT_THEME;\n      };\n\n      const initialColourMode = getInitialColourMode();\n\n      const setInitialColourMode = mode => {\n        if (mode === LIGHT_THEME) {\n          rootEl.classList.remove(DARK_THEME_CLASS);\n        } else {\n          rootEl.classList.add(DARK_THEME_CLASS);\n        }\n      };\n\n      setInitialColourMode(initialColourMode);\n    <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "NavigationBar", $$NavigationBar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/layouts/Main.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const { title, subtitle, poster } = Astro2.props.frontmatter;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Ruslana Avramova | Blog", "data-astro-cid-w6n32adp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<figure class="figure" data-astro-cid-w6n32adp> <img${addAttribute(poster, "src")} alt="img" width="100%" height="480px" class="figure-img" data-astro-cid-w6n32adp> <figcaption class="figure-caption" data-astro-cid-w6n32adp>
Poster image for ${title.toLocaleLowerCase()} </figcaption> </figure> <h1 data-astro-cid-w6n32adp>${title}</h1> <h2 data-astro-cid-w6n32adp>${subtitle}</h2> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/layouts/Blog.astro", void 0);

const html = "<ul>\n<li>Nature Walks: Exploring forests, parks, beaches.</li>\n<li>Cooking Adventures: Trying new recipes, culinary experiments.</li>\n<li>Artistic Expression: Painting, drawing, sculpting, creative outlets.</li>\n<li>Physical Exercise: Gym, running, yoga, fitness routines.</li>\n<li>Reading Books: Immersing in stories, different worlds, ideas.</li>\n</ul>";

				const frontmatter = {"layout":"../layouts/Blog.astro","title":"Beyond technology","subtitle":"Humans are multi-faceted. Beyond technology, I indulge in the following: ","poster":"/images/road-trip.avif"};
				const file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/beyond-tech.md";
				const url = "/beyond-tech";
				function rawContent() {
					return "\r\n- Nature Walks: Exploring forests, parks, beaches.\r\n- Cooking Adventures: Trying new recipes, culinary experiments.\r\n- Artistic Expression: Painting, drawing, sculpting, creative outlets.\r\n- Physical Exercise: Gym, running, yoga, fitness routines.\r\n- Reading Books: Immersing in stories, different worlds, ideas.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Blog, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const beyondTech = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Main as $, $$Blog as a, beyondTech as b };
