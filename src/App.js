import React, {useState} from 'react'
import Menu from './component/Menu';
import Counter from './component/Counter';
import Practise from './component/Practise';

const App = () => {
  const [data, setData] = useState(0);

  const incrementCounter = () => {
   setData(data+1);
 
  }
  const decrementCounter = () => {
    if(data > 0){
      setData(data - 1);
    }
  }

  return(
    <div>
    {/* <Practise /> */}

      <Menu cartItem={data} />
      <Counter dataItem={data} 
              increment = {incrementCounter} 
              decrement={decrementCounter} 
      />
      <Counter dataItem={data} />

    </div>
  )
}

export default App;
