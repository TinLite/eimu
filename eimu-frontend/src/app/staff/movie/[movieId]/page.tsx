import { getMovieDetail, setDetail } from "@/app/repositories/MovieRepository"
import { getTagsDetail } from "@/app/repositories/MovieTagRepository"
import { z } from "zod"
import { StaffEpisodeEdit, StaffMovieEdit } from "./StaffMovieEdit"

export default async function StaffMovieDetail({ params }: { params: { movieId: string } }) {
    const { movieId } = params
    const movie = await getMovieDetail(movieId)
    const tags = await getTagsDetail(movie.tags)



    const detailSubmitHandler = async (prevStatus: any, formData: FormData) => {
        'use server'

        const DetailValidator = z.object({
            name: z.string(),
            year: z.number().optional(),
            originalName: z.string().optional(),
            description: z.string().optional(),
            director: z.string().optional(),
            language: z.string().optional(),
            casts: z.string().optional(),
            totalEpisodes: z.number().optional(),
        })

        // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms:~:text=One%20thing%20to%20note%20is%20that%20the%20formData%20will%20include%20additional%20%24ACTION_%20properties.


        const result = await DetailValidator.safeParseAsync(formData)

        if (result.success) {
            setDetail(movieId, result.data)
            return { message: "Cập nhật thành công" }
        } else {
            return { message: "Có lỗi xảy ra" }
        }
    }

    return (
        <div className="">
            <div className="bg-primary text-white text-center py-2">Thông tin ở trang này có thể được chỉnh sửa</div>
            <div className="px-8">
                <StaffMovieEdit movie={movie} tags={tags} detailSubmitAction={detailSubmitHandler} />
                <StaffEpisodeEdit episodeServerList={movie.episodes} />
            </div>
        </div>
    )
}