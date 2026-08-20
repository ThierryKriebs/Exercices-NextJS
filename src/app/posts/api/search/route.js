import { NextResponse } from 'next/server';



// fonction pour récupérer les articles depuis l'API jsonplaceholder
async function fetchArticles() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await response.json();
    return articles;
}


export async function GET(request) {

    //récupération de tous les articles de jsonplaceholder
    const articles = await fetchArticles();

    // récupération des paramètres de recherche de l'URL
    // const searchParams = request.nextUrl.searchParams; //méthode 1
    const {searchParams } = new URL(request.url) //méthode 2
    console.log(searchParams);
    const query = searchParams.get('query'); //api/search?query=hello

    //filtrage des articles en fonction de la requête de recherche
    const filteredArticles =articles.filter((article) => {
        return (
            article.body.toLowerCase().includes(query.toLowerCase()) ||
            article.title.toLowerCase().includes(query.toLowerCase())
        );
    });

    // renvoyer les articles filtrés en tant que réponse JSON
    return NextResponse.json(filteredArticles);


}