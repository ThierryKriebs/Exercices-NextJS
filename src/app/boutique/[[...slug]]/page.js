export default async function Shop({ params }) {
    
    // slug: => ['femme', 'vetements', 'veste', 'adidas', 'rouge', 'm']
    //[...slug] permet de récupérer tous les segments de l'URL après /shop/ minimum un segment
    //[[...slug]] permet de de rendre le slug optionnel
    
    // 1) Avec un [...slug]
    //const { slug } = await params;
    // console.log(slug);
    // const concatenated = slug.join(' / '); // pour un [...slug] => femme / vetements / veste / adidas / rouge / m
    
    // 2) Avec un [[...slug]]
    const myParams = await params;
    const concatenated = myParams.slug ? myParams.slug.join('/') : null;

    return (
        <div className="container">
            { params.slug && <span className="breakcrumb"> {concatenated} </span> }

            <h1>Notre Boutique</h1>
        </div>
    )
}