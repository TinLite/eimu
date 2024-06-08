"use server";

export async function createRate(movieId: string, userId: string, rating: number) {
    var request = await fetch(
        `${process.env.BACKEND_ADDRESS}/rating/ratemovie`,
        {
            method: 'POST',
            body: JSON.stringify({
                movieId,
                userId,
                rating
            }),
            headers: {
                "Content-Type": "application/json; charset=utf8"
            },
            cache: "no-cache"
        }
    )
}
export async function getRate(movieId: string) {
    var request = await fetch(
        `${process.env.BACKEND_ADDRESS}/rating/rateshow/${movieId}`,
        {
            method: 'GET',
            cache: "no-cache"
        }
    )
    return (await request.json()) as {
        movieId: string,
        AvgMovie: number,
        CountRate: number
    }
}