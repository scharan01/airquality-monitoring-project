import styled from 'styled-components';


const Container = styled.div`
    height: 80px;
    background-color : #1fd655;
    display : flex;
`;

const Logo = styled.h1`
    font-weight : bold;
`;

const Left = styled.div`
    padding : 25px;
    display : flex;
    width : 25%;
`;

const Right = styled.div`
    display : flex;
    padding : 25px;
    margin-left : 15%;
    margin-top : 5px;
    width : 40%;
    justify-content : space-around;

`;

const Item = styled.h3`
    cursor : pointer;
`;

const navbar = () => {
  return (
    <Container>
        <Left>
            <Logo>VAAYU</Logo>
        </Left>
    </Container>
  )
}

export default navbar