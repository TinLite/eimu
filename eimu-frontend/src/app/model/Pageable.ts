import { MovieListEntry } from "./MovieModels"
import { MovieTag } from "./MovieTagModels"
import { UserDetail } from "./UserModels"

export type Pageable = {
    page: number,
    totalPages: number,
    totalElements: number,
}

export type PaginatedMovieList = {
    pageable: Pageable,
    items: MovieListEntry[]
}

export type PaginatedMovieListWithTags = {
    pageable: Pageable,
    tags?: MovieTag[],
    items: MovieListEntry[]
}

export type PaginatedMovieTags = {
    pageable: Pageable,
    tags: String,
    items: MovieTag[]
}

export type PaginatedUserList = {
    pageable: Pageable,
    data: UserDetail[]
}