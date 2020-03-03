import * as React from 'react';
import * as ReactPaginate from 'react-paginate'


import Card from 'components/molecules/Card';

import { getCharacters } from 'resources/characters';

import './style.scss'


interface CharacterModel {
  id: number;
  name: string;
  image: string;
}

interface IPageCount {
  selected: number;
}

class App extends React.Component<any, {}> {

  state = {
    characters: [],
    limit: 10,
    offset: 0,
    loading: true,
    currentPage: 0,
    total: 0,
    pageCount: 0
  };

  componentDidMount() {

    this.fetchData()

  }

  async fetchData () {
    try {
      const offset = this.state.limit * this.state.currentPage;
      const res = await getCharacters(offset, this.state.limit)

      this.setState({
        characters: res.data.characters,
        total: res.data.total,
        offset: res.data.offset,
        limit: res.data.limit,
        pageCount: Math.ceil(res.data.total / res.data.limit),
        loading: false
      })

    } catch (e) {
      console.error(e);
      alert('Unable to fetch characters :(')
    }
  }

  handlePageChange = (page:number,e: React.SyntheticEvent) => {
    this.setState({currentPage: page})
  }

  handlePageClick = (pageCount: IPageCount) => {
    
    this.setState({
      loading: true,
      currentPage: pageCount.selected
    }, () => {
      this.fetchData()
    })
  }

  render() {
    const { loading, characters } = this.state;

    if(loading) return (<div> Loading ... </div>)
    else 
      return (
        <div className="App col-12 row d-flex justify-content-center">
          {characters.map( (element: CharacterModel) => {
            return (<Card className="col-md-2 col-4 col-sm-4 col-xl-2 col-lg-2 col-xs-4" image={element.image} title={element.name} key={`charac-${element.id}`} />)
          }
          )}

          { this.state.pageCount > 1 && 
            <ReactPaginate.default
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              breakLabel={<span className="gap">...</span>}
              pageCount={this.state.pageCount}
              onPageChange={this.handlePageClick}
              forcePage={this.state.currentPage}
              containerClassName={"pagination"}
              previousLinkClassName={"previous_page"}
              nextLinkClassName={"next_page"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
            />
  }

          
          
        </div>
      )

  }
}


export default App;
