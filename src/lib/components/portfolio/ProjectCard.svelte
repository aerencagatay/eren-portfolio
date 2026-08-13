<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { marked } from 'marked';
	import Badge from '../ui/badge/badge.svelte';
	import { cn } from '$lib/utils';

	let _class = '';
	export { _class as class };
	export let title: string;
	export let href: string = '';
	export let description: string;
	export let dates: string;
	export let tags: readonly string[];
	export let link: string = '';
	export let image: string = '';
	export let video: string = '';
	export let links: { icon: ComponentType; type: string; href: string }[] = [];
</script>

<!-- Card -->
<div
	class={cn(
		'flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-out hover:shadow-lg',
		_class
	)}
>
	<!-- Only render media when there is some: an empty src paints a broken-image box. -->
	{#if video || image}
		<svelte:element
			this={href ? 'a' : 'div'}
			href={href || undefined}
			class="block {href ? 'cursor-pointer' : ''}"
		>
			{#if video}
				<video
					class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
					src={video}
					autoplay
					loop
					muted
				></video>
			{:else}
				<img class="h-40 w-full overflow-hidden object-cover object-top" src={image} alt={title} />
			{/if}
		</svelte:element>
	{/if}
	<!-- Card Header -->
	<div class="flex flex-col px-3 pt-3">
		<div class="space-y-1">
			<!-- Card Title -->
			<div class="mt-1 text-base">{title}</div>
			<time class="font-sans text-xs">{dates}</time>
			<div class="hidden font-sans text-xs underline print:visible">
				{link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<div
				class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- description is authored in resume.ts -->
				{@html marked(description)}
			</div>
		</div>
	</div>
	<!-- Card Content -->
	<div class="mt-auto flex flex-col text-pretty px-3 font-sans text-sm text-muted-foreground">
		{#if tags && tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1">
				{#each tags as tag}
					<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</div>
	<!-- Card Footer -->
	<div class="flex items-center px-3 pb-3 pt-2">
		{#if links && links.length > 0}
			<div class="flex flex-row flex-wrap items-start gap-1">
				{#each links as link}
					<a href={link?.href} target="_blank">
						<Badge class="flex items-center justify-center gap-1 px-2 py-1 text-[10px]">
							<!-- {link.icon} -->
							<svelte:component this={link.icon} class="mb-px size-3" strokeWidth={1.6} />
							{link.type}
						</Badge>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
