export async function addFollow(userId: string, movieId: string) {
    return (await fetch(`${process.env.BACKEND_ADDRESS}/follow/add?userId=${userId}&movieId=${movieId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })).ok;
}

export async function removeFollow(userId: string, movieId: string) {
    return (await fetch(`${process.env.BACKEND_ADDRESS}/follow/delete?userId=${userId}&movieId=${movieId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })).ok;
}

export async function getFollowList(userId: string) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/follow/list?userId=${userId}`);
    if (request.ok) {
        return await request.json() as string[];
    } else {
        return [];
    }
}

export async function isAlreadyFollowed(userId: string, movieId: string) {
    return (await getFollowList(userId)).includes(movieId);
}