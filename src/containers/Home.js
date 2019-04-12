import React, { Component } from 'react';
import Header from "../components/Header";
import GameCard from "../components/GameCard";



class Home extends Component {
  render() {
      const imgUrl = "../assets/img/ssbu.jpg";
    return (
          <div className="Home">
              <Header title={"Yeah man"}/>
              <GameCard imgUrl={imgUrl} gameId={"Thes the game id"}/>
          </div>
    );
  }
}

export default Home;
