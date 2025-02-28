import {Link} from "react-router";

const PostItem = ({post, user}) => {

    return (
        <div
            className=' rounded-2xl post-item container border-blue-500/70 bg-blue-500/70 py-4 max-w-[850px] mx-auto p-8 mt-4 hover:bg-blue-500/40 transition-all duration-600'>
            <Link to={`/post/${post.id}`}>
                <h2 className='text-[20px]'><strong>{post.title}</strong></h2>
                <p>{post.body}</p>
                <p>Auteur : <strong><em>{user ? user.name : "Utilisateur inconnu"}</em></strong></p>

            </Link>
        </div>
    );
}

export default PostItem;