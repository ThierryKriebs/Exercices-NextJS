
"use client"
import ReadMoreButton from "@/app/components/ReadMoreButton"
import {usePathname} from "next/navigation";  // import du hook usePathname de NextJS pour récupérer le pathname de la page courante

export default function Post({ title, body, id }) {
    const pathname = usePathname(); // récupération du pathname de la page courante

    const isTrue = pathname.startsWith(`/posts/${id}`); // vérifie si le pathname commence par /posts/id, ce qui signifie que l'on est sur la page du post en question

    return (
        <div className="card">
            <article>
                <h2>{id} | {title}</h2>
                
                <p>{isTrue ? body : body.substring(0, 50)}</p>
                
                
                {/* Alternative non recommandée à Link de NextJS! */}
                {/* redirection via useRouter */}
                { !isTrue &&<ReadMoreButton id={id} /> }
            </article>
        </div>
    )
}