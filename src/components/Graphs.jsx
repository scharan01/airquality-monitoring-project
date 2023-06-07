import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-around;
`;

const Iframe = styled.iframe`
  width: 450px;
  height: 250px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Maincont = styled.div`
  background-color: #f5f5f5;
`;

const Heading = styled.h1`
  padding: 30px;
  text-align: center;
`;

const Graphs = () => {
  return (
    <Maincont>
      <Heading>Data collected from cloud</Heading>
      <Container>
        <Iframe src="https://thingspeak.com/channels/1866734/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=20&title=Temperature&type=line&api_key=#######"></Iframe>
        <Iframe src="https://thingspeak.com/channels/1866734/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=20&title=Humidity&type=line&api_key=#######"></Iframe>
        <Iframe src="https://thingspeak.com/channels/1866734/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=20&title=AQI&type=line&api_key=#######"></Iframe>
        <Iframe src="https://thingspeak.com/channels/1866734/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=20&title=Carbon+Monoxide&type=line&api_key=#######"></Iframe>
        <Iframe src="https://thingspeak.com/channels/1866734/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=20&title=Carbon+Dioxide&type=line&api_key=#######"></Iframe>
      </Container>
    </Maincont>
  );
};

export default Graphs;
