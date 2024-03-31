export interface MovieListEntry {
    id: string,
    name: string,
    originalName?: string,
    thumbUrl: string,
    posterUrl: string,
    tags: [string],
    description?: string,
}