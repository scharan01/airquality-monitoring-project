import styled from 'styled-components';

const Container = styled.div`
    background-color : #1fd655;
`;

const Title = styled.h2`
    padding : 30px;
    font-weight : 500;
    text-align : center;
`;

const Image = styled.img`
    width : 20%;
    position : relative;
    left : 40%;
`;

const Footer = () => {
  return (
    <Container>
        <Title>Project Made by Vandavasi Satya Charan and Chitumalla Sahith <br /> under the supervision of Professor Prem Chand Jain and Dr.Rohit Singh</Title>
        <Image src="https://snu.edu.in/sites/default/files/PNG%20-%20SNU%20IOE-01.png" />
    </Container>
  )
}

export default Footer