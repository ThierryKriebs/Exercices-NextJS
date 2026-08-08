import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const posts = data.slice(0,5); //récupération des premiers posts

    return NextResponse.json( {data: posts} ); //renvoie un objet json dont la propriété s'appelle data et qui contient les premiers posts
}