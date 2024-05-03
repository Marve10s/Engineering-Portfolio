import { c as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import { a as $$Blog } from './beyond-tech_A8dR4FGD.mjs';

const html = "<ul>\n<li>Sleep</li>\n<li>Sleep more</li>\n<li>Sleep o little more</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/Blog.astro","title":"Why you should sleep more","subtitle":"Sleep is great,here`s why: ","poster":"/images/sleep.avif"};
				const file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/blogs/sleep-more.md";
				const url = "/blogs/sleep-more";
				function rawContent() {
					return "\r\n- Sleep\r\n- Sleep more\r\n- Sleep o little more\r\n";
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
