"use client"
import {useState} from 'react';


export default function Search({getSearchResults, handleRefresh }) {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // récupération des articles répondant au critère de recherche
        const response = await fetch(`http://localhost:3000/posts/api/search?query=${query}`);
        const articles = await response.json();
        getSearchResults(articles);// mise à jour du state des articles dans le composant parent
    }


  return (
    <div className="div-container">
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Chercher ici"
                value = {query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type='submit'>Rechercher</button>
        </form>
        <button className='refresh-button' onClick={handleRefresh}>
            Actualiser
        </button>
    </div>
  )
}
