import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Blog One', body: 'lorem ipsum...', author: 'Roman', id: 1},
        { title: 'Blog Two', body: 'lorem ipsum...', author: 'Khalid', id: 2},
        { title: 'Blog Three', body: 'lorem ipsum...', author: 'Khalid', id: 3},
        { title: 'Blog Four', body: 'lorem ipsum...', author: 'Roman', id: 4}
    ])

    const [name, setName] = useState('Kashif');
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect( () => {
        console.log('call use effect')
    }, [name])

    return (
        <div className="home">

            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <button onClick={() => setName('Roman')} >Change Name</button>
            <p>{name}</p> */}
        </div>
    );
}
 
export default Home;