import { c as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_DxL7oUmc.mjs';
import 'kleur/colors';
import { a as $$Blog } from './beyond-tech_A8dR4FGD.mjs';

const html = "<ul>\n<li>VP Engineering at Google</li>\n<li>Project Management: Coordination, deadlines, deliverables.</li>\n<li>Customer Service: Support, inquiries, resolutions.</li>\n<li>Data Analysis: Insights, trends, reports.</li>\n<li>Marketing Campaigns: Strategy, outreach, engagement.</li>\n</ul>";

				const frontmatter = {"layout":"../layouts/Blog.astro","title":"Work summary","subtitle":"A summary of my work: ","poster":"/images/work-summary.avif"};
				const file = "C:/Users/123/Documents/Projects/Astro-Course-web/personal-website/src/pages/work-summary.md";
				const url = "/work-summary";
				function rawContent() {
					return "\r\n- VP Engineering at Google\r\n- Project Management: Coordination, deadlines, deliverables.\r\n- Customer Service: Support, inquiries, resolutions.\r\n- Data Analysis: Insights, trends, reports.\r\n- Marketing Campaigns: Strategy, outreach, engagement.\r\n";
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
