export default async function Comment({ params }) {
    const myparams = await params; //Depuis NextJS15 les params sont des promesses, il faut donc les await pour les récupérer
    console.log(myparams);

    return (
        <div className="container">
            <h1>Article: { myparams.id} </h1>
            <h2>Commentaire: { myparams.commentId} </h2>
        </div>
    )

}