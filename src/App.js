import React, {useState} from 'react'
import Tempapp from './component/Tempapp';
// import Menu from './component/Menu';
// import Counter from './component/Counter';
// import ContactForm from './component/ContactForm';
// import Practise from './component/Practise';
// import Toggle from './component/Toggle';
    import User from './component/User';

const App = () => {
  const [data, setData] = useState("Diksha123")
  // const [data, setData] = useState(0);

  // const incrementCounter = () => {
  //  setData(data+1);
 
  // }
  // const decrementCounter = () => {
  //   if(data > 0){
  //     setData(data - 1);
  //   }
  // }

  return(
    <div>
      <Tempapp />
      {/* <User username={data}/> */}
          {/* <Toggle /> */}
        {/* <ContactForm /> */}
    {/* <Practise />

      <Menu cartItem={data} />
      <Counter dataItem={data} 
              increment = {incrementCounter} 
              decrement={decrementCounter} 
      />
      <Counter dataItem={data} /> */}

    </div>
  )
}

export default App;
