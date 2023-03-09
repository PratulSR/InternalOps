import React from 'react';
// import logo from './logo.svg';
// import Button from "./components/CustomButtonComponent";
import './App.css';
import styled from 'styled-components';
import gdsc from './gdsc-logo.png';
import { Link, Route, Routes } from 'react-router-dom';

const Header = styled.header`
	display: flex;
	flex-direction: row;
	padding: 10px;
	justify-content: space-between;
	font-size: calc(12px + 1vmin);
	align-items: center;
	position: sticky;
	top: 0;
	background: red;
`;

const Image = styled.img`
    width: 500px;
    margin: 0;
    @media only screen and (max-width: 1024px) {
        width: 400px;  
    }
    @media only screen and (max-width: 525px) {
        width: 360px;  
    }
    
    @media only screen and (max-width: 435px) {
        width: 100%;
    }
`;

const Page = styled.div`
    color: white;
    padding: 20px;
    min-height: calc(100vh - 84px);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: url(${gdsc});
    opacity: 1.0;
    background-repeat: repeat;
    background-size: cover;
    @media only screen and (max-width: 768px) {
        height: calc(100vh - 80px);
    } 
    @media only screen and (max-width: 425px) {
        padding: 5px;
    } 
`;

export const Text = styled.p`
    margin: 50px 20px;
    color: black;
    font-size: calc(38px + 1vmin);
    @media only screen and (max-width: 1024px) {
        font-size: calc(15px + 1vmin);
        line-height: 1.5em;
    }   
    @media only screen and (max-width: 768px) {
        text-align: center; 
    }
    @media only screen and (max-width: 268px) {
        font-size: calc(14px + 1vmin);
    }
`;

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noreferrer')};
`;

const Logo = styled.img`
	height: 60px;
	margin-left: 10px;
	@media only screen and (max-width: 525px) { 
		height: 50px;
	} 
	@media only screen and (max-width: 425px) { 
		height: 45px;
		margin-left: 5px;
	} 
	@media only screen and (max-width: 375px) { 
		height: 40px;
	} 
	@media only screen and (max-width: 325px) { 
		height: 35px;
	}
	@media only screen and (max-width: 265px) { 
		height: 25px;
		margin-left: 2.5px;
	}
`;

function App() {
  return (
    <Page>
      <Text>Me and my (new) Love</Text>
      <Image src={require('./Distracted_Sigma.jpg')} alt="Distracted Sigma looking at React" title="Python had my heart, not anymore😤" />
      {/* <Button 
        border="black"
        color="light blue"
        height = "40px"
        onClick={() => window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, '_blank', 'noreferrer')}
        radius = "10%"
        width = "300px"
        children = "Click here for a surprise👀"
        cursor='pointer'
      /> */}
      <Button as="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click here for a surprise👀</Button>
      
      {/* <button><img src={require('./gdsc-logo.png')} alt="gdsc logo" onClick={() => window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, '_blank', 'noreferrer')} /></button> */}
    </Page>
  );
}

export default App;
