<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Therapy Bot!</h2>

		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a class="btn variant-filled" href="/chat" target="_blank" rel="noreferrer">
				Start Chatting
			</a>
		</div>

		<!-- Information -->
		<div class="text-start w-full">
			<h1>Frequently Asked Questions:</h1>
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="summary"><p>Does this replace a therapist?</p></svelte:fragment>
					<svelte:fragment slot="content">
						<p>No, this does not replace an officially licensed therapist.</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary">(icon)</svelte:fragment>
					<svelte:fragment slot="content">(content)</svelte:fragment>
				</AccordionItem>
				<!-- ... -->
			</Accordion>
		</div>
	</div>
</div>
