import { getWritings } from "$lib/utils/writings";

export async function load() {
	const writings = await getWritings();
	return { writings };
}
