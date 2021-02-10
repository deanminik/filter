// import React, { useMemo } from 'react';
// import queryString from 'query-string';

// import { useLocation } from 'react-router-dom';
// import { heroes } from '../../data/heroes';
// import { useForm } from '../../hooks/useForm';
// import { HeroCard } from '../heroes/HeroCard';
// import { getHeroesByName } from '../../selectors/getHeroesByName';
// //ocupamos el history para hacer el push 

// export const SearchScreen = ({ history }) => {

//     const location = useLocation();
//     // console.log(location.search);
//     // al ser un string tenemos que parsearlo para manejar variops querys 
//     console.log(queryString.parse(location.search));

//     // ahora podemos desestructura para seleccionar el query que necesitamos 

//     const { q = '' } = queryString.parse(location.search);// lo ponemos así q = '' por aquello que no haya data en el query de busqueda


//     const [formValues, handleInputChange] = useForm({
//         searchText: ''
//     });
//     //extraemos el form values o sea desestructuracion 
//     const { searchText } = formValues;

//     const heroesFiltered = useMemo(() => getHeroesByName(q), [q])// no entendi video 182 4:06

//     // const heroesFiltered = getHeroesByName(searchText);
//     const handleSearch = (e) => {
//         e.preventDefault();
//         // console.log(searchText);
//         history.push(`?q=${searchText}`);
//     }
//     return (
//         <div>
//             <h1>Search Screen</h1>
//             <hr />

//             <div className="row">
//                 <div className="col-4">
//                     <h4>Search form </h4>
//                     <hr />

//                     <form onSubmit={handleSearch}>
//                         <input
//                             type="text"
//                             placeholder="Find your text"
//                             className="form-control"
//                             name="searchText"
//                             autoComplete="off"
//                             value={searchText}
//                             onChange={handleInputChange}

//                         />
//                         {/* video 180 */}
//                         <button
//                             type="submit"
//                             className="btn m-1 btn-block btn-outline-primary"
//                         >
//                             Search
//                         </button>
//                     </form>
//                 </div>


//                 <div className="col-7">

//                     <h4>Results</h4>
//                     <hr />
//                     {
//                         (q === '') &&
//                         <div className="alert alert-info">
//                             Search a hero

//                         </div>
//                     }

// {
//                         (q !==='' && heroesFiltered.length === 0) &&
//                         <div className="alert alert-info">
//                             Search a hero

//                         </div>
//                     }
//                     {
//                         // recorremos el objeto de la carpeta data 
//                         heroesFiltered.map(hero => (
//                             <HeroCard
//                                 key={hero.id}
//                                 {...hero}

//                             />

//                         ))
//                     }


//                 </div>

//             </div>
//         </div>
//     )
// }


//__________________________________________________________________________________________________________-

// ESte es de fernando 

import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
