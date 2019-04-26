import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../globals/themes";
import constants from "../globals/constants";
import {CSSTransition} from "react-transition-group";


const FooterBar = styled.footer`
width: 100%;
display: flex;
background-color: ${theme.background.paper};
height: 5rem;
position: fixed;
bottom: 0;
display: flex;
justify-content: center;
z-index: 100;
  @media ${constants.device.tablet}, ${constants.device.customHeight}  {
    height: 4rem;
  }
`;

const FooterButton = styled.div`
height: 6.5rem;
width: 6.5rem;
margin-top: -3rem;
background-color: ${theme.background.base}
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

  @media ${constants.device.tablet}  {
    height: 5rem;
    width: 5rem;
    margin-top: -2.5rem;
  }

div {
height: 5rem;
width: 5rem;
background-color: ${theme.background.paper}
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: ${theme.other.boxShadow};
cursor: pointer;
transition: all .15s ease-in-out;
  @media ${constants.device.tablet} {
    height: 4rem;
    width: 4rem;
  }

&:hover {
transform: scale(1.02);
opacity: 0.9;
box-shadow: ${theme.other.boxShadow};

i {opacity: 0.8;}
}

i {
color: ${props => props.iconColor || "#000"};
font-size: 2rem; 
transition: all .15s ease-in-out;

}
`;
class Footer extends Component {
    render() {
        return (
            <CSSTransition appear={true} in={true} timeout={200} classNames="slide-up">

                <FooterBar className={"footer"}>
                    <FooterButton iconColor={theme.secondary.lightRed}>
                        <div>
                            <i className="material-icons">line_weight</i>
                        </div>
                    </FooterButton>
                </FooterBar>
            </CSSTransition>
        );
    }
}

export default Footer;
