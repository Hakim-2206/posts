import Navbar from "../components/Navbar.jsx";
import PostForm from "../components/PostForm.jsx";
import {Link} from "react-router";

const AddPost = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto max-w-2xl pt-30">
                <h1 className="text-2xl font-bold mb-4 flex mx-auto justify-center">Ajouez un nouveau post !</h1>
                <PostForm/>
                <Link className="mt-4 flex mx-auto justify-center text-blue-500 hover:underline" to={"/"}>
                    Retour à la liste des posts
                </Link>
            </div>
        </div>
    );
}

export default AddPost;