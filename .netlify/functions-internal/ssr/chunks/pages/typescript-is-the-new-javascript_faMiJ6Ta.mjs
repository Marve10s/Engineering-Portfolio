import { c as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import { a as $$Blog } from './beyond-tech_A8dR4FGD.mjs';

const html = "<ul>\n<li>Type safety</li>\n<li>Type safety</li>\n<li>Type safety</li>\n<li>Type safety</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/Blog.astro","title":"Typescript is the new Javascript","subtitle":"Typescript is becoming standard","poster":"/images/typescript.avif"};
				const file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/blogs/typescript-is-the-new-javascript.md";
				const url = "/blogs/typescript-is-the-new-javascript";
				function rawContent() {
					return "\r\n- Type safety\r\n- Type safety\r\n- Type safety\r\n- Type safety\r\n";
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
