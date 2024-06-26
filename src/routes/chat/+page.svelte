<script lang="ts">
	import ChatList from '$lib/components/ChatList.svelte';
	import type { History } from '$lib/history';

	let text: string = '';
	let history: History[] = [
		{ role: 'user', parts: [{ text: '**user enter chat**' }] },
		{ role: 'model', parts: [{ text: "Hello there, I'm glad to see you here!" }] }
	];
	let message: Promise<string> = new Promise((resolve, reject) => {
		resolve('"Input text to begin"');
	});

	const handleSubmit = async () => {
		if (text === '' || history[history.length - 1].role === 'user') return;

		history.push({ role: 'user', parts: [{ text }] });

		const response = await fetch('/api/chat', {
			method: 'POST',
			body: JSON.stringify({
				text,
				history
			})
		});

		text = '';

		message = new Promise((resolve, reject) => {
			response
				.json()
				.then((value) => {
					setTimeout(
						() => {
							history = [...history, { role: 'model', parts: [{ text: value.message }] }];
							resolve(value.message);
						},
						Math.random() * 2000 + 1000
					);
				})
				.catch((error) => reject(error));
		});
	};
</script>

<svelte:head>
	<title>Chat | Therapy Bot</title>
</svelte:head>

<div class="flex h-full">
	<div class="m-auto h-[90svh] w-full max-w-2xl bg-zinc-800/20 p-8 rounded-lg flex flex-col">
		{#await message}
			<ChatList history={history.slice(1)} loading />
		{:then}
			<ChatList history={history.slice(1)} />
		{:catch}
			<p>Error</p>
		{/await}

		<form
			on:submit|preventDefault={handleSubmit}
			class="input-group input-group-divider grid-cols-[1fr_auto]"
		>
			<input
				type="text"
				name="user-input"
				autocomplete="off"
				placeholder="Enter input"
				class="bg-transparent border-0 ring-0"
				bind:value={text}
			/>
			<button type="submit" class="variant-filled-primary">Send</button>
		</form>
	</div>
</div>
