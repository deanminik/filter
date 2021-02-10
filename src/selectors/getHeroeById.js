const { heroes } = require("../data/heroes");


export const getHeroesById = (id) => {
   
// find = apenas encuentre 1 eso sería todo  
    return heroes.find(hero => hero.id === id);

}
