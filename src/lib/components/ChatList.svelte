<script lang="ts">
	import type { History } from '$lib/history';
	import { onMount } from 'svelte';
	import ChatBubble from './ChatBubble.svelte';

	export let history: History[];
	export let loading: boolean = false;

	let elemChat: HTMLElement;

	const scrollDown = () => elemChat.scrollTo({ top: elemChat.scrollHeight, behavior: 'instant' });

	onMount(scrollDown);
</script>

<div bind:this={elemChat} class="h-full overflow-y-auto p-4 space-y-4">
	{#each history as post, i}
		<ChatBubble
			{post}
			typewriter={i === history.length - 1 && post.role === 'model'}
			{scrollDown}
		/>
	{/each}

	{#if loading}
		<ChatBubble post={history[0]} loading />
	{/if}
</div>
