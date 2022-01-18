import React, {useState} from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

const ContactForm = () => {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    const inputHandler = (e) => {
        setData(e.target.value);
        setPrint(false);
    }

    return (
      <div className="text-center">
            {
                print?
                <h2>{data}</h2>
                : null
            }
            <h2>Contact Form</h2>
            <form>     
                <label htmlFor='name'>Name: </label>
                <input type="text" onChange={inputHandler} />&nbsp;
                <Button color="primary" onClick={()=>setPrint(true)} >Add</Button>
            </form>   
                <div>
                <Card>
                    <CardTitle><h1>Form Data</h1></CardTitle>
                   
                </Card>
                </div>
        </div>
    )
}

export default ContactForm;