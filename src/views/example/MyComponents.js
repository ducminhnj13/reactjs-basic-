import React from 'react';
class MyComponent extends React.Component{
    /*
    JSX chi return ve 1 block muon tao nhieu div, thì bọc tất cả các div bên trong 1 div khác
    */

    state = {
        name:'minh1',
        address:'ha noi'
    }

    
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnClickButton = () => {
        alert('click me')
    }

    render() {
        // xem sự thay đổi của state mỗi khi thay đổi giá trị trong ô input
        // console.log('check render state:',this.state)
        return (
            <>
                <div className='first'>
                <input value={this.state.name} type="text"
                    onChange={(event)=> this.handleOnChangeName(event)}
                >
                </input>
                xin chao anh em 
                day la JSX, ten toi la {this.state.name}
                </div>
                <div className='second'>
                my address: {this.state.address}
                </div>
                {/* DOM event */}
                <div className='thirst'>
                    <button onClick={()=>this.handleOnClickButton()} >Click me!</button>
                </div>
            </>
            )
    }
}
export default MyComponent;