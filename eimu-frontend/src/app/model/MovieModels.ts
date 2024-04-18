export interface MovieListEntry {
    id: string,
    name: string,
    originalName?: string,
    thumbUrl: string,
    posterUrl: string,
    tags: [string],
    description?: string,
    year?: number,
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
    episodes: [EpisodeServer]
}

export interface EpisodeServer {
    serverName: string,
    episodeList: [Episode]
}

export interface Episode {
    id: string,
    name: string,
    embed: string
}