import React from 'react';
import Buttom_Hooks from './Components/Buttom_Hooks';
import Buttom from './Components/Buttom';
import CountComponent from './Components/CountComponent';
import CountComponent_Hooks from './Components/CountComponent_Hooks';

const App = () => {
  return (
    <>
      <Buttom/>
      <Buttom_Hooks/>
      <CountComponent/>
      <CountComponent_Hooks/>
    </>
  );
}

export default App;