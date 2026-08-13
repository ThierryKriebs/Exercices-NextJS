"use client"
export default function PostButton() {

    function handleClick() {
        fetch('http://localhost:3000/posts/api', {method: 'POST'})
        .then((response) => response.json())
        .then((json) => console.log(json));
        
        // Nouvelle syntaxe avec async/await
        // const response = await fetch('http://localhost:3000/posts/api', {
        //     method: 'POST',
        // });
        // const json = await response.json();

    }
    return (
        <button onClick={handleClick}>Poster un article</button>
    )
}