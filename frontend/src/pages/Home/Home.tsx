import Pokemon from 'components/Pokemon';
import * as React from 'react';

import {makeGetRequest} from "services/networking/request";
import Style from './Home.style';
import loader from './loader.svg'

// tslint:disable-next-line:no-empty-interface
interface Props {}
interface State {
  pokemons: Array<{
    id: number;
    name: string;
  }>;
  problem: any;
}

class Home extends React.Component<Props, State> {
  async componentDidMount() {

    try {
      const data = await makeGetRequest("/pokemon");
      this.setState({pokemons: data.body})
    } catch (e)
    {
      this.setState({problem: "erreur: " + e})
    }
  }

  render(): React.ReactNode {
      if (this.state != null) {
        if (this.state.problem == null) {
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
            <div> Les problemes {this.state.problem} </div>
          )
        }
      }
      else {
        return(
        <Style.Intro>
          <div>Bienvenue sur mon pokédex !</div>
          <img src={loader} alt={"lol"} />
          <div> Loading </div>
        </Style.Intro>
        );
      }
  }
}

export default Home;
