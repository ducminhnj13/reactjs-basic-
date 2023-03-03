import React from "react";

// class component
class Component1 extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = (status) => {
    this.setState({ showJobs: !this.state.showJobs });
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log("conditional check:", check);
    return (
      <>
        {showJobs === false ?
          <div>
            <button onClick={() => {this.handleShowHide();}}>Show</button>
          </div>
        
        :
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.price}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => {this.handleShowHide();}}>Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}

// -************************-
// function component
// const Component1 = (props) => {

//     let { arrJobs } = props;
//     return (
//       <>
//         <div className="job-lists">
//           {arrJobs.map((item, index) => {
//             if(item.price >=1000){
//               return (
//               <div key={item.id}>
//                 {item.title} - {item.price}
//               </div>
//             )
//           }
//           })
//           }
//         </div>
//       </>
//     )
// }

export default Component1;
