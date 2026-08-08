
import Image from 'next/image'
import whiteCar from '../../public/voiture-blanche.jpg'

const cars = [
    {
        id: 1,
        name: 'voiture-blanche'
    },
    {
        id: 2,
        name: 'voiture-bleue'
    },
    {
        id: 3,
        name: 'voiture-jaune'
    },
    {
        id: 4,
        name: 'voiture-noire'
    },
    {
        id: 5,
        name: 'voiture-rouge'
    },
    {
        id: 6,
        name: 'voiture-verte'
    },
]
export default function Home() {
    
  return (

    // Avec une balise img classique
    // cars.map( img => {
    //     return (
    //         <div key={img.id} className="w-[700px]">
    //             <img src={`/${img.name}.jpg`} alt={img.name} width='100%' height='100%' />
    //         </div>
    //     )
    // })

    // Avec le composant image de next js
    // elles sont automatiquement mis en cache et converties en webp!
    cars.map( img => {
        return (
            // <div key={img.id} className="w-[700px]">
            //     <Image src={`/${img.name}.jpg`} alt={img.name} width={1920} height={1440} />
            // </div>

             <div  className="w-[700px]">
                {/* Le placeholder permet d'afficher un flou le temps que l'image soit chargée (évite les décallages lors des rendus!) */}
                <Image src={whiteCar} alt="voiture blanche" placeholder='blur' />
            </div>
        )
    })
  )
}