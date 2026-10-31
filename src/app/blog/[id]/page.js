import Link from 'next/link';
import { notFound } from "next/navigation";

// Génération de métadata dynamique
export const generateMetadata = async ({ params }) => {
    const { id } = await params; // params est une Promise dans Next.js 15+
    
    const article = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((res) => res.json());
    
    return {
        title: article.title
        ? article.title.substring(0,15)
        : "Article introuvable",
        description: article.body
        ? article.body.substring(0, 50)
        : "Article introuvable",
    }
}

export default async function ArticleDetails({ params }) {
    const { id } = await params;

    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await resp.json();
    console.log(data);
    // Exemple d'objet récupéré:
    // {
    //     userId: 1,
    //     id: 5,
    //     title: 'nesciunt quas odio',
    //     body: 'repudiandae veniam quaerat sunt sed\n' +
    //         'alias aut fugiat sit autem sed est\n' +
    //         'voluptatem omnis possimus esse voluptatibus quis\n' +
    //         'est aut tenetur dolor neque'
    // }

    const { id: idRetourned, title, body} = data;

    if ( +id > 100) { // + => convertit id en number, plus cours à écrire que Number(id) > 100
                      // Le + devant une variable en JavaScript est un cast vers Number.  
        notFound();
    }
   
    return (
        <div className="container">
            {/* <h1>Détails article avec ID: {idRetour}</h1> */}
            <div className="card">
                <article>
                    <p>ID: {idRetourned}</p>
                    <h2>{title}</h2>
                    <p>{body}</p>  
                </article>
            </div>
            <Link href='/blog'>Vers articles</Link>
        </div>
    )
}