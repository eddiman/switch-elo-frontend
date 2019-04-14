import React, { Component } from 'react';
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import switchImg from "../assets/img/switchlogo.svg";
import styled from "styled-components";
import Footer from "../components/Footer";
import config from "../globals/config";

const GameCardSection = styled.div`
display:flex;
flex-direction: row;
align-items: center;
overflow:scroll;
margin: 4rem 0;
padding-left: 4rem;
 `;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            games: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){

        const baseUrl = config.baseUrl.developer;
        const initConfig = {
            method : 'GET',
            mode: 'cors',
            'Access-Control-Allow-Origin':'*',
            "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",

        };

        this.setState({
            isLoading: true,
            games: []
        });


        fetch(baseUrl + "/switch/games", initConfig)
            .then(response => response.json())
            .then(games => this.setState({
                games,
                isLoading: false
            }))
            .catch(error => console.log('parsing failed', error))
    }


    render() {
        const{games} = this.state;
        console.log(this.state.games);

        const gameCards = Object.keys(games).map(key =>
            <GameCard key={key} imgUrl={games[key].imgUrl !== undefined ? games[key].imgUrl : switchImg} gameId={key} history= {this.props.history}/>
        );

        return (
            <div className="Home">
                <Header title={"Yeah man"}/>
                {!this.state.isLoading ?
                    <GameCardSection className={"GameCardSection"}>
                        {gameCards}
                        <GameCard/>
                        <GameCard/>
                        <GameCard/>
                        <GameCard/>
                        <GameCard/>
                    </GameCardSection> :
                    <GameCardSection className={"GameCardSection"}>
                        <GameCard loading={true}/>
                        <GameCard loading={true}/>
                        <GameCard loading={true}/>
                        <GameCard loading={true}/>
                        <GameCard loading={true}/>
                        <GameCard loading={true}/>
                    </GameCardSection>}
                <Footer/>
            </div>
        );
    }
}

export default Home;
