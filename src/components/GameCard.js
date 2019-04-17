import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../globals/themes";
import constants from "../globals/constants"
import gameSnd from "../assets/sound/OpenGame.wav";


const GameCardDiv = styled.div`
min-width: 24rem;
min-height: 24rem;
border-radius: ${constants.cardRadius};
margin: 2rem .5rem;
box-shadow: ${constants.boxShadow};
background-image: url(${props => props.imgUrl});
background-color: ${theme.background.paper};
transition: all .15s ease-in-out;
background-position: center;
background-size: cover;
    
  @media ${constants.device.mobileL} {
    min-width: 18rem;
    min-height: 18rem;
}

${props => props.loading ? `animation: loading 1s ease-in-out infinite;` :``};
${props => props.cardClicked ? `animation: select 0.5s ease-in-out forwards;\`` :``};


${props => props.gameId ? `
cursor: pointer;
&:hover {
box-shadow: ${constants.boxShadowHover};

transform: scale(1.02);
opacity: 0.9;
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
                }, 500);

            }

        }
    }


    render() {
        const {imgUrl, gameId, loading} = this.props;
        const {cardClicked} = this.state;
        return (
            <GameCardDiv className="GameCard" imgUrl={imgUrl} gameId={gameId} cardClicked={cardClicked} loading={loading} onClick={evt => this.goToGameUrl(evt, gameId)}>
                {gameId !== undefined ? <audio ref={this.openGameRef} src={gameSnd}/> : ""}
            </GameCardDiv>

        );
    }
}

export default GameCard;
