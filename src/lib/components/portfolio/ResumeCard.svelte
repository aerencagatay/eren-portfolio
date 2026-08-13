<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let logoUrl: string = '';
	export let company: string = '';
	export let title: string = '';
	export let subtitle: string = '';
	export let href: string = '';
	export let badges: string[] = [];
	export let description: string = '';
	export let bullets: string[] = [];
	export let start: string = '';
	export let end: string = '';

	let isExpanded = false;

	// No logo files yet, so fall back to the organisation's initials (max 3).
	$: monogram = company
		.split(/\s+/)
		.map((word) => word[0])
		.join('')
		.slice(0, 3)
		.toUpperCase();

	$: isExpandable = Boolean(description || bullets.length);

	let handleClick = (e: MouseEvent) => {
		if (isExpandable) {
			e.preventDefault();
			isExpanded = !isExpanded;
		}
	};
</script>

<a href={href || '#'} on:click={handleClick}>
	<div class="flex rounded-lg bg-card text-card-foreground">
		<div class="flex-none">
			<Avatar.Root class="bg-muted-background m-auto size-12 border dark:bg-foreground">
				<Avatar.Image src={logoUrl} alt={company} class="object-contain" />
				<Avatar.Fallback class="text-xs font-semibold">{monogram}</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="group ml-4 flex-grow flex-col items-center">
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
		</div>
	</div>
</a>
