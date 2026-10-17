<script lang="ts">
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import AchievementCard from '$lib/components/portfolio/AchievementCard.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { DATA } from '$content/resume';
	import { jsonLdScript } from '$lib/json-ld';
	import { marked } from 'marked';

	let BLUR_FADE_DELAY = 0.04;

	// Generic fallbacks so a new site reads sensibly before anyone writes copy.
	const copy = {
		workTitle: 'Work Experience',
		projectsTitle: 'Check out my latest work',
		projectsBlurb: '',
		achievementsTitle: 'Things I am proud of',
		contactLead: 'Want to chat?',
		contactTail: "I'll get back to you as soon as I can.",
		...DATA.copy
	};

	const linkedin = Object.values(DATA.contact.social).find((s) => s.name === 'LinkedIn');

	// og:image has to be an absolute URL. Resolving against the site URL handles
	// both a base-prefixed asset path and an avatar given as a full external URL.
	const ogImage = new URL(DATA.avatarUrl, DATA.url).href;

	// The current, non-volunteer role — the one structured data should call an employer.
	const employer = DATA.work?.find((w) => w.end === 'Present' && !w.badges.includes('Volunteer'));

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: DATA.name,
		jobTitle: DATA.role,
		description: DATA.description,
		url: DATA.url,
		image: ogImage,
		email: `mailto:${DATA.contact.email}`,
		sameAs: Object.values(DATA.contact.social)
			.map((s) => s.url)
			.filter((url) => /^https?:/.test(url)),
		...(DATA.address
			? {
					address: {
						'@type': 'PostalAddress',
						addressLocality: DATA.address.locality,
						addressCountry: DATA.address.country
					}
				}
			: {}),
		...(employer ? { worksFor: { '@type': 'Organization', name: employer.company } } : {}),
		...(DATA.education?.length
			? {
					alumniOf: DATA.education.map((e) => ({
						'@type': 'EducationalOrganization',
						name: e.school
					}))
				}
			: {})
	};

	const jsonLdTag = jsonLdScript(jsonLd);
</script>

<svelte:head>
	<title>{DATA.name} — {DATA.role}</title>
	<meta name="description" content={DATA.description} />
	<link rel="canonical" href={DATA.url} />
	<meta property="og:title" content="{DATA.name} — {DATA.role}" />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:url" content={DATA.url} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="profile" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{DATA.name} — {DATA.role}" />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:description" content={DATA.description} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD we generate ourselves, not user input -->
	{@html jsonLdTag}
</svelte:head>

<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}>Hi, I&apos;m {DATA.shortName} 👋</BlurFade
					>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>{DATA.description}</BlurFade
					>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>

	{#if DATA.summary}
		<section id="about">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">About</h2>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
				<div
					class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -- summary is authored in resume.ts, not user input -->
					{@html marked(DATA.summary)}
				</div>
			</BlurFade>
		</section>
	{/if}

	{#if DATA.work?.length}
		<section id="work">
			<div class="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<h2 class="text-xl font-bold">{copy.workTitle}</h2>
				</BlurFade>
				{#each DATA.work as work, id}
					<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
						<ResumeCard
							href={work.href}
							logoUrl={work.logoUrl}
							company={work.company}
							title={work.title}
							subtitle={work.location}
							badges={work.badges}
							start={work.start}
							end={work.end}
							description={work.description}
							bullets={work.bullets}
						/>
					</BlurFade>
				{/each}
			</div>
		</section>
	{/if}

	{#if DATA.education?.length}
		<section id="education">
			<div class="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<h2 class="text-xl font-bold">Education</h2>
				</BlurFade>
				{#each DATA.education as edu, id}
					<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
						<ResumeCard
							href={edu.href}
							logoUrl={edu.logoUrl}
							company={edu.school}
							subtitle={edu.degree}
							start={edu.start}
							end={edu.end}
							description={edu.description ?? ''}
							bullets={edu.bullets ?? []}
						/>
					</BlurFade>
				{/each}
			</div>
		</section>
	{/if}

	{#if DATA.languages?.length}
		<section id="languages">
			<div class="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<h2 class="text-xl font-bold">Languages</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 1.2}>
					<div class="flex flex-wrap gap-x-6 gap-y-1 text-sm">
						{#each DATA.languages as language}
							<span>
								<span class="font-medium">{language.name}</span>
								<span class="text-muted-foreground">— {language.level}</span>
							</span>
						{/each}
					</div>
				</BlurFade>
			</div>
		</section>
	{/if}

	{#if DATA.skills?.length}
		<section id="skills">
			<div class="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<h2 class="text-xl font-bold">Skills</h2>
				</BlurFade>
				<div class="flex flex-col gap-y-3">
					{#each DATA.skills as group, id}
						<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
							<div class="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-x-4">
								<span class="shrink-0 text-xs font-medium text-muted-foreground sm:w-44">
									{group.label}
								</span>
								<div class="flex flex-wrap gap-1">
									{#each group.items as skill}
										<Badge>{skill}</Badge>
									{/each}
								</div>
							</div>
						</BlurFade>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	{#if DATA.projects?.length}
		<section id="projects">
			<div class="w-full space-y-12 py-12">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<div class="flex flex-col items-center justify-center space-y-4 text-center">
						<div class="space-y-2">
							<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
								My Projects
							</div>
							<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
								{copy.projectsTitle}
							</h2>
							{#if copy.projectsBlurb}
								<p
									class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
								>
									{copy.projectsBlurb}
								</p>
							{/if}
						</div>
					</div>
				</BlurFade>
				<div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
					{#each DATA.projects as project, id}
						<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
							<ProjectCard
								href={project.href}
								title={project.title}
								description={project.description}
								dates={project.dates}
								tags={project.technologies}
								image={project.image}
								video={project.video}
								links={project.links}
							/>
						</BlurFade>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	{#if DATA.achievements?.length}
		<section id="achievements">
			<div class="w-full space-y-12 py-12">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<div class="flex flex-col items-center justify-center space-y-4 text-center">
						<div class="space-y-2">
							<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
								Achievements
							</div>
							<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
								{copy.achievementsTitle}
							</h2>
						</div>
					</div>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 2}>
					<ul class="mb-4 ml-4 divide-y divide-dashed border-l">
						{#each DATA.achievements as achievement}
							<BlurFade delay={BLUR_FADE_DELAY}>
								<AchievementCard {...achievement} />
							</BlurFade>
						{/each}
					</ul>
				</BlurFade>
			</div>
		</section>
	{/if}

	<section id="contact">
		<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="space-y-3">
					<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
						Contact
					</div>
					<h2 class="text-3xl font-bold tracking-tight sm:text-5xl">Get in Touch</h2>
					<p
						class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						{copy.contactLead} Email me at
						<a href="mailto:{DATA.contact.email}" class="text-blue-500 hover:underline"
							>{DATA.contact.email}</a
						>{#if linkedin}
							or reach me on
							<a
								href={linkedin.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-500 hover:underline">LinkedIn</a
							>{/if}. {copy.contactTail}
					</p>
				</div>
			</BlurFade>
		</div>
	</section>
</main>
