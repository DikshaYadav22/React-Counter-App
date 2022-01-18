import {Component} from 'react';
import {Button} from 'reactstrap';

class User extends Component {
    constructor(){
        super();
        this.state = {
            name : "Diksha",
            age : 29
        }
        console.log("constructor called");
      
   
    }
    updateName = () => {
        this.setState({
            name:"Testing123"
              
        });
}

    componentDidMount = () => {
        console.log("componentDidMount called");
    }

    render(){
        console.log("render called");
        return(
            <div>
                <h1>Learn Render Method: </h1>
                <h4>{this.state.name}</h4>
                <h5>{this.state.age}</h5>
                <Button color="info" 
                onClick={this.updateName}>Update Name</Button>
            </div>
        )
    }
}

export default User;