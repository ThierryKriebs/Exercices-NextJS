import Post from '@/app/components/Post';
// 8min32
async function getPost(id) {
    const res = await fetch(`http://localhost:3000/posts/api/${id}`);
    const articleData = await res.json();
    return articleData;
}

export default async function PostPage({ params }) {
    const resolvedParams = await params;

    const post = await getPost(resolvedParams?.id);
    const { id, title, body } = post;
    
    return (
        <div className="container">
            <h1>Détail de l'article {resolvedParams?.id ?? "(id manquant)"}</h1>
            <Post id={id} title={title} body={body} />
            {/* <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(resolvedParams, null, 2)}</pre> */}
        </div>
    )
}
