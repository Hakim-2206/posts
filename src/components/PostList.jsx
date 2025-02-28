import {useSelector} from "react-redux";
import {selectPost, selectUsers} from "../store/selector/post-selector.js";
import PostItem from "./PostItem.jsx";

const PostList = () => {

    const posts = useSelector(selectPost)
    const users = useSelector(selectUsers)

    return (
        <div className='posts-list mt-20'>
            {
                posts.length ? (
                    [...posts].reverse().map((post) => {
                        const user = users.find((user) => user.id === post.userId)
                        return <PostItem key={post.id} post={post} user={user}/>
                    })
                ) : (
                    <p>Aucun post à afficher</p>
                )}
        </div>
    );
}

export default PostList;