import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../globals/themes";
import constants from "../globals/constants"
import gameSnd from "../assets/sound/OpenGame.wav";

const GameCardDiv = styled.div`
min-width: 24rem;
min-height: 24rem;
border-radius: ${theme.other.cardRadius};
margin: 2.75rem .5rem;
box-shadow: ${theme.other.boxShadow};
background-image: url(${props => props.imgUrl});
background-color: ${theme.background.paper};
transition: all .15s ease-in-out;
background-position: center; 
background-size: cover;
position: relative;
z-index: 1;
transform-style: preserve-3d;
&:after {
content:'${props => props.gameName}'; 
   background: ${theme.other.hoverGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 5s ease infinite;
  background-size: 900% 900%;
  margin: 1rem 0 0 0.5rem;
  font-weight: 300;
  transition: all .15s ease-in-out;
  opacity: 0;
    margin-top: -2.5rem;
    position: absolute;
    font-size: 1.75rem;
}

    &:before {
        content: "";
        transition: all .15s ease-in-out;
        position: absolute;
        z-index: -1;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        transform: translateZ(-1px);
        	animation: gradient 1.5s ease infinite;
        	opacity:0;

        border-radius: ${theme.other.cardRadius}
        ${props => props.cardClicked ? `opacity:0;` :``};

    }

  @media ${constants.device.mobileL} {
    min-width: 18rem;
    min-height: 18rem;
}

${props => props.loading ? `animation: loading 1s ease-in-out infinite;` :``};
${props => props.cardClicked ? `animation: select 0.3s;` :``};


${props => props.gameId ? `
cursor: pointer;
&:hover {
box-shadow: ${theme.other.boxShadowHover};
transform: scale(1.02) translateZ(0px);
    &:before {
    opacity:1;
    background: ${theme.other.hoverGradient};
    background-size: 900% 900%;
    }
    &:after {
        opacity: 1;
        }
}` : ` 
&:hover {
animation: shake .3s ease-in-out forwards;
   } 
   `}
`;


class GameCard extends Component {
    constructor(props) {
        super(props);
        this.openGameRef = React.createRef();
        this.state = {
            cardClicked : false
        }
    }
    goToGameUrl(evt, gameId){
        if (evt.type === 'click' && evt.clientX !== 0 && evt.clientY !== 0) {
            if (gameId !== undefined) {
                const node = this.openGameRef.current;
                console.log(node);
                node.play();
                this.setState({
                    cardClicked : true
                });
                setTimeout( () => {

                    this.props.history.push('/contest/' + gameId);
                }, 300);

            }

        }
    }


    render() {
        const {gameId, gameName, imgUrl, loading} = this.props;
        const {cardClicked} = this.state;
        return (
                <GameCardDiv className="GameCard" imgUrl={imgUrl} gameId={gameId} cardClicked={cardClicked} loading={loading} onClick={evt => this.goToGameUrl(evt, gameId)} gameName={gameName}>
                    {gameId !== undefined ? <audio ref={this.openGameRef} src={gameSnd}/> : ""}
                </GameCardDiv>

        );
    }
}

export default GameCard;
