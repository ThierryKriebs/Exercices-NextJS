import { NextResponse } from "next/server";

// GET
export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // const posts = data.slice(0,5); //récupération des premiers posts
    // return NextResponse.json( {data: posts} ); //renvoie un objet json dont la propriété s'appelle data et qui contient les premiers posts
    return NextResponse.json({ data });
}


// POST
export async function POST(request) {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: "Nouvel article via POST",
            body: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        } 
    });

    const data = await res.json();
    return Response.json(data);
}