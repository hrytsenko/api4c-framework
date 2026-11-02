// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/hrytsenko/api4c-framework';

/**
 * A sidebar group listing the pages in one directory.
 * Pages are ordered by `sidebar.order` in their frontmatter; the overview comes first.
 * @param {string} label
 * @param {string} directory
 */
const group = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

// https://astro.build/config
export default defineConfig({
	site: 'https://hrytsenko.github.io',
	base: '/api4c-framework',
	integrations: [
		starlight({
			title: 'API4C Framework',
			description: 'A framework for governing APIs.',
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [group('Pillars', 'pillars'), group('Documents', 'documents'), group('Practices', 'practices')],
		}),
	],
});
