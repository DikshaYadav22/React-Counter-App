import React, {useState} from 'react';
import { Card, CardTitle } from 'reactstrap';

const ContactForm = () => {
    const [data, setData] = useState("");

    const inputHandler = (e) => {
        setData(e.target.value);
    }

    return (
        <div className="text-center">
            <h2>Contact Form</h2>
                <label htmlFor='name'>Name: </label>
                <input type="text" onChange={inputHandler} />
                <Card>
                    <CardTitle>{data}</CardTitle>
                </Card>
        </div>
    )
}

export default ContactForm;