import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

const useApi = () => {
    const fetchPosts = async () => {
        return await api.get("/posts")
    }

    const fetchUser = async (userId) => {
        return await api.get(`/users/${userId}`)
    }
    const fetchAllUsers = async () => {
        return await api.get("/users")
    }
    const fetchComments = async (postId) => {
        return await api.get(`/comments/${postId}`)
    }
    const fetchAllComments = async () => {
        return await api.get("/comments")
    }

    const updatePost = async (post) => {
        return await api.put(`/posts/${post.id}`, post)
    }

    const addPost = async (post) => {
        return await api.post("/posts", post)
    }
    const addComment = async (comment) => {
        return await api.post("/comments", comment)
    }

    return {
        fetchPosts,
        fetchUser,
        fetchAllUsers,
        fetchComments,
        fetchAllComments,
        updatePost,
        addPost,
        addComment
    }
}

export default useApi;