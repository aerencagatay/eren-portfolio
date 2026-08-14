<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import ResumeCardBody from './ResumeCardBody.svelte';

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

	// Falls back to the organisation's initials when there is no logo file.
	$: monogram = company
		.split(/\s+/)
		.map((word) => word[0])
		.join('')
		.slice(0, 3)
		.toUpperCase();

	$: isExpandable = Boolean(description || bullets.length);

	const toggle = () => (isExpanded = !isExpanded);

	// The body holds a heading and a list, which a <button> may not contain, so
	// it is a div carrying the button role — and therefore needs its own key
	// handling to stay usable without a mouse.
	const onKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggle();
		}
	};

	const BODY_CLASS = 'group ml-4 flex-grow flex-col items-center text-left';
</script>

<!--
	The logo links to the organisation and the body toggles the detail. They are
	siblings rather than nested: an <a> cannot wrap another <a>, and a card that
	both navigates and expands on the same click can only ever do one of them.
-->
<div class="flex rounded-lg bg-card text-card-foreground">
	<svelte:element
		this={href ? 'a' : 'div'}
		href={href || undefined}
		target={href ? '_blank' : undefined}
		rel={href ? 'noopener noreferrer' : undefined}
		aria-label={href ? `${company} website` : undefined}
		class="flex-none {href ? 'transition-opacity hover:opacity-80' : ''}"
	>
		<Avatar.Root class="bg-muted-background m-auto size-12 border dark:bg-foreground">
			<Avatar.Image src={logoUrl} alt={company} class="object-contain" />
			<Avatar.Fallback class="text-xs font-semibold">{monogram}</Avatar.Fallback>
		</Avatar.Root>
	</svelte:element>

	<!-- Two static branches rather than one dynamic element: Svelte's a11y checks
	     cannot see that role and tabindex are only set together. -->
	{#if isExpandable}
		<div
			role="button"
			tabindex="0"
			aria-expanded={isExpanded}
			on:click={toggle}
			on:keydown={onKeydown}
			class="{BODY_CLASS} cursor-pointer"
		>
			<ResumeCardBody
				{company}
				{title}
				{subtitle}
				{badges}
				{description}
				{bullets}
				{start}
				{end}
				isExpandable={true}
				{isExpanded}
			/>
		</div>
	{:else}
		<div class={BODY_CLASS}>
			<ResumeCardBody {company} {title} {subtitle} {badges} {start} {end} />
		</div>
	{/if}
</div>
