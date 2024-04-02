export interface MovieListEntry {
    id: string,
    name: string,
    originalName?: string,
    thumbUrl: string,
    posterUrl: string,
    tags: [string],
    description?: string,
}

export interface Movie {
    id: string,
    name: string,
    originalName?: string,
    thumbUrl: string,
    posterUrl: string,
    director?: string,
    casts?: string,
    tags: [string],
    description?: string,
}