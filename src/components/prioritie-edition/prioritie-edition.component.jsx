import React from "react";
import PrioriteForm from "../prioritie-form/priorite-form.component";
import PrioritieItem from "../prioritie-item/priorite-item.component";

class PrioritieEdition extends React.Component {
  state = {
    editFormOpen: false,
  };
  handleEditClick = () => {
      this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (priorite) => {
    this.props.onFormSubmit(priorite);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <PrioriteForm
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          priorite={this.props.priorite}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    }else{
      return (
        <PrioritieItem
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          priorite={this.props.priorite}
          onEditClick={this.handleEditClick}
        />
      );
    }
  }
}
export default PrioritieEdition;
