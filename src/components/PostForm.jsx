import {useDispatch} from "react-redux";
import {useState} from "react";
import {addPost} from "../store/slice/postSlice.jsx";


const PostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === "" || body.trim() === "") return;

        const newPost = {
            userId: 1,
            title,
            body,
        }

        dispatch(addPost(newPost))
        setTitle("")
        setBody("")
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ml-3 mr-3">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre du post"
                className='p-3 border rounded'
            />
            <textarea
                cols="4"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Contenu du post"
                className='p-3 border rounded'
            />
            <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
            >
                Ajouter le post
            </button>
        </form>
    );
}

export default PostForm;