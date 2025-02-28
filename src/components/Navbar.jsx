import {Link} from "react-router";
import {FaRegCommentDots} from "react-icons/fa";


const Navbar = () => {

    return (
        <div>
            <nav
                className='navbar flex justify-around bg-blue-500/90 p-4 fixed top-0 left-0 w-full shadow-md z-50'>
                <div>
                    <span className={"text-white text-[20px]"}><FaRegCommentDots/></span>
                </div>
                <div className="links">
                    <Link className="text-white" to={'/'}>Accueil</Link>
                    <Link className="text-white pl-16" to={'/add'}>Creer un post</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;