import React from "react";
class Component1 extends React.Component {
  render() {
    console.log("checks props", this.props);

    // cach 1
    // let name = this.props.name;
    // let age = this.props.age;

    // cach 2
    let { name, age } = this.props;
    return (
      <>
        <div>
          component1: {name} - {age}
        </div>
      </>
    );
  }
}
export default Component1;
