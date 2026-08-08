import Link from 'next/link'

export default function Home() {
  return (
    <article>
      <h2>Bienvenue sur notre site</h2>
      {/* Ici la page ne va pas se recharger entièrement, car le lien est un lien Next.js. */}
      <Link href='/blog'>Blog</Link>
      <br />

      {/* Ici la page va se recharger entièrement, car le lien est un lien html classique. */}
      <a href='/blog'>Via lien html classique Blog</a>
    </article>
   
  )
}