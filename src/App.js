import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import './App.css';
import friends from "./friends.json";
import Header from "./components/Header/Header"




class App extends Component {

  state = {
    friends,
    score: 0,
    topScore: 0
  };

//When loaded display friends in a shuffled state
  componentDidMount() {
    this.setState({
      friends: this.shuffle(this.state.friends)
    });
  }

//function to shuffle friends
  shuffle = friends => {
    let newFriends = friends.sort(function (a, b) { return 0.5 - Math.random() });
    return newFriends;
  };

//function to reset friends clicked status to false then shuffle friends
  reset = friends => {
    const resetFriends = friends.map(friend => ({ ...friend, clicked: false }));
    return this.shuffle(resetFriends);
  }

//When correct guess update score and topscore where viable the shuffle friends.
  correctGuess = newFriend => {
    let newScore = this.state.score;
    newScore++;
    let newTopScore = Math.max(newScore, this.state.topScore)

    this.setState({
      friends: this.shuffle(newFriend),
      score: newScore,
      topScore: newTopScore
    })
    console.log(this.state.score);
  }

//when incorrect guess reset friends and score 
  wrongGuess = newFriend => {
    this.setState({
      friends: this.reset(newFriend),
      score: 0
    })
    console.log(this.state.score);
  }

//when a friend is clicked check if its been clicked if not update score +1 and shuffle friends.
//if this friend has been clicked before end game shuffle cards and reset score to 0
  handleClick = id => {
    let guessedCorrectly = false;

    const newFriend = this.state.friends.map(friend => {
      if (friend.id === id) {
        if (!friend.clicked) {
          friend.clicked = true;
          guessedCorrectly = true;
        }
      }
      return friend;
    });

    guessedCorrectly ? this.correctGuess(newFriend) : this.wrongGuess(newFriend);

  };



  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topScore={this.state.topScore} />
          {
            this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              clicked={friend.clicked}
              handleClick={this.handleClick}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
