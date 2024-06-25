export interface Part {
	text: string;
}

export interface History {
	role: 'user' | 'model';
	parts: Part[];
}
