import React from 'react';
import ChildComponents from './ChildComponents';
class MyComponents extends React.Component {
state = {
    firstName: '',
    lastName: ''
}
handleChangeFirstName = (event) =>{
    this.setState({
        firstName: event.target.value
    })
}
handleChangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
}
handleSubmit = () =>{
    alert('Click')
}
    render(){ // Không cần dùng từ khóa function
        console.log('call render', this.state)
        return (
            <>
            <form>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text"  value={this.state.firstName}
            onChange={(event)=>this.handleChangeFirstName(event)}
            /><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text"  value={this.state.lastName}
            onChange={(event)=>this.handleChangeLastName(event)}
            /><br/><br/>
            <input type="buttons" value="Submit"
            onClick={()=>this.handleSubmit()}/>
          </form> 
          <ChildComponents name = {'child one'}/>
          <ChildComponents name = {'child two'}/>
          <ChildComponents name = {'child three'}/>
          </>
        )
    }
}
export default MyComponents
