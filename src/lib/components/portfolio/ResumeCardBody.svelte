<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let company: string = '';
	export let title: string = '';
	export let subtitle: string = '';
	export let badges: string[] = [];
	export let description: string = '';
	export let bullets: string[] = [];
	export let start: string = '';
	export let end: string = '';
	export let isExpandable: boolean = false;
	export let isExpanded: boolean = false;
</script>

<div class="flex flex-col">
	<div class="flex items-center justify-between gap-x-2 text-base">
		<h3
			class="inline-flex items-center justify-center gap-x-1 text-xs font-semibold leading-none sm:text-sm"
		>
			{company}
			{#if badges?.length}
				<span class="inline-flex gap-x-1">
					{#each badges as badge}
						<Badge variant="secondary" class="align-middle text-xs">
							{badge}
						</Badge>
					{/each}
				</span>
			{/if}
			{#if isExpandable}
				<ChevronRightIcon
					class={cn(
						'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
						isExpanded ? 'rotate-90' : 'rotate-0'
					)}
				/>
			{/if}
		</h3>
		<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
			{start} - {end || 'Present'}
		</div>
	</div>
	{#if title}
		<div class="font-sans text-xs">{title}</div>
	{/if}
	{#if subtitle}
		<div class="font-sans text-xs text-muted-foreground">{subtitle}</div>
	{/if}
</div>

{#if isExpanded}
	<div class="mt-2 text-xs sm:text-sm" transition:slide={{ duration: 700, easing: quartOut }}>
		{#if description}
			<p>{description}</p>
		{/if}
		{#if bullets.length}
			<ul class="mt-2 space-y-1.5 text-muted-foreground">
				{#each bullets as bullet}
					<li class="flex gap-2">
						<span class="mt-[0.6em] h-px w-2 shrink-0 bg-muted-foreground/50"></span>
						<span>{bullet}</span>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
{/if}
