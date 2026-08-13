<script>
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<!-- Dark by default, but the dock toggle still wins and persists. -->
<ModeWatcher defaultMode="dark" />
<div
	class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24"
>
	<slot></slot>
	<Navbar />
</div>
