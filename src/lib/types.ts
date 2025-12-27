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
	thumbnail?: string; // Path to image in /static
	featured: boolean;
};

export type Post = {
	title: string;
	slug: string;
	date: string;
	description: string;
	tags: string[];
	published: boolean;
};
