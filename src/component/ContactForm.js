import React, {useState} from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

const ContactForm = () => {
    const [data, setData] = useState("");
    const[ print, setPrint ] = useState(false);

    const inputHandler = (e) => {
        setData(e.target.value);
        setPrint(false);
    }



    return (
        <div>
            {
                print?
                <h2>{data}</h2>
                : null
            }
           
            <form>
                <input type="text" onChange={(e)=>inputHandler(e)} />
                <Button color="primary" onClick={()=>setPrint(true)}> Add </Button>
            </form>
        
        </div>
       
    )
}

export default ContactForm;