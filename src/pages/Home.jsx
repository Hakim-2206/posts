import PostList from "../components/PostList.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {

    return (
        <div>
            <Navbar/>
            <h1 className="text-5xl text-blue-500/50 font-bold flex mx-auto justify-center pt-25">Les Posts</h1>
            <hr className="max-w-[500px] flex mx-auto mt-4 text-blue-300"/>
            <div className='container mx-auto max-w-2xl p-4'>
                <PostList/>
            </div>
        </div>
    );
}

export default Home;