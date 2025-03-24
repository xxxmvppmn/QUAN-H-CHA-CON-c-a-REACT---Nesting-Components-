import React from 'react';
class ChildComponents extends React.Component {
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
handelSubmit = () =>{
    alert('Click')
}
    render(){ // Không cần dùng từ khóa function
        console.log('call render', this.state)
        return (
            <div>
                Child Components: {this.props.name}
            </div>
  
        )
    }
}
export default ChildComponents
