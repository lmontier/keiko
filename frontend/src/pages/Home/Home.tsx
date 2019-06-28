import * as React from 'react';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';
    const pokemon_number = 7;

    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
          pokemons !
        </div>
        <div>Voici mon premier pokemon. C'est {pokemon}, de son numéro {pokemon_number} </div>
        <div>  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"/>  </div>
      </Style.Intro>
    );
  }
}

export default Home;
