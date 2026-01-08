export type Project = {
	title: string;
	slug: string;
	summary: string;
	role: string; // e.g., "Frontend Developer", "Solo Creator"
	year: string;
	tech: string[]; // e.g., ["SvelteKit", "Tailwind", "Supabase"]
	link: {
		label: string; // e.g., "Live Demo", "GitHub"
		url: string;
	};
	thumbnail?: string;
	highlights?: string[];
	featured: boolean;
};

export type Writing = {
	title: string;
	slug: string;
	date: string;
	description: string;
	tags: string[];
	published: boolean;
};
