import React from "react";
import PrioritieEdition from '../prioritie-edition/prioritie-edition.component';

class PrioritiesEditionList extends React.Component{
  render() {
    const priorities = this.props.priorities.map((prioritie) => (
      <PrioritieEdition
       key={prioritie.id}
       id={prioritie.id}
       title={prioritie.title}
       description={prioritie.description}
       priorite={prioritie.priorite}
       onFormSubmit={this.props.onFormSubmit}
      />
    ));
    return (
      <div id='priorities'>
        {priorities}
      </div>
    );
  }
}

export default PrioritiesEditionList;
