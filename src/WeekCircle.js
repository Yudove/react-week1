import { round } from "lodash";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const WeekCircle = (props) => {
  
  const history = useHistory();

  const day_text_dict = { 0:"일", 1:"월", 2:"화", 3:"수", 4:"목", 5:"금", 6:"토" };
    
  
  console.log( Object.keys(day_text_dict).map((_d, idx) => day_text_dict[_d]) );

  

  const week_days = Object.keys(day_text_dict).map((_d, idx) => {
    
    let today = new Date().getDay();

    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return day_text_dict[d];
  });

  console.log(week_days);

  let rate_sum = 0;

  const week_rates = week_days.map((w, idx) => {
    const random =
      Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
      Math.ceil(1);
    rate_sum += random;

    return {
      day: w,
      rate: random,
    };
  });

  console.log(
    week_rates,
    week_rates.length
  );

  const rate_avg = (rate_sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);

  return (
    
      <Container>
        <Title><h3>내 일주일은?</h3></Title>

        {week_rates.map((w, idx) => {
          return (
            <Div key={`week_day_${idx}`}>
              
              <P >
                {w.day}
              </P>

              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <CircleStyle style={{ backgroundColor: w.rate < idx ? '#ddd' : '#ffeb3b' }} key={idx}>
                                       
                  </CircleStyle>
                );
              })}

              <Triangle onClick={() => { history.push(`/detail/${w.day}`); }}>
            
              </Triangle>
            </Div>
          );
        })}
        <Average>
          
        
          평균 평점 {avg}
          <Button onClick={() => { setAvg(parseInt(0).toFixed(1)); }}>
            <Resetbtn>Reset</Resetbtn>
          </Button>
        </Average>
      </Container>
    
  );
};

const Container = styled.div`
max-width: 350px;
width: 80vw;
height: 80vh;
margin: 5vh auto;
padding: 5vh 0;
border: 1px solid #ddd;
box-sizing: border-box;
border-radius: 5px;
`;

const Title = styled.div`
text-align: center;
`;

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem 0;
width: 100%;
`;

const P = styled.div`
margin: 0 0.5rem 0 0;
font-weight: bold;
`;

const CircleStyle = styled.div`
width: 30px;
height: 30px;
border-radius: 30px;
margin: 5px;
background-color: w.rate < idx ? #ddd : #ffeb3b;
`;

const Triangle = styled.div`
appearance: none;
background-color: transparent;
border-color: purple;
width: 0;
height: 0;
border-top: 1rem solid transparent;
border-bottom: 1rem solid transparent;
border-left: 1.6rem solid purple;
color: #fff;
cursor: pointer;
`;

const Average = styled.div`
width: 8rem;
margin: 1rem auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
color: blue;
padding: 9px;
font-size: 25px;
font-weight: bold;
`;

const Button = styled.div`
width: inherit;
height: fit-content;
background-color: dodgerblue;
border-radius: 6px;
text-align: center;
margin: 10px 0 0 0;
padding: 10px;
`;

const Resetbtn = styled.div`
color: white; 
font-size: 18px;
`;
export default WeekCircle;
