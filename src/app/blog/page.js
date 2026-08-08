import Link from 'next/link';

export default async function Blog() {

    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json();
    
    const articles = data.map(item => {
        return (
            <div key={item.id}className="card"> 
                <article>
                    <h2>{item.id} | {item.title} </h2>
                    <p>{item.body.substring(0,50)}</p>
                    <Link href={`/blog/${item.id}`}>Lire plus</Link>
                </article>
            </div>
        )
    })
    
    console.log(data);

    return (
        <div className="container">
            <Link href='/'>Vers accueil</Link>
            <h1>Notre Blog</h1>
            { articles }
            {/* <div className="card">
                <article>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
            </div> */}

          
           <p><br /><br /></p>
        
       
       </div>  

    )
}