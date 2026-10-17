import type { ComponentType } from 'svelte';

/**
 * The contract every sites/<person>/resume.ts must satisfy.
 *
 * The page is shared by every site, so this is what lets one person's data
 * fail type-checking instead of rendering a broken page. Every section is
 * optional: leave one out (or pass an empty array) and the page skips it,
 * heading and all, rather than printing an empty block.
 */

export interface Social {
	name: string;
	url: string;
	/** Light-theme icon; a Vite-imported asset URL. */
	icon: string;
	dark_icon?: string;
	/** Whether it appears in the bottom dock. */
	navbar: boolean;
}

export interface NavItem {
	/** Root-relative ("/#projects") hrefs get the site's base path prefixed. */
	href: string;
	icon: ComponentType;
	label: string;
}

export interface WorkEntry {
	company: string;
	href: string;
	badges: string[];
	location: string;
	title: string;
	/** Blank falls back to the organisation's initials. */
	logoUrl: string;
	start: string;
	end: string;
	/** One line, shown when the card is expanded. */
	description: string;
	bullets: string[];
}

export interface EducationEntry {
	school: string;
	href: string;
	degree: string;
	logoUrl: string;
	start: string;
	end: string;
	/** Optional detail — giving either makes the card expandable, like a work entry. */
	description?: string;
	bullets?: string[];
}

export interface SkillGroup {
	label: string;
	items: string[];
}

export interface Language {
	name: string;
	level: string;
}

export interface ProjectLink {
	icon: ComponentType;
	type: string;
	href: string;
}

export interface Project {
	title: string;
	href: string;
	dates: string;
	active: boolean;
	/** Markdown. */
	description: string;
	technologies: string[];
	links: ProjectLink[];
	image: string;
	video: string;
}

export interface Achievement {
	title: string;
	dates: string;
	location: string;
	/** Markdown. */
	description: string;
	image: string;
	links: { icon?: ComponentType; title: string; href: string }[];
}

/**
 * Section headings and blurbs. Anything left out falls back to a generic
 * default in the page, so a new site reads sensibly before anyone writes copy.
 */
export interface Copy {
	/** Heading of the work section. Defaults to "Work Experience". */
	workTitle?: string;
	projectsTitle?: string;
	projectsBlurb?: string;
	achievementsTitle?: string;
	/** Sentence before "Email me at …". */
	contactLead?: string;
	/** Sentence after the email/LinkedIn links. */
	contactTail?: string;
}

export interface Resume {
	name: string;
	/** Used in the hero greeting: "Hi, I'm <shortName>". */
	shortName: string;
	initials: string;
	/** Job title — page title, social previews and structured data. */
	role: string;
	/** Absolute public URL of this person's site, used for canonical and og:url. */
	url: string;
	location: string;
	locationLink: string;
	/** For structured data only; omitted from JSON-LD when absent. */
	address?: { locality: string; country: string };
	copy?: Copy;
	/** Hero tagline. */
	description: string;
	/**
	 * Markdown. Links must be hash-only (#work, not /#work): marked renders them
	 * verbatim, so a leading slash skips the base path and fails the prerender.
	 */
	summary?: string;
	avatarUrl: string;
	navbar: NavItem[];
	contact: {
		email: string;
		tel: string;
		social: Record<string, Social>;
	};
	work?: WorkEntry[];
	education?: EducationEntry[];
	languages?: Language[];
	skills?: SkillGroup[];
	projects?: Project[];
	achievements?: Achievement[];
}
