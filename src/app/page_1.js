
"use client"; // Déclare un composant client! Par défaut server

import styles from '@/app/ui/home.module.css';
import { useState } from 'react';
import clsx from 'clsx'; // npm i clsx

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    //clsx permet de faire du CSS conditionnel. Ici, si isHovered est true, j'applique la class 'button-hovered' (npm i clsx)
    // La class 'button' est toujours appliquée, peu importe la valeur de isHovered
    // Si isHovered est true, j'applique la class 'button-hovered'
    const buttonClasses = clsx('button', { 'button-hovered': isHovered });

  return (
    <>
        <h1>Hello World</h1>
        <table>

        <thead>
            <tr>    
                <th>Entête 1</th>
                <th>Entête 2</th>
                <th>Entête 3</th>
            </tr>  
        </thead>
        <tbody>
            <tr>
            <td>Bonnée 1</td>
            <td>Bonnée 2</td>
            <td>Bonnée 3</td>
            </tr>
        </tbody>
        </table>

        <h2 className="text-blue-500">TailWindCSS style</h2>

        {/* tailwind exemples */}
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />

        {/* <p className='italic hover:not-italic'>Bienvenue sur mon application</p> */}
        {/* En fonction de la résolution de l'écran, le texte ci-dessous sera en italique ou non. */}
        <p className='italic md:not-italic'>Bienvenue sur mon application</p> 

        {/* CSS Modules exemples */}
        <div className={styles.shape} />

        {/* CLSX exemple */}
        <button
            className={buttonClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >Hover dessus</button>

    </>
  )
}