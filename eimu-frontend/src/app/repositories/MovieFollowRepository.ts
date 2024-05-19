"use server";
export async function addFollow(userId: string, movieId: string) {
    const response = await fetch(`${process.env.BACKEND_ADDRESS}/follow/add?userId=${userId}&movieId=${movieId}`, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
    })
    return response.ok;
}

export async function removeFollow(userId: string, movieId: string) {
    const response = await fetch(`${process.env.BACKEND_ADDRESS}/follow/delete?userId=${userId}&movieId=${movieId}`, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return response.ok;
}

export async function getFollowList(userId: string) {
    var request = await fetch(
        `${process.env.BACKEND_ADDRESS}/follow/list?userId=${userId}`,
        {
            cache: "no-cache",
        }
    );
    if (request.ok) {
        console.log(request.url)
        return await request.json() as string[];
    } else {
        return [];
    }
}

export async function isAlreadyFollowed(userId: string, movieId: string) {
    return (await getFollowList(userId)).includes(movieId);
}