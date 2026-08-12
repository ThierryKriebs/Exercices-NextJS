
// NextResponse sert à créer et renvoyer des réponses HTTP compatibles avec l'App Router (route handlers) 
// et les middlewares de Next.js, en offrant des helpers pour JSON, redirections, réécritures, gestion des en-têtes et des cookies.
import { NextResponse } from "next/server"; 
                                            

export async function GET(request, props) {
    const params = await props.params;
    const id = params.id;
    console.log("id reçu dans route.js: ", id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const articleData = await res.json();
    return NextResponse.json(articleData); // renvoie les données de l'article en format JSON
}