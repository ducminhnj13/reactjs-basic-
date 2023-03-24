import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/download.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() =>
    // {
    //     this.props.history.push('./todo')
    // },3000)
  }
  render() {
    console.log('check prop',this.props)
    return (
      <>
        <div>Hello Home Page</div>
        <div>
          <img src={logo} />
        </div>
      </>
    );
  }
}

// export default withRouter(Home);
const mapStateToProps = (state) => {
  return { dataRedux: state.user };
};

export default connect(mapStateToProps)(Color(Home));
