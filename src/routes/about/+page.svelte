<script lang="ts">
	import ndsuLogo from '$lib/assets/ndsu.png';
	import alabamaAMLogo from '$lib/assets/alabama a&m.png';
</script>

<div
	class="bg-zinc-800/50 p-8 rounded-xl mx-auto w-full max-w-2xl my-4 space-y-4 [&_p]:text-lg [&_p]:indent-8"
>
	<h1 class="text-center text-4xl">AI Therapist Chatbot</h1>

	<p>
		This project was made in collaboration with undergraduate students from North Dakota State
		University and Alabama A&M University under the Edge AI Summer Program. The program aims at
		teaching students the future of AI and its applications in the medical field.
	</p>

	<p>
		Our therapy chatbot is a cutting-edge digital mental health aid made to reassure and assist
		people going through stressful or depressing times. This chatbot was created with the
		Google-Gemini API and focuses on empathy and accessibility while providing a smooth user
		experience. Simple text interactions engage users and foster a friendly environment where they
		can find solace from emotional suffering.
	</p>
	<p>
		The chatbot is taught to provide insightful suggestions and resources for more professional
		treatment, even if it lacks a license to practice therapy. The chatbot seeks to close the
		accessibility gap in mental health care by utilizing cutting-edge AI technology to offer people
		in need of ongoing and rapid support. Our mission is to lessen depressive symptoms by providing
		a trustworthy, sympathetic partner that users may enjoy from the comfort of their homes. This
		app adds to the integration of AI in mental health care, demonstrating the potential of
		technology to enhance emotional well-being and support mental health initiatives.
	</p>

	<div class="flex flex-col">
		<img src={ndsuLogo} alt="NDSU Logo" />
		<img class="bg-white" src={alabamaAMLogo} alt="Alabama A&M Logo" />
		<span class="text-lg mt-4"
			>Link to all source code: <a
				class="text-primary-500 underline"
				href="https://github.com/Karsten-Larson/therapy-bot">Github Repository</a
			></span
		>
	</div>
</div>
