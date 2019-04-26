import React, { Component } from 'react';
import Header from "../components/Header";
import styled from "styled-components";
import theme from "../globals/themes";
import MatchPlayers from "../components/MatchPlayers";

const MainElementDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 2rem;
`;
const GameTitle = styled.h1`
    margin: 0;
`;
const DescrTitle = styled.h2`
    margin: 0;
`;

class SelectParticipants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            selectionStates: ["winner", "losers", "summary"],
            currentState: 0,
            currentGame: {},
            allPlayers: {},
            winningPlayer: {},
            losingPlayers: {},
        };
    }
    componentDidMount() {
        this.fetchGameFromId();
        this.fetchAllPlayers();
    }

    setCurrentSelectionState() {

    }

    fetchGameFromId() {
        //TODO: Fetch game from API
        const gameId = this.props.match.params.gameId;


        //Mockup Data
        this.setState({
            isLoading : false,
            currentGame : {
                "-LaN4w9qxsZ1vjY5aTyF" : {
                    creationDate: 1553034887962,
                    gameName: "Super Smash Bros Ultimate",
                    imgUrl: "https://firebasestorage.googleapis.com/v0/b/switchelo.appspot.com/o/ssbu.jpg?alt=media&token=aa52fd1d-f979-4c69-b952-85d455bc6dd7.jpg"}
            }
        })
    }
    fetchAllPlayers() {
        //TODO: Fetch all players from API

        //Mockup Data
        this.setState({
            isLoading : false,
            currentGame : {
                "-LaN4w9qxsZ1vjY5aTyF" : {
                    creationDate: 1553034887962,
                    gameName: "Super Smash Bros Ultimate",
                    imgUrl: "https://firebasestorage.googleapis.com/v0/b/switchelo.appspot.com/o/ssbu.jpg?alt=media&token=aa52fd1d-f979-4c69-b952-85d455bc6dd7.jpg"}
            }
        })
    }


    playerUpdateCallback = (players, callbackState) => {
        /* Checks if callback is in "winner" stage, if so update the winning player state, if not, assume that the state 
         is in losing state and update the losing players */ 

        callbackState === this.state.selectionStates[0] ? this.setState({winningPlayer : players})
            : this.setState({losingPlayers : players});
    };
    render() {
        const gameId = this.props.match.params.gameId;
        const {isLoading, selectionStates, currentState, currentGame, allPlayers, winningPlayer, losingPlayers} = this.state;
        const game = currentGame[gameId];
        
        return (
            <div className="container">
                <Header/>
                {!isLoading ? 
                <MainElementDiv className={"MainElementDiv"}>
                    <GameTitle>{game.gameName}</GameTitle>
                    <DescrTitle>Step 1: Select a winning player</DescrTitle>

                    <MatchPlayers allPlayers={allPlayers} currentState={currentState} playerUpdateCallback={this.playerUpdateCallback}/>

                </MainElementDiv> : ""}
            </div>
        );
    }
}

export default SelectParticipants;
