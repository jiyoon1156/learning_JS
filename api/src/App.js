import React, {useEffect} from 'react';
import axios from 'axios'
// import Users from './Users';

const App = (props) => {

  useEffect(() => {
    const apiCall = async () => {
      //비구조화 할당
      const {data}  = await axios.get(
        'http://localhost:3000/questions'
      );

      console.log(data.resolved);
    };
    apiCall();
  }, [])
  return (
    <div></div>
  );
};

export default App;
