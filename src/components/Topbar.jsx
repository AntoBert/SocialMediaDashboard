import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { themeSwitch } from '../redux/themeRedux';
import { mobile } from '../Responsive';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 25vh;
    background-color:  ${props=>props.mode === 'false'? 'hsl(232, 19%, 15%)' : 'hsl(225, 100%, 98%)'};
    padding: 3% 10%;
    border-radius: 0 0 15px 15px;
    ${mobile({
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: "60px"
        })};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const SocialTitle = styled.h1`
    font-weight: 700;
    font-size: 2rem;
    color: ${props=>props.mode === 'false'? 'hsl(0, 0%, 100%)' : 'hsl(230, 17%, 14%)'};
    margin-bottom: 10px;
`;

const Break = styled.hr`
    height: 1px;
    width: 100%;
    background-color: hsl(228, 34%, 66%);
    margin: 15px auto 15px auto;
    border-width: 0;
    display: none;
    ${mobile({display: "block"})};
`;

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    ${mobile({width: "100%",justifyContent: "space-between"})};
`;

const ToggleText = styled.p`
    color: ${props=>props.mode === 'false' ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)'};
    font-weight: 700;
    font-size: 0.8rem;
    margin-right: 20px;
`;

const Toggle = styled.div`
    width: 42px;
    height: 22px;
    border-radius: 10px;
    background: ${props=>props.mode === 'false' ? 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))' : 'hsl(230, 22%, 74%)'};
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1%;
    justify-content: ${props=>props.mode === 'false' ? 'flex-start' : 'flex-end'};

    &:hover{
        background: ${props=>props.mode === 'true' && 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'};
    }
`;

const ToggleBut = styled.div`
    width: 17px;
    height: 16px;
    border-radius: 100%;
    cursor: pointer;
    background-color: ${props=>props.mode === 'false' ? 'hsl(232, 19%, 15%)' : 'white'};
`;

const TopStat = styled.div`

`;

const TitleStat = styled.p`
    color:  ${props=>props.mode === 'false' ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)'};
    font-weight: 700;
    font-size: 0.8rem;
`;



const Topbar = () => {

    const dispatch = useDispatch();
    const t = useSelector((state)=>state.theme.lightMode).toString();
   

    return (
    <Container mode={t}>
        <Wrapper>
            <SocialTitle mode={t}>Social Media Dashboard</SocialTitle>
            <TopStat>
                <TitleStat mode={t}>Total Followers: 23,004</TitleStat>
            </TopStat>
        </Wrapper>
        <Break />
        <ToggleContainer>
            <ToggleText mode={t}>Dark Mode</ToggleText>
            <Toggle onClick={()=> dispatch(themeSwitch())} mode={t}>
                <ToggleBut mode={t}/>
            </Toggle>
        </ToggleContainer>
    </Container>
    )
};

export default Topbar;
