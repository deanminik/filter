import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher(publisher)   para no recargar mucho el app es mejor usar use memo 

const heroes = useMemo(() => getHeroesByPublisher(publisher) , [publisher]); //el publisher será mi dependecia o sea si algo cambia en el 

    return (
        <div className="card-columns animate__animated animate__zoomIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />

                ))
            }
        </div >

    )
}
{/* extrae cada una de las propiedades del heroe usando spread  {...hero linea 13}*/ }