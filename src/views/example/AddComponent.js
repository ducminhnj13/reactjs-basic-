import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    lastName: "",
  };
  handleChangeTitleJob = (event) => {
    this.setState({ titleJob: event.target.value });
  };

  handleChangePrice = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(event);
    alert("click me now");
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Job title:</label>
        <br />
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => {
            this.handleChangeTitleJob(event);
          }}
        />
        <br />
        <label htmlFor="lname">Price:</label>
        <br />
        <input
          type="text"
          value={this.state.lastName}
          onChange={(event) => {
            this.handleChangePrice(event);
          }}
        />
        <br />
        <br />
        <input
          type="submit"
          onClick={(event) => {
            this.handleSubmit(event);
          }}
        />
      </form>
    );
  }
}

export default AddComponent;
