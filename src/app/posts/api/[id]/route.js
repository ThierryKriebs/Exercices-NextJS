export async function GET(request, props) {
    const params = await props.params;
    const id = params.id;
    console.log("id reçu dans route.js: ", id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
}