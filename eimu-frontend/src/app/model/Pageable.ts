import { MovieListEntry } from "./MovieModels"
import { MovieTag } from "./MovieTagModels"

export type Pageable = {
    page: Number,
    totalPages: Number,
    totalElements: Number,
    hasPrevious: Boolean,
    hasNext: Boolean,
}

export type PaginatedMovieList = {
    pageable: Pageable,
    items: [MovieListEntry]
}

export type PaginatedMovieListWithTags = {
    pageable: Pageable,
    tags?: [MovieTag],
    items: [MovieListEntry]
}

export type PaginatedMovieTags = {
    pageable: Pageable,
    tags: String,
    items: [MovieTag]
}