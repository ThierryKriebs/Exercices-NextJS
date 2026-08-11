import ReadMoreButton from "@/app/components/ReadMoreButton"

export default function Post({ title, body, id }) {
    return (
        <div className="card">
            <article>
                <h2>{id} | {title}</h2>
                <p>{body.substring(0, 50)}</p>
                
                {/* Alternative non recommandée à Link de NetxtJS! */}
                {/* redirection via useRouter */}
                <ReadMoreButton id={id} />
            </article>
        </div>
    )
}