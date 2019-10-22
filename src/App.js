import React from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import './App.css';



function App() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        <FriendCard />
      </Wrapper >
    );
  }


export default App;
