import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/download.jpg'

class Home extends React.Component { 
    componentDidMount(){
        // setTimeout(() =>
        // {
        //     this.props.history.push('./todo')
        // },3000)
    }
    render() {
        return(
            <>
                <div>Hello Home Page</div>
                <div>
                <img src={logo} />
                </div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);