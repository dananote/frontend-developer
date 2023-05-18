import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color: royalblue;
padding: 10px;
color: white;
`;

const ButtonStyled2 = styled(Button)`
color: black;
border: none;
border-radius: 10px;
font-weight: bold;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0/3);
`;

const ButtonStyled3 = styled(Button)`
color: yellow;
width: 100%;
border-color: lightgreen;
`;

const ButtonStyled4 = styled(ButtonStyled2)`
border-radius: 20px;
color: #fff;
background-color: salmon;
`;


export { Button, ButtonStyled2, ButtonStyled3, ButtonStyled4 }