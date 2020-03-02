import * as React from 'react';

import Card from 'components/molecules/Card';

import { getCharacters } from 'resources/characters';


interface CharacterModel {
  id: number;
  name: string;
  image: string;
}

class App extends React.Component<any, {}> {

  state = {
    characters: [],
    loading: true
  };

  async componentDidMount() {
    console.log('mounted')

    try {
      const res = await getCharacters(0)

      this.setState({characters : res.data.characters, loading: false})

      console.log(res);
    } catch (e) {
      console.error(e);
    }

  }

  render() {
    const { loading, characters } = this.state;

    if(loading) return (<div> Loading ... </div>)
    else 
      return (
        <div>
          {characters.map( (element: CharacterModel) => {
            return (<Card image={element.image} title={element.name} key={`charac-${element.id}`} />)
          }
            
          )}
        </div>
      )

  }
}


export default App;
