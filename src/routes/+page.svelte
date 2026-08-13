<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import AchievementCard from '$lib/components/portfolio/AchievementCard.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { DATA, ORIGIN } from '$lib/data/resume';
	import { jsonLdScript } from '$lib/json-ld';
	import { marked } from 'marked';

	let BLUR_FADE_DELAY = 0.04;

	// og:image has to be an absolute URL; avatarUrl is a Vite-hashed, base-prefixed path.
	const ogImage = `${ORIGIN}${DATA.avatarUrl}`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: DATA.name,
		jobTitle: 'Software Engineer',
		description: DATA.description,
		url: DATA.url,
		image: ogImage,
		email: `mailto:${DATA.contact.email}`,
		sameAs: [DATA.contact.social.GitHub.url, DATA.contact.social.LinkedIn.url],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'İstanbul',
			addressCountry: 'TR'
		},
		worksFor: { '@type': 'Organization', name: 'ATP Tradesoft' },
		alumniOf: { '@type': 'CollegeOrUniversity', name: 'Sabancı University' }
	};

	const jsonLdTag = jsonLdScript(jsonLd);
</script>

<svelte:head>
	<title>{DATA.name} — Software Engineer</title>
	<meta name="description" content={DATA.description} />
	<link rel="canonical" href={DATA.url} />
	<meta property="og:title" content="{DATA.name} — Software Engineer" />
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
	<meta name="twitter:title" content="{DATA.name} — Software Engineer" />
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
						yOffset={8}>Hi, I&apos;m Eren 👋</BlurFade
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

	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Work Experience</h2>
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
					/>
				</BlurFade>
			{/each}
		</div>
	</section>

	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Skills</h2>
			</BlurFade>
			<div class="flex flex-wrap gap-1">
				{#each DATA.skills as skill, id}
					<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
						<Badge>{skill}</Badge>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<section id="projects">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							My Projects
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Machine learning, end to end
						</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Two projects I took from raw data all the way to something people could actually use —
							one priced a used-car market, the other cut cost out of a supply chain.
						</p>
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

	<section id="achievements">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							Achievements
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">A couple I am proud of</h2>
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
						Want to talk about an opportunity or just compare notes on fintech engineering? Email me
						at
						<a href="mailto:{DATA.contact.email}" class="text-blue-500 hover:underline"
							>{DATA.contact.email}</a
						>
						or reach me on
						<a
							href={DATA.contact.social.LinkedIn.url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-500 hover:underline">LinkedIn</a
						>. I read everything and reply when I can.
					</p>
				</div>
			</BlurFade>
		</div>
	</section>
</main>
