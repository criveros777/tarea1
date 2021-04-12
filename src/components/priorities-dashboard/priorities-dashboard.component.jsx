import React from 'react';
import PrioritiesEditionList from '../priorities-edition-list/priorities-edition-list.component';
import PRIORITIES_DATA from './Data.js'

class PrioritiesDashBoard extends React.Component{
  constructor() {
    super();
    this.state = {
      priorities: PRIORITIES_DATA
    };
  }

  componentDidMount() {
    //  this.setState({ priorities: Data.priorities });
  }

  handleEditFormSubmit = (attrs) => {
    this.updatePrioritie(attrs);

  };

  updatePrioritie = (attrs)=>{
      this.setState({
        priorities: this.state.priorities.map((prioritie) => {
            if (prioritie.id === attrs.id){
              return Object.assign({},prioritie,{
                title:attrs.title,
                description: attrs.description,
                priorite: attrs.priorite,
              });
            }else{
                return prioritie;
            }
        }),
      });
  };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <PrioritiesEditionList
            priorities={this.state.priorities}
            onFormSubmit={this.handleEditFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default PrioritiesDashBoard;
