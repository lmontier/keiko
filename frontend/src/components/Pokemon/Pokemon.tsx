import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.id + ".png";
    return (
      <Style.Intro>
        <div>Voici {this.props.name || "lol"}, le pokémon n°{this.props.id || 666} </div>
        <div>  <img src={url} alt={'lool'}/>  </div>
      </Style.Intro>
    );
  }
}

export default Pokemon;
