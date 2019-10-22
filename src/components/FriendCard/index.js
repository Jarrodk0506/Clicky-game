import React, { Component } from "react";
import "./style.css";

// const friends = [
//   {
//     id: 1,
//     name: "SpongeBob",
//     image: "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
//     clicked: 0
//   },
//   {
//     id: 2,
//     name: "Mr. Krabs",
//     image: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
//     clicked: 0
//   },
//   {
//     id: 3,
//     name: "Squidward",
//     image: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
//     clicked: 0
//   },
//   {
//     id: 4,
//     name: "Dexter",
//     image: "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
//     clicked: 0
//   }
// ]


class FriendCard extends Component {
  // Setting the component's initial state
  state = {
    score: 0,
    friends: [
      {
        id: 1,
        name: "SpongeBob",
        image: "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
        clicked: 0
      },
      {
        id: 2,
        name: "Mr. Krabs",
        image: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
        clicked: 0
      },
      {
        id: 3,
        name: "Squidward",
        image: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
        clicked: 0
      },
      {
        id: 4,
        name: "Dexter",
        image: "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
        clicked: 0
      }
    ]
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    console.log("test");
    console.log(this.state);
    console.log(this);
  }

  render() {

    return (
      <div>
        {this.state.friends.map(friend =>
          <div className="card"
            onClick={this.handleClick}
            onChange={this.handleInputChange}>
            <div className="img-container">
              <img alt={friend.name} src={friend.image} />
            </div>
          </div>)}
      </div>
    );
  }
}


export default FriendCard;
