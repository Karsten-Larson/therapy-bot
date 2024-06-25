<script lang="ts">
	import type { History } from '$lib/history';

	let text: string = '';
	let history: History[] = [
		{ role: 'model', parts: [{ text: "Hello there, I'm glad you're here!" }] }
	];
	let message: Promise<string> = new Promise((resolve, reject) => {
		resolve('"Input text to begin"');
	});

	const handleSubmit = async () => {
		history.push({ role: 'user', parts: [{ text }] });

		const response = await fetch('/api/chat', {
			method: 'POST',
			body: JSON.stringify({
				text,
				history
			})
		});

		message = new Promise((resolve, reject) => {
			response
				.json()
				.then((value) => {
					history.push({ role: 'model', parts: [{ text: value.message }] });
					resolve(value.message);
				})
				.catch((error) => reject(error));
		});
	};
</script>

{#await message}
	<p>...waiting</p>
{:then text}
	<p>The text is {text}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<form on:submit|preventDefault={handleSubmit}>
	<input
		type="text"
		name="user-input"
		placeholder="Enter input"
		class="text-black"
		bind:value={text}
	/>
	<button type="submit" class="btn">Submit</button>
</form>

<!-- {#await promise}
	<p>Waiting...</p>
{:then response}
	<p>{response.response.text()}</p>
{:catch error}
	<p>{error.message}</p>
{/await} -->
