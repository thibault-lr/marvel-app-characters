import * as React from 'react';

import Card from 'components/molecules/Card';

import { getCharacters } from 'resources/characters';

import './style.scss'


interface CharacterModel {
  id: number;
  name: string;
  image: string;
}

class App extends React.Component<any, {}> {

  state = {
    characters: [],
    limit: 10,
    offset: 0,
    loading: true
  };

  async componentDidMount() {

    try {
      const res = await getCharacters(this.state.offset, this.state.limit)

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
        <div className="App col-12 row d-flex justify-content-center">
          {characters.map( (element: CharacterModel) => {
            return (<Card className="col-2" image={element.image} title={element.name} key={`charac-${element.id}`} />)
          }
            
          )}
        </div>
      )

  }
}


export default App;
