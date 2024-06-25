<script lang="ts">
	import type { History } from '$lib/history';
	import ChatBubble from './ChatBubble.svelte';

	export let history: History[];
</script>

{#each history as post}
	<ChatBubble {post} />
{/each}
