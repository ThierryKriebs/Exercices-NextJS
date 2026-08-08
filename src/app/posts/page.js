import Post from "../components/Post";

// Function pour fetch
async function getPosts(){
    const res = await fetch('http://localhost:3000/posts/api');
    const data = await res.json();
    return data.data;
}

export default async function Blog() {
    const posts = await getPosts();
    // console.log(posts);

    return (
        <div className="container" style= {{marginBottom: '70px'}}>
            <h1>Notre Blog</h1>
            { 
                posts.map((post) => {
                    return <Post key = {post.id} title= {post.title} body= {post.body} id={post.id} />
                })
            }
        </div>
    )
    
}