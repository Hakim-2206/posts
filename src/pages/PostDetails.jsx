import {useDispatch, useSelector} from "react-redux";
import {selectComments, selectPost, selectUsers} from "../store/selector/post-selector.js";
import PostItem from "../components/PostItem.jsx";
import Navbar from "../components/Navbar.jsx";
import {useParams} from "react-router";
import {useState} from "react";
import {addComment} from "../store/slice/postSlice.jsx";


const PostDetails = () => {
    const {postId} = useParams()
    const posts = useSelector(selectPost)
    const users = useSelector(selectUsers)
    const comments = useSelector(selectComments)
    const dispatch = useDispatch()
    const [newComment, setNewComment] = useState("");
    const [commentTitle, setCommentTitle] = useState("");

    const post = posts.find((p) => p.id === parseInt(postId))

    if (!post) {
        return <p className='mt-20 text-center'>Poste introuvable</p>
    }

    const user = users.find((user) => user.id === post.userId);

    const postComments = comments.filter((com) => com.postId === post.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newComment.trim() === "") return;

        const comment = {
            postId: post.id,
            name: commentTitle,
            body: newComment,
            email: user.email
        }
        dispatch(addComment(comment))
        setNewComment('')
        setCommentTitle("")

    }

    return (
        <div className='posts-list mt-30 py-4 ml-8 mr-8'>
            <Navbar/>
            <div className="container mx-auto max-w-2xl px-4 bg-white shadow-md rounded-xl p-4">
                <PostItem post={post} user={user}/>
                <h3 className="mt-6 text-lg font-semibold">Commentaires :</h3>
                {postComments.length ? (
                    <ul className="mt-2 space-y-2">
                        {postComments.map((com) => (
                            <li key={com.id} className="border rounded-lg p-3 bg-gray-100">
                                <p className="text-sm font-semibold">titre: {com.name}</p>
                                <p className="text-sm">commentaire: {com.body}</p>
                                <em className="text-sm">email: {com.email}</em>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-2 text-gray-500">Aucun commentaire pour ce post.</p>
                )}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        required={true}
                        type="text"
                        value={commentTitle}
                        onChange={(e) => setCommentTitle(e.target.value)}
                        placeholder="Titre du commentaire"
                        className="flex mx-auto p-3 border rounded mt-4 "
                    />
                    <textarea
                        required={true}
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                        className="flex mx-auto p-3 border rounded mt-4 "
                        placeholder={"Ton commentaire..."}
                        rows="3"
                    />
                    <button
                        type="submit"
                        className="flex mx-auto border mt-2 cursor-pointer p-2
                    border-blue-500 rounded text-white bg-blue-500
                    hover:bg-blue-500/75 transition-all duration-500"
                    >
                        Ajouter un commentaire
                    </button>
                </form>
            </div>

        </div>
    );
}

export default PostDetails;