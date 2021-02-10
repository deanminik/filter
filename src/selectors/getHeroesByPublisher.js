const { heroes } = require("../data/heroes");


export const getHeroesByPublisher = (publisher) => {
    //    si la persona me escribe un tipo de publisher que no es acceptado a la hora de buscar enviaremos un error 

    const validPublisher = ['DC Comics', 'Marvel Comics']; // cualquier cosa que no esté adentro deberia de lanzar un error 
    //  ejecute esta condicion si no lo encuentra publisher va ahcer l oque sea que envió como argumento  
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto `);
    }

    // caso contrario retorno el arreglo 
      //retorname el hero siempre y cuando sea igual al areglo 
    return heroes.filter(hero => hero.publisher === publisher);

}
