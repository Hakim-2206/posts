import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAllComments, fetchAllUsers, fetchPost} from "./store/slice/postSlice.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import AddPost from "./pages/AddPost.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost())
        dispatch(fetchAllUsers())
        dispatch(fetchAllComments())
    }, []);

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/post/:postId"} element={<PostDetails/>}/>
                <Route path={"/add"} element={<AddPost/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;