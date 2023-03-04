import React from "react";
import Component1 from "./Component1";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job1", title: "one1", price: "1000" },
      { id: "job2", title: "one2", price: "500" },
      { id: "job3", title: "one3", price: "1500" },
    ],
  };

  render() {
    console.log('call render',this.state)
    return (
      <>
        <AddComponent />

        <Component1 arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default MyComponent;
