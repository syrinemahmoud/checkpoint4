import React from 'react';
import './style.css';
import Photo from './profile.png';
import Wrapper from './Wrapper';
import Title from './Title';


function App(props){
  
  return(
  
<Wrapper>

<Photo src='/profile.png' />

<Title style={{

  color:"red"

}}>My Name here</Title>

<Title small>My job here</Title>

</Wrapper>

  )
}



export default App;

    
    


  


