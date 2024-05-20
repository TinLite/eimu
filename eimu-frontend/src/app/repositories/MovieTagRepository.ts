'use server';
import { MovieTag } from "@/app/model/MovieTagModels";

export async function getTagsDetail(tagIds: string | string[]) : Promise<MovieTag[]> {
    var combinedTagIds = (typeof tagIds == "string" ? tagIds : tagIds.join(","))
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movietag?ids=${combinedTagIds}`)).json() as MovieTag[];
}

export async function getAllTag() : Promise<MovieTag[]> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movietag`)).json() as MovieTag[];
}
