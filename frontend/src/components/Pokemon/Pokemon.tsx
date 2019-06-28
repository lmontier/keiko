import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
          pokemons !
        </div>
        <div>Voici ce pokemon. C'est {this.props.name}, de son numéro {this.props.id} </div>
        <div>  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"/>  </div>
      </Style.Intro>
    );
  }
}

export default Pokemon;
