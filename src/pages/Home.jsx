import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SocialCard from '../components/SocialCard.jsx';
import Topbar from "../components/Topbar.jsx";
import ViewCard from '../components/ViewCard.jsx';
import { overviewItem, socialItem } from '../data.js';


const Container = styled.div`
    background-color: ${props=>props.mode === 'false'? 'hsl(230, 17%, 14%)' : 'white'};
    min-height: 100vh;
`;

const CardContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns:repeat(auto-fit,minmax(clamp(100%/5 + 0.1%, (800px - 100vw)*1000,100%),1fr));
    padding: 3% 10%;
    position: relative;
    bottom: 80px;
`;

const Overview = styled.h1`
    position: relative;
    bottom: 60px;
    color: ${props=>props.mode === 'false' ? 'white' : 'hsl(228, 12%, 44%)'};
    font-size: 1.3rem;
    font-weight: 700;
    margin-left: 10%;
    margin-bottom: 20px;
`;

const CardOverview = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns:repeat(auto-fit,minmax(clamp(100%/5 + 0.1%, (800px - 100vw)*1000,100%),1fr));
    padding: 3% 10% 0 10%;
    position: relative;
    bottom: 80px;
`;

const Attribution = styled.div`
    color: ${props=>props.mode === 'false' ? 'white' : 'hsl(230, 17%, 14%)'};
    width: 100%;
    font-weight: 700;
`;


const Home = () => {
  const t = useSelector((state)=>state.theme.lightMode).toString();

  return (
  <Container mode={t}>
    <Topbar />
    <CardContainer>
      {socialItem.map(item=>(
        <SocialCard item={item} key={item.id} />
      ))}
    </CardContainer>
    <Overview mode={t}>
        Overview - Today
    </Overview>
    <CardOverview>
    {overviewItem.map(item=>(
        <ViewCard item={item} key={item.id} />
      ))}
    </CardOverview>
    <Attribution className="attribution" mode={t}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Antonio Bertoni</a>.
    </Attribution>
  </Container>
  )
};

export default Home;
