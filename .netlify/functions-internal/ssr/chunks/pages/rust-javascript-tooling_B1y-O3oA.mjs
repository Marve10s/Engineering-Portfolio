import { c as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import { a as $$Blog } from './beyond-tech_A8dR4FGD.mjs';

const html = "<ul>\n<li>Rust is fast</li>\n<li>Yes,it is</li>\n<li>Faaaaaaast</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/Blog.astro","title":"Why Rust is the feature?","subtitle":"How to create fast developer experience: ","poster":"/images/rust.avif"};
				const file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/blogs/rust-javascript-tooling.md";
				const url = "/blogs/rust-javascript-tooling";
				function rawContent() {
					return "\r\n- Rust is fast\r\n- Yes,it is\r\n- Faaaaaaast\r\n";
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
