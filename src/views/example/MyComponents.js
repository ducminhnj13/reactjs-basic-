import React from "react";
import Component1 from "./Component1";
import AddComponent from "./AddComponent";

class MyComponents extends React.Component {
  //key:value
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project managers", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs,
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  //re-render

  componentDidUpdate(prevProps, prevState) {
    console.log("run componentDidUpdate",'prev state:', prevState,'currnet state', this.state);
  }

  componentDidMount() {
    console.log("run componentDidMount");
  }

  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <Component1 arrJobs={this.state.arrJobs} deleteJob={this.deleteAJob} />
      </>
    );
  }
}
export default MyComponents;
