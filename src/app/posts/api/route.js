import { NextResponse } from "next/server";
//import { headers} from 'next/headers';
import {cookies} from 'next/headers';

// GET
export async function GET(request) {
    // méthode 1:
    // const requestheaders = headers();
    // console.log((await requestheaders).get("Auth"));

    // méthode 2:
    const requestheaders = new Headers(request.headers);
    console.log(requestheaders.get("Auth"));


    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // Si on veut retourner les premiers posts
    // const posts = data.slice(0,5); //récupération des premiers posts
    // return NextResponse.json( {data: posts} ); //renvoie un objet json dont la propriété s'appelle data et qui contient les premiers posts
    //return NextResponse.json({ data });
    
    // Si on veut retourner du html:
    // return new NextResponse("<h2>Data en HTML</h2>", {
    //     headers: { 
    //         "Content-Type": "text/html" //permettra de préciser que le contenu à afficher est du HTML
    //     }
    // });

    // Si on veut lire un cookie méthode 1
    // const userToken = request.cookies.get("userToken")
    // console.log(userToken); //{ name: 'userToken', value: '12345' }

    // Si on veut lire un cookie méthode 2
    const cookiesStore = await cookies();
    const userToken = cookiesStore.get('userToken');
    console.log(userToken); //{ name: 'userToken', value: '12345', path: '/' }


    // Si on veut retourner des cookies
    // return new NextResponse({ data }, {
    //     définition du cookie directement dans notre headers
    //     headers: { 
    //         "Set-Cookie": "userToken=12345"
    //     }
    // });

    // Si on veut définir un cookie, méthode 2:
    cookiesStore.set("theme", "dark");
    console.log((await cookies()).get("theme")) // ou cookiesStore.get("theme")

    console.log(cookiesStore.getAll());
    // [
    //     { name: 'userToken', value: '12345', path: '/' },
    //     { name: 'theme', value: 'dark', path: '/' },
    //     { name: '__next_hmr_refresh_hash__', value: '213', path: '/' }
    // ]

    // Si on veut retourner des cookies et un json
    return NextResponse.json(
        { 
            data: data,
            token: userToken 
        }, 
        {
                // définition du cookie directement dans notre headers
                headers: { 
                    "Set-Cookie": "userToken=12345"
                }
        }
    );



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