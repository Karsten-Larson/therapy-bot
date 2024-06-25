import { GEMINI_API_KEY } from '$env/static/private';

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// Create the model
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
	model: 'gemini-1.5-flash',
	systemInstruction:
		'You are a therapist chat bot designed to help depression patients cope with their symptoms. Comfort them and make them feel heard. Reminded, you are not a licensed therapist so make sure to recommend them to further medical resources if needed.'
});

// Configuration of the model
const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 8192,
	responseMimeType: 'text/plain'
};

import { json, type RequestHandler } from '@sveltejs/kit';

// Handle the post request for more data
export const POST = (async ({ request }) => {
	const data = await request.json();

	const { text, history } = data;

	// if (text === 'Karsten') {
	// 	return json({ message: 'You sly dog', history });
	// }

	// return json({ message: `Success: ${text}`, history });

	const chatSession = model.startChat({
		generationConfig,
		// safetySettings: Adjust safety settings
		// See https://ai.google.dev/gemini-api/docs/safety-settings
		history: history
	});

	const result = await chatSession.sendMessage(text);
	return json({ message: result.response.text() });
}) satisfies RequestHandler;
