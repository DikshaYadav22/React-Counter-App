import { Component } from 'react';
import { Button } from 'reactstrap';

class Practise extends Component {
    constructor(){
        super();
        this.state = {
            data: "Diksha",
            age: 29
        }

    }

     updateData= ()=>{
        this.setState({
            data:"Testing123"
        })
    }
     
    render(){
         
        return(
            <>
                <h2>
                    {this.state.data}
                </h2>
                <Button color="primary"
                    onClick={this.updateData}
                >Update</Button>

            </>
        )
    }

}


export default Practise;
