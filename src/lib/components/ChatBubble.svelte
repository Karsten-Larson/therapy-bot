<script lang="ts">
	import type { History } from '$lib/history';

	export let post: History;

	const { role } = post;
	const text = post.parts[0].text;
</script>

<div class:text-left={role === 'model'} class:text-right={role === 'user'}>
	<p>{role}</p>
	<p>{text}</p>
</div>
