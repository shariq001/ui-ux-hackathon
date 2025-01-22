import { createClient } from "next-sanity";


const client = createClient({
    projectId: "4o2tsd03",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sanityFetch({query, params = {}}: {query: string, params?: any}) {
    return await client.fetch(query, params)
}