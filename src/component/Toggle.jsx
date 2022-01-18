import React , { useState } from 'react';
import {Button} from 'reactstrap';

const Toggle = () => {
    const[data , setData] = useState(false);

    const hideData = () => {
        setData(false);
    }

    const showData = () => {
        setData(true);
    }

    const toggleData = () => {
        setData(!data);
    }

    return (
        <>
        <div>
            {
                data?
                <h1>Testing rocks, you're doing good, keep it up!</h1>
                :null

            }
            <Button color="primary" onClick={hideData} >Hide</Button>
            <Button color="secondary" onClick={showData} >Show</Button>
            <Button color="info" onClick={toggleData}>Toggle</Button>
        </div>
        </>
    )
}

export default Toggle;