<script lang="ts">
	import type { History } from '$lib/history';
	import Typewriter from 'svelte-typewriter';

	export let post: History;

	export let loading: boolean = false;
	export let typewriter: boolean = false;
	export let scrollDown: () => void = () => {};

	const { role } = post;
	const message = post.parts[0].text;

	const animationDelay = (index: number) => {
		return 500 * index;
	};
</script>

{#if typewriter}
	<div class="grid grid-cols-[auto_1fr] gap-2">
		<div class="card p-4 variant-soft rounded-tl-none space-y-2">
			<header class="flex justify-between items-center">
				<p class="font-bold">Therapy Bot</p>
				<!-- <small class="opacity-50">{bubble.timestamp}</small> -->
			</header>
			<Typewriter cursor={false} on:done={scrollDown}>
				<p>{message}</p>
			</Typewriter>
		</div>
	</div>
{:else if loading}
	<div class="grid grid-cols-[auto_1fr] gap-2">
		<div class="card p-4 variant-soft rounded-tl-none space-y-2">
			<header class="flex justify-between items-center">
				<p class="font-bold">Therapy Bot</p>
				<!-- <small class="opacity-50">{bubble.timestamp}</small> -->
			</header>
			<div class="flex gap-2">
				{#each { length: 5 } as _, i}
					<div
						class="mx-auto placeholder-circle animate-bounce w-5"
						style={`animation-delay: ${animationDelay(i)}ms; 
                        -webkit-animation-delay: ${animationDelay(i)}ms; 
                        -moz-animation-delay: ${animationDelay(i)}ms; 
                        -o-animation-delay: ${animationDelay(i)}ms;`}
					/>
				{/each}
			</div>
		</div>
	</div>
{:else if role === 'model'}
	<div class="grid grid-cols-[auto_1fr] gap-2">
		<div class="card p-4 variant-soft rounded-tl-none space-y-2">
			<header class="flex justify-between items-center">
				<p class="font-bold">Therapy Bot</p>
				<!-- <small class="opacity-50">{bubble.timestamp}</small> -->
			</header>
			<p>{message}</p>
		</div>
	</div>
{:else}
	<div class="grid grid-cols-[1fr_auto] gap-2">
		<div />
		<div class="card p-4 rounded-tr-none space-y-2">
			<header class="flex justify-between items-center">
				<p class="font-bold">Patient</p>
				<!-- <small class="opacity-50">{bubble.timestamp}</small> -->
			</header>
			<p>{message}</p>
		</div>
	</div>
{/if}
