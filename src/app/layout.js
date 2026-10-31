
import {inter} from '@/app/ui/fonts';
import './globals.css';
import NavLinks from '@/app/ui/nav-links';

export const metadata = {
    title: {
      template: "%s | DonkeyGeek",
      default: "DonkeyGeek"
    },
    description: 'Bienvenue sur DonkeyGeek.com'
}

export default function RootLayout({ children}) {
  return (
    <html lang="fr">
      <body className={inter.className}> 
        <header>
          <h1>Mon Site</h1>
          <div className='nav-links'>
            <NavLinks />
          </div>
        </header>
         {children}   

        <footer>
          <p>&copy; monsite.com</p>
        </footer> 
      </body>
    </html>
  )
}