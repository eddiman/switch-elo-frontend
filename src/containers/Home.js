import React, { Component } from 'react';
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import switchImg from "../assets/img/switchlogo.svg";
import styled from "styled-components";
import Footer from "../components/Footer";
import config from "../globals/config";
import constants from "../globals/constants";
import theme from "../globals/themes";
import {CSSTransitionGroup} from 'react-transition-group'
//🐥🐇



const HomeSection = styled.div`
height: 100%;
background-color: ${theme.background.base}
`;
const GameCardSection = styled.div`
display:flex;
flex-direction: row;
align-items: center;
overflow:scroll;
margin: 4rem 0;
padding-left: 4rem;
  @media ${constants.device.tablet} {
    flex-direction: column;
    padding: 0;
    align-items: center;
    margin: 0rem 0;
    background-color: ${theme.background.base};
}
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
            <GameCard key={key} loading={!this.state.isLoading} gameName={games[key].gameName} imgUrl={games[key].imgUrl !== undefined ? games[key].imgUrl : switchImg} gameId={key} history= {this.props.history}/>
        );




        return (
            <HomeSection className="Home">

                <Header title={"Yeah man"}/>
                {!this.state.isLoading ?
                    <CSSTransitionGroup transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={500}
                                        transitionEnter={false}
                                        transitionLeave={false}>
                        <GameCardSection className={"GameCardSection"}>
                            {gameCards}
                            <GameCard/>
                            <GameCard/>
                            <GameCard/>
                            <GameCard/>
                            <GameCard/>
                        </GameCardSection>
                    </CSSTransitionGroup>

                    :
                    <GameCardSection className={"GameCardSection"}>

                    </GameCardSection>}
                <Footer/>
            </HomeSection>
        );        /*return (
            <HomeSection className="Home">

                <Header title={"Yeah man"}/>
                    <CSSTransitionGroup in={!this.state.isLoading} timeout={200} classNames="my-node">
                        <GameCardSection className={"GameCardSection"}>
                            {gameCards}
                            <GameCard/>
                            <GameCard/>
                            <GameCard/>
                            <GameCard/>
                            <GameCard/>
                        </GameCardSection>
                    </CSSTransitionGroup>
        
                <Footer/>
            </HomeSection>
        );*/
    }
}

export default Home;
