import { MovieListEntry } from "./MovieModels"
import { MovieTag } from "./MovieTagModels"

export interface Pageable {
    page: Number,
    totalPages: Number,
    totalElements: Number,
    hasPrevious: Boolean,
    hasNext: Boolean,
}

export interface PaginatedMovieList {
    pageable: Pageable,
    items: [MovieListEntry]
}

export interface PaginatedMovieListWithTags {
    pageable: Pageable,
    tags: String,
    items: [MovieListEntry]
}

export interface PaginatedMovieTags {
    pageable: Pageable,
    tags: String,
    items: [MovieTag]
}