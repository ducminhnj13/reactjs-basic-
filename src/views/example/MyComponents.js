import React from "react";
import Component1 from "./Component1";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs :[
        {id:'job1', title:'one1',price:'1000'},
        {id:'job2', title:'one2',price:'500'},
        {id:'job3', title:'one3',price:'1500'}
    ]
  };

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(event);
    alert("click me now");
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => {
              this.handleChangeFirstName(event);
            }}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => {
              this.handleChangeLastName(event);
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

        <Component1 name={this.state.firstName} age={"22"} address={'ha noi'} arrJobs={this.state.arrJobs}/>
      </>
    );
  }
}
export default MyComponent;
