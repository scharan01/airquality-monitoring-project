import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 84vh;
  display: flex;
`;

const Left = styled.div`
  padding: 20px;
  width: 45%;
`;

const Right = styled.div`
  padding: 20px;
  width: 45%;
`;

const Lefttop = styled.div`
  margin: 10px;
  height: 35vh;
  background-color: white;
  border-radius: 10px;
`;

const Righttop = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 15px;
  height: 18vh;
  margin: 17px 0px;
`;

const Aqicont = styled.div`
  margin-left: 25px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const Aqitext = styled.h1`
  font-weight: 500;
  margin-top: 40px;
  font-size: 50px;
  color: ${(props) => props.colour};
`;

const Aqinum = styled.h1`
  border: 2px solid black;
  border-radius: 15px;
  padding: 8px;
  font-size: 80px;
  background-color: ${(props) => props.colour};
  color: white;
  font-weight: 500;
`;

const Leftheading = styled.h1`
  padding: 5px 15px;
  font-weight: 500;
  font-size: 40px;
`;

const Aqiupdate = styled.h3`
  font-weight: 700;
  margin: 20px 30px;
  padding: 5px;
`;

const Leftbottom = styled.div`
  margin: 15px;
  height: 28vh;
  background-color: white;
  border-radius: 10px;
`;

const Lbheading = styled.h2`
  margin: 15px 10px 0px 15px;
  padding-top: 20px;
`;

const Lbbox = styled.div`
  margin: 5px 5px;
  padding: 5px;
`;

const Lbco = styled.h3`
  font-weight: 500;
  margin: 10px 10px;
`;

const Rightimg = styled.img`
  width: 70%;
  padding: 10px;
`;

const Imagecont = styled.div`
  border-radius: 10px;
  background-color: white;
  text-align: center;
`;

const Weheading = styled.h2`
  margin-left: 5px;
`;

const Webox = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Mainbody = () => {
  const [aqi, setaqi] = useState("");
  const [temp, settemp] = useState("");
  const [hum, sethum] = useState("");
  const [co, setco] = useState("");
  const [co2, setco2] = useState("");
  const [created_at, setcreated_at] = useState("");
  const [quality, setquality] = useState("");
  const [color, setcolor] = useState("");

  const convertDate = (givendate) => {
    const mydates = givendate.split(",");
    const mytime = mydates[1].split(":");

    let hour = parseInt(mytime[0]) + 5;
    let min = parseInt(mytime[1]) + 30;

    if (min > 59) {
      hour++;
      min = min - 60;
    } else if (hour > 23) {
      hour = hour - 24;
    }

    return mydates[0] + " , " + hour + ":" + min + ":" + mytime[2];
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(
          "https://api.thingspeak.com/channels/1866734/feeds.json?api_key=#####&results=1"
        );
        setaqi(res.data.feeds[0].field3);
        settemp(res.data.feeds[0].field1);
        sethum(res.data.feeds[0].field2);
        setco(res.data.feeds[0].field4);
        setco2(res.data.feeds[0].field5);
        let creat = res.data.feeds[0].created_at;
        let create = creat.replace("T", ",");
        let created = create.replace("Z", "");
        const createdc = convertDate(created);
        setcreated_at(createdc);
        console.log(res);
        let s = parseInt(aqi);

        switch (true) {
          case s > 400:
            setquality("Severe");
            setcolor("maroon");
            break;
          case s > 300:
            setquality("Very Poor");
            setcolor("red");
            break;
          case s > 200:
            setquality("Poor");
            setcolor("orange");
            break;
          case s > 100:
            setquality("Moderate");
            setcolor("yellow");
            break;
          case s > 50:
            setquality("Satisfactory");
            setcolor("green");
            break;
          case s > 0:
            setquality("Good");
            setcolor("darkgreen");
            break;
          default:
            setquality("Undefined");
            setcolor("black");
        }
      } catch (err) {}
    };

    const interval = setInterval(() => {
      getdata();
    }, 10000);

    getdata();

    return () => clearInterval(interval);
  }, [aqi]);

  return (
    <Container>
      <Left>
        <Leftheading>Air Quality Index (AQI)</Leftheading>
        <Lefttop>
          <Aqicont>
            <Aqinum colour={color}>{aqi}</Aqinum>
            <Aqitext colour={color}>{quality}</Aqitext>
          </Aqicont>
          <Aqiupdate>Last Updated at : {created_at} </Aqiupdate>
        </Lefttop>
        <Leftbottom>
          <Lbheading>Pollutants</Lbheading>
          <Lbbox>
            <Lbco>CO Concentration : {co} PPM </Lbco>
            <Lbco>CO2 Concentration : {co2} PPM </Lbco>
          </Lbbox>
        </Leftbottom>
      </Left>
      <Right>
        <Righttop>
          <Weheading>Weather</Weheading>
          <Webox>
            <Lbco>Temperature : {temp}°c </Lbco>
            <Lbco>Humidity : {hum}% </Lbco>
          </Webox>
        </Righttop>
        <Imagecont>
          <Rightimg src="https://www.airveda.com/resources/images/aqi_calculation_update/chart.png" />
        </Imagecont>
      </Right>
    </Container>
  );
};

export default Mainbody;
