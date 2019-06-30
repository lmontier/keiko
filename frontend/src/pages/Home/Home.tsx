import Pokemon from 'components/Pokemon';
import * as React from 'react';

import {makeGetRequest} from "services/networking/request";
import Style from './Home.style';
import {string} from "prop-types";

// tslint:disable-next-line:no-empty-interface
interface Props {}
interface State {
  pokemons: Array<{
    id: number;
    name: string;
  }>;
}

class Home extends React.Component<Props, State> {
  componentDidMount() {

    makeGetRequest("/pokemon")
      .then(response => response.body)
      .then(pokemons => this.setState(
        {pokemons}
        ))
  }

  render(): React.ReactNode {
      if (this.state != null) {
        return (
          <Style.Intro>
            <div>Bienvenue sur mon pokédex !</div>
            {
              this.state.pokemons.map((pkmArray) =>
                <Pokemon key={pkmArray.id} name={pkmArray.name} id={pkmArray.id}/>
              )
            }
          </Style.Intro>
        );
      }
      else {
        return(
        <Style.Intro>
          <div>Bienvenue sur mon pokédex !</div>
          <div> Loading </div>
        </Style.Intro>
        );
      }
  }
}

export default Home;
