import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+id);

    // useEffect(() => {
    //     console.log(blog);
    //   }, [blog]);

    return ( 
        <div className="blog-details">
            { isPending && <div> Loding... </div> }
            { error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{ blog.body }</div>
                </article>
            )}

        </div>
    );
}
 
export default BlogDetails;