import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const Container = styled.div`
`;
const TopBorder = styled.div`
    background: ${props=>props.color};
    border-radius: 5px 5px 0 0;
    min-height: 4px;
    width: 100%;
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props=>props.mode === 'false' ? 'hsl(228, 28%, 20%)' : 'hsl(227, 47%, 96%)'};
    border-radius: 0 0 5px 5px;
    min-height: 150px;
    padding: 8% 20%;
    cursor: pointer;

    &:hover{
      ${props=>props.mode === 'false' ? 'filter: brightness(130%)' : 'filter: brightness(90%)'};
    }
`;
const Image = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`;
const Account = styled.p`
    color:  ${props=>props.mode === 'false' ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)'};
    font-size: 0.8rem;
    font-weight: 700;
`;
const TopCard = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
const MiddleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;
const Amount = styled.h1`
    color: ${props=>props.mode === 'false' ? 'hsl(0, 0%, 100%)' : 'hsl(230, 17%, 14%)'};
    font-size: 3rem;
    font-weight: 700;
`;
const Category = styled.h2`
    color: ${props=>props.mode === 'false' ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)'};
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 3px;
`;
const BottomCard = styled.div`
    display: flex;
    align-items:center;
`;
const IconVaria = styled.img`
    height: 5px;
    width: 7px;
    margin-right: 5px;
`;
const NumVaria = styled.p`
    color: ${props=>props.type === 'inc'? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)' };
    font-size: 0.8rem;
    font-weight: 700;
`;



const SocialCard = ({item}) => {

  const t = useSelector((state)=>state.theme.lightMode).toString();

  return (   
  <Container>
    <TopBorder color={item.col}/>
    <Card mode={t}>
      <TopCard>
        <Image src={item.icon}/>
        <Account mode={t}>
          {item.name}
        </Account>
      </TopCard>
      <MiddleCard>
        <Amount mode={t}>
          {item.stat}
        </Amount>
        <Category mode={t}>
          {item.cat}
        </Category>
      </MiddleCard>
      <BottomCard>
        <IconVaria src={item.varia} />
        <NumVaria type={item.typeVaria}>
          {item.num} Today
        </NumVaria>
      </BottomCard>
    </Card>  
  </Container>
  )
};

export default SocialCard;