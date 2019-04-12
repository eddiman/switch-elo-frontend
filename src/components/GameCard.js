import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../globals/themes";
import {Link} from "react-router-dom";


const GameCardDiv = styled.div`
width: 24rem;
height: 24rem;
border-radius: ${theme.constants.cardRadius}px;

box-shadow: ${theme.constants.boxShadow};
background-image: url(${props => props.imgUrl});
`;


class GameCard extends Component {
    
  render() {
        const {imgUrl, gameId} = this.props;

    return (
        <GameCardDiv className="GameCard" imgUrl={imgUrl} gameId={gameId}>
            <Link to={"/contest/" + gameId}/>

        </GameCardDiv>

  );
  }
}

export default GameCard;
