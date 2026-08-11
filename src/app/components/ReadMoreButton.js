'use client' // On utilise un hook de navigation, donc on doit préciser que c'est un composant client
import Link from "next/link"; // import du composant Link de NextJS pour la navigation

export default function ReadMoreButton( { id}) {
   
    return (
        <Link href={`/posts/${id}`}>Lire plus...</Link>
    )
}





// 'use client' // On utilise un hook de navigation, donc on doit préciser que c'est un composant client
// import {useRouter} from "next/navigation"; // import du hook useRouter de NextJS pour la navigation
//                                            // Next JS fournit un composant Link pour la navigation, mais on peut aussi utiliser le hook useRouter pour naviguer de manière programmatique. 
//                                            // Next JS recommande d'utiliser le composant Link pour la navigation, il ne faut utiliser useRouter QUE si on a des contraintes

// export default function ReadMoreButton( { id}) {

//     const router = useRouter();

//     function handleClick() {
//         // la redirection
//         router.push(`/posts/${id}`); // redirection vers la page du post dont l'id est passé en props
//     }
//     return (
//         <button onClick= {handleClick}>
//             Lire la suite
//         </button>
//     )
// }