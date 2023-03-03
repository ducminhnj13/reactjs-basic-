import React from "react";

// class component
// class Component1 extends React.Component {
//   render() {
//     console.log("checks props", this.props);

//     // cach 1
//     // let name = this.props.name;
//     // let age = this.props.age;

//     // cach 2
//     let { name, age, address, arrJobs } = this.props;
//     return (
//       <>
//         <div className="job-lists">
//           {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.price}
//               </div>
//             )
//           })}
//         </div>
//       </>
//     )
//   }
// }


// -************************-
// function component
const Component1 = (props) => {


    let { arrJobs } = props;
    return (
      <>
        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.price}
              </div>
            )
          })
          }
        </div>
      </>
    )
}

export default Component1;
