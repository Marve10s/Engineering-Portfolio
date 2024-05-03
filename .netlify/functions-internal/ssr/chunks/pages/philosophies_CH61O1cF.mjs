import { c as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import { a as $$Blog } from './beyond-tech_A8dR4FGD.mjs';

const html = "<ul>\n<li>Be present and enjoy the now</li>\n<li>Be driven by values</li>\n<li>Health is wealth</li>\n<li>Be deliberate</li>\n<li>Laugh out loud</li>\n</ul>";

				const frontmatter = {"layout":"../layouts/Blog.astro","title":"My Guiding Philosophies","subtitle":"There are the philosophies that guide me:","poster":"/images/adventure.avif"};
				const file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/philosophies.md";
				const url = "/philosophies";
				function rawContent() {
					return "\r\n- Be present and enjoy the now\r\n- Be driven by values\r\n- Health is wealth\r\n- Be deliberate\r\n- Laugh out loud\r\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
