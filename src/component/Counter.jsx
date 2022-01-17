import React from 'react';
import {Button} from 'reactstrap';

const Counter = ({dataItem, increment, decrement}) => {
    return(
        <div className='p-3 m-3'>
            {dataItem}&nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={increment}>+</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={decrement}>-</Button>
      </div>
    )


}


export default Counter;