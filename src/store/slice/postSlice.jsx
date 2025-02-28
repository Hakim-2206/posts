import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import useApi from "../../service/api.service.jsx";
import {toast} from "react-toastify";


const api = useApi()
export const fetchPost = createAsyncThunk(
    "posts/fetchPost",
    async (_, thunkAPI) => {
        return (await api.fetchPosts()).data
    }
)

export const fetchUser = createAsyncThunk(
    "posts/fetchUser",
    async (userId, thunkAPI) => {
        return (await api.fetchUser(userId)).data
    }
)

export const fetchAllUsers = createAsyncThunk(
    "posts/fetchAllUsers",
    async (_, thunkAPI) => {
        return (await api.fetchAllUsers()).data
    }
)

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (commentId, thunkAPI) => {
        return (await api.fetchComments(commentId)).data
    }
)

export const fetchAllComments = createAsyncThunk(
    "comments/fetchAllComments",
    async (_, thunkAPI) => {
        return (await api.fetchAllComments()).data
    }
)

export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async (post) => {
        return (await api.updatePost(post)).data
    }
)

export const addPost = createAsyncThunk(
    "posts/addPost",
    async (post) => {
        toast.success("Votre post a bien été ajouté !")
        return (await api.addPost(post)).data;
    }
)

export const addComment = createAsyncThunk(
    "comments/addComment",
    async (comment, thunkAPI) => {
        toast.success("Votre commentaire a bien été ajouté !")
        return (await api.addComment(comment)).data
    }
)

export const resetError = createAsyncThunk(
    "posts/resetError",
    async (time = 3500) => {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve("")
            }, time)
        })
    }
)

const initialState = {
    posts: [],
    users: [],
    comments: [],
    isLoading: false,
    error: ""
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.posts = action.payload
                state.isLoading = false
            })
            .addCase(fetchPost.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.isLoading = false
                state.error = "Une erreur est survenue"
            })
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.users[action.payload.id] = action.payload
            })
        builder
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.users = action.payload; // Stockez tous les utilisateurs
            })
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllUsers.rejected, (state) => {
                state.isLoading = false;
                state.error = "Une erreur est survenue lors du chargement des utilisateurs";
            })
        builder
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments[action.payload.id] = action.payload
            })
            .addCase(fetchAllComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
        builder
            .addCase(addComment.fulfilled, (state, action) => {
                state.comments.push(action.payload)
                state.isLoading = false;
            })
            .addCase(addComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addComment.rejected, (state) => {
                state.isLoading = false;
                state.error = "Une erreur est survenue lors de l'ajout"
            })
        builder
            .addCase(updatePost.fulfilled, (state, action) => {
                state.posts = state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        return action.payload
                    }
                    return post
                })
                state.isLoading = false
            })
            .addCase(updatePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePost.rejected, (state) => {
                state.isLoading = false
                state.error = "Une erreur est survenue"
            })
        builder
            .addCase(addPost.fulfilled, (state, action) => {
                if (!Array.isArray(state.posts)) {
                    state.posts = []
                }
                state.posts.push(action.payload)
                state.isLoading = false
            })
            .addCase(addPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addPost.rejected, (state) => {
                state.isLoading = false
                state.error = "Une erreur est survenue"
            })
        builder
            .addCase(resetError.fulfilled, (state, action) => {
                state.error = action.payload;
            })
    }
})

export const {} = postSlice.actions;

export default postSlice.reducer;