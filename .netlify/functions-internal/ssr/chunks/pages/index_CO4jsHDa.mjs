import { c as createComponent, l as defineStyleVars, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, g as renderComponent } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import { $ as $$Main } from './beyond-tech_A8dR4FGD.mjs';
/* empty css                          */
import 'clsx';

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { to, title, gradientFrom, gradientTo } = Astro2.props;
  const $$definedVars = defineStyleVars([{ gradientFrom: `${gradientFrom}`, gradientTo: `${gradientTo}` }]);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")} class="card" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <div class="card-inner" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}> <div class="card-title" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>${title}</div> <div class="card-footer" data-astro-cid-dohjnao5${addAttribute($$definedVars, "style")}>&rarr;</div> </div> </a> `;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Cards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cards;
  const { cards } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cards" data-astro-cid-i5mwzbw6> ${cards.map((card) => renderTemplate`${renderComponent($$result, "Card", $$Card, { ...card, "data-astro-cid-i5mwzbw6": true })}`)} </div> `;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/components/Cards.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogs = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blogs/rust-javascript-tooling.md": () => import('./rust-javascript-tooling_B1y-O3oA.mjs'),"./blogs/sleep-more.md": () => import('./sleep-more_CQ3-ePn7.mjs'),"./blogs/typescript-is-the-new-javascript.md": () => import('./typescript-is-the-new-javascript_faMiJ6Ta.mjs')}), () => "../pages/blogs/*.md");
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Ruslana Avramova", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="profile" data-astro-cid-j7pv25f6> <img class="profile-picture" width="100px" height="100px" src="/images/ruslanka.jpg" alt="Avatar" data-astro-cid-j7pv25f6> <div class="profile-details" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Ruslana Avramova</h1> <h2 data-astro-cid-j7pv25f6>VP of Engineering at Google</h2> <p data-astro-cid-j7pv25f6>
Helping developers be excellent and succed at building scalable
        products.
</p> </div> </div> ${renderComponent($$result2, "Cards", $$Cards, { "cards": [
    {
      title: "Here are my guiding philosophies for life",
      gradientFrom: "#818cf8",
      gradientTo: "#d8b4fe",
      to: "/philosophies"
    },
    {
      title: "A summary of my work history",
      gradientFrom: "#fde68a",
      gradientTo: "#fca5a5",
      to: "/work-summary"
    },
    {
      title: "What I do beyond technology",
      gradientFrom: "#6ee7b7",
      gradientTo: "#9333ea",
      to: "/beyond-tech"
    }
  ], "data-astro-cid-j7pv25f6": true })} <div class="featured-blogs" data-astro-cid-j7pv25f6> <h3 class="featured-blogs_title" data-astro-cid-j7pv25f6>Featured Blogs</h3> <p class="featured-blogs_description" data-astro-cid-j7pv25f6>
Opinion piecies that will change everything you know
</p> </div> <ol class="blogs" data-astro-cid-j7pv25f6> ${blogs.map((blog) => renderTemplate`<li class="blog-list" data-astro-cid-j7pv25f6> <a class="blog-link"${addAttribute(blog.url, "href")} data-astro-cid-j7pv25f6>${blog.frontmatter.title}</a> </li>`)} </ol> ` })} `;
}, "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
