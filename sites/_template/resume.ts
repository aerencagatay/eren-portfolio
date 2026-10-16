/**
 * Starting point for a new person. Copy the whole folder, don't edit it here:
 *
 *   cp -r sites/_template sites/ayse
 *
 * Folders starting with "_" are type-checked but never published, so this file
 * stays in step with the Resume type without becoming a live page.
 * Any section you leave out (or leave as []) is hidden, heading and all.
 */
import { HomeIcon } from 'lucide-svelte';
import type { Resume } from '$lib/types';

import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';
import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';
import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

// Put their photo in ./imgs and import it — a square crop suits the round avatar.
// import ProfileImg from './imgs/profile.jpg';

export const DATA: Resume = {
	name: 'Full Name',
	shortName: 'First', // "Hi, I'm First 👋"
	initials: 'FN', // shown when the photo is missing
	role: 'Job Title',
	// Their public address — the folder name becomes the last segment.
	url: 'https://aerencagatay.github.io/eren-portfolio/folder-name',
	location: 'City, Country',
	locationLink: 'https://www.google.com/maps/place/city',
	description: 'One-line tagline shown under the greeting.',
	// Markdown. Links must be hash-only: [my work](#work), never (/#work).
	summary: '',
	avatarUrl: '', // set to ProfileImg once imported
	navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
	contact: {
		email: 'name@example.com',
		tel: '',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/username',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			// Named exactly "LinkedIn" to get the link in the Contact paragraph.
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://linkedin.com/in/username',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			email: {
				name: 'Send Email',
				url: 'mailto:name@example.com',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Company',
			href: '', // company site; makes the logo clickable
			badges: [], // e.g. ['Volunteer'] — volunteer roles are never listed as an employer
			location: 'City, Country',
			title: 'Role',
			logoUrl: '', // blank shows the company's initials
			start: 'Month Year',
			end: 'Present', // "Present" marks the current employer
			description: 'One line, shown when the card is expanded.',
			bullets: ['What they did, and what came of it.']
		}
	],
	education: [],
	languages: [],
	skills: [],
	projects: [],
	achievements: []
	// copy: { projectsTitle, projectsBlurb, achievementsTitle, contactLead, contactTail }
};
