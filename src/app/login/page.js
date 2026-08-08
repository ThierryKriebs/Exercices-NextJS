import Link from "next/link";

export default function Login() {
  return (
     <div className="container">    
        <h1>Page de connexion</h1>
        <Link href="/forget-password">Mot de passe oublié?</Link>
     </div>
   
  )
}