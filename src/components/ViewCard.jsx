import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';




const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props=>props.mode === 'false' ? 'hsl(228, 28%, 20%)' : 'hsl(227, 47%, 96%)'};
    min-height: 120px;
    border-radius: 5px;
    padding: 10%;
    cursor: pointer;

    &:hover{
      ${props=>props.mode === 'false' ? 'filter: brightness(130%)' : 'filter: brightness(90%)'};
    }
`;
const TopCard = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;
const TitleCard = styled.p`
    color: ${props=>props.mode === 'false' ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)'};
    font-size: 0.8rem;
    font-weight: 700;
`;
const Icon = styled.img`
    height: 20px;
    width: 20px;
`;
const BottomCard = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`;
const Amount = styled.h1`
    color: ${props=>props.mode === 'false' ? 'white' : 'hsl(230, 17%, 14%)'};
    font-size: 2rem;
    font-weight: 700;
`;
const PercentCont = styled.div`
    display: flex;
    align-items: center;
`;
const Percent = styled.p`
    color: ${props=>props.type === 'inc'? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)' };
    font-size: 0.8rem;
    font-weight: 700;
`;

const IconVaria = styled.img`
    height: 5px;
    width: 7px;
    margin-right: 5px;
`;


const ViewCard = ({item}) => {

    const t = useSelector((state)=>state.theme.lightMode).toString();

    return (
    <Container mode={t}>
        <TopCard>
            <TitleCard mode={t}>{item.title}</TitleCard>
            <Icon src={item.icon}/>
        </TopCard>
        <BottomCard>
            <Amount mode={t}>{item.num}</Amount>
            <PercentCont>
                <IconVaria src={item.iconVaria} />
                <Percent type={item.typeVaria}>{item.perc}</Percent>
            </PercentCont>
        </BottomCard>
    </Container>
    )
    };

export default ViewCard;
