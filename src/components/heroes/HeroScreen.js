import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById';


// si usamos el history nos v aayudar para recordar las rutas
export const HeroScreen = ({history}) => {

    // si quiero extraer el heroe id hay un hook que se llama useParams

    // extraer los parametros que viajan por el url 

    // const params = useParams();
    // console.log(params);
    //_______________________________________________________________
    // o tambien lo podemos desestructurar


    const { heroeId } = useParams();

    const hero  = useMemo(() => getHeroesById(heroeId), [heroeId]); 

    // console.log(heroeId);
    // const hero = getHeroesById(heroeId)
    // si el hero no existe 
    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn = () =>{
        // agregamos una condicional ya que si salimos de la ventana pierde la funcion 
        if(history.length <= 2){
            // entonces quiero regresar a la pagina princiapl de la aplicacion video 117 final 
            history.push('/');
        }else{
            history.goBack();
        }
        
    }

    const {

        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info"
                        onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}
