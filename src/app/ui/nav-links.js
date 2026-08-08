'use client'
import { usePathname } from 'next/navigation';

// Import des icônes de heroicons dont on a besoin pour les liens de navigation
import{
    PencilSquareIcon,
    ArrowLeftEndOnRectangleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link';

const links = [
    {
        name: 'Inscription',
        href: '/signup',
        icon: PencilSquareIcon
    },
    {
        name: 'Connexion',
        href: '/login',
        icon: ArrowLeftEndOnRectangleIcon
    },
];

export default function NavLinks() {

    const pathname = usePathname(); //retourne une chaine qui contient le chemin où se trouve l'utilisateur

    return (
        <>
            {
                links.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    const LinkIcon = link.icon;


                    return (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            // className={ pathname === link.href ? "nav-link active" : "nav-link"}
                            className={ isActive ? "nav-link active" : "nav-link"}
                        > 
                            <LinkIcon style={{width: '20px'}} />
                            {link.name}
                        </Link>

                    )
                })
                    
            }

        </>
    )

}