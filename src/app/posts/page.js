
"use client"
import { useState, useEffect } from "react";
import Post from "@/app/components/Post";
// import PostButton from "@/app/components/PostButton";
import Search from "@/app/components/Search";


export default function Blog() {
    
    const [posts, setPosts] = useState([]); 
    // const posts = await getPosts(); // Fait précédemment (avant le champ de recherche)
    
    // Function pour récupérer les posts depuis l'API
    const getPosts = async () => {
        const res = await fetch('http://localhost:3000/posts/api');
        const data = await res.json();
        setPosts(data.data)
    }

    // pour le champ de recherche, on va utiliser useEffect pour fetch les posts et les stocker dans le state
    useEffect(() => {
        getPosts();
    }, []);


    // function pour mettre à jour le state des posts en fonction de la recherche
    const updatedArticles = (articles) => {
        setPosts(articles);
    }

    const handleRefresh = () => {
        getPosts();
    }

    return (
        <div className="container" style= {{marginBottom: '70px'}}>
           {/* Avant: Bouton pour envoyer un post */}
           {/* <PostButton />      */}

           {/* Champ de recherche */}
            <Search 
                getSearchResults={updatedArticles} 
                handleRefresh={handleRefresh}
            />

           
            <h1>Notre Blog</h1>
            { 
                posts.map((post) => {
                    return <Post key = {post.id} title= {post.title} body= {post.body} id={post.id} />
                })
            }
        </div>
    )
    
}