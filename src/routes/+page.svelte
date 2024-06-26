<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import TypeWriter from 'svelte-typewriter';
</script>

<div
	class="container w-full max-w-2xl space-y-20 h-full mx-auto flex flex-col justify-center items-center"
>
	<div class="space-y-10 text-center flex flex-col items-center">
		<TypeWriter interval={50}>
			<h2 class="h2">Welcome to Therapy Bot</h2>
		</TypeWriter>

		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a class="btn variant-filled" href="/chat"> Start Chatting </a>
		</div>
	</div>

	<!-- Information -->
	<div class="text-start w-full bg-surface-800/50 p-8 rounded-xl space-y-4">
		<h1 class="text-center text-xl">Frequently Asked Questions</h1>
		<Accordion autocollapse>
			<AccordionItem>
				<svelte:fragment slot="summary"
					><h2>Can this replace the need of a therapist?</h2></svelte:fragment
				>
				<svelte:fragment slot="content">
					<p>
						No, while our AI Therapist can be a helpful tool, it cannot <strong
							>replace a licensed mental health professional</strong
						>.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"><h2>Is my data safe and confidential?</h2></svelte:fragment>
				<svelte:fragment slot="content"
					>No, while our AI Therapist does not track any responses. It relies on Google Gemini's
					API, which does track responses. Be weary of any personal or confidential information you
					share.</svelte:fragment
				>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"
					><h2>What are the limitations of the AI Therapist?</h2></svelte:fragment
				>
				<svelte:fragment slot="content"
					>The AI Therapist cannot diagnosis conditions or replace actual therapists. If you have a
					concern with your mental health reach out to a trained medical professional.</svelte:fragment
				>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
</div>
