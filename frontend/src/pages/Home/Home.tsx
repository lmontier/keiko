import Pokemon from 'components/Pokemon';
import * as React from 'react';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <Style.Intro>
        <Pokemon name={"Carapuce"} id={4} />
        <Pokemon name={"Carabaffe"} id={34} />
        <Pokemon name={"Torktank"} id={45} />
      </Style.Intro>
    );
  }
}

export default Home;
