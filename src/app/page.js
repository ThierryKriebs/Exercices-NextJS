export const dynamic = 'force-dynamic'; // force le rendu en dynamique méthode 1
export const revalidate = 0 // force le rendu en dynamique méthode 4!
import Link from 'next/link'

export default function Home() {

async function getDataTime() {
  const response = await fetch('http://localhost:3000/api/data', {
    cache: "no-store", // Précise qu'on ne veut pas mettre en cache le résultat de la requête => méthode 2
    next: {revalidate: 0} // Idem précise qu'on ne veut pas mettre en cache le résultat de la requête => méthode 3
                          // revalidate permet de préciser un interval de création de cache (en mettant autre chose que 0)
  });
  const json = await response.json();
}

  return (
    <article>
      <h2>Bienvenue sur notre site { new Date().toLocaleString() }</h2>
      {/* Ici la page ne va pas se recharger entièrement, car le lien est un lien Next.js. */}
      <Link href='/blog'>Blog</Link>
      <br />

      {/* Ici la page va se recharger entièrement, car le lien est un lien html classique. */}
      <a href='/blog'>Via lien html classique Blog</a>
    </article>
   
  )
}