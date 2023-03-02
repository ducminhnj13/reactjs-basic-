import React from "react";
class Component1 extends React.Component {
  render() {
    console.log("checks props", this.props);

    // cach 1
    // let name = this.props.name;
    // let age = this.props.age;

    // cach 2
    let { name, age, address, arrJobs } = this.props;
    let a = "";
    return (
      <>
        <div className="job-lists">
          {
            (a = arrJobs.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.price}
                </div>
              );
            }))
          }
          {console.log('check map arr',a)}
        </div>
      </>
    );
  }
}
export default Component1;
