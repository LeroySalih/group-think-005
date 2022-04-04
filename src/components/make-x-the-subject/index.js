import { MathComponent } from "mathjax-react";
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';

const MakeXTheSubjectQuestion = ({ a, b, c, showAnswer, onCheck }) => {
  const [numerator, setNumerator] = useState(0);
  const [yCoef, setYCoef] = useState(0);
  const [sign, setSign] = useState('+');
  const [denominator, setDenominator] = useState(1);

  useEffect(()=> {
    setNumerator(0)
    setSign('+')
    setYCoef(0)
    setDenominator(1)
  }, [a,b,c])
  const eq1 = (a, b, c) =>
    `${a}x ${b > 0 ? "+" : ""} ${b}y = ${c}`;

  const eq2 = (numerator, sign, yCoef, denominator) => `x = \\frac{${numerator} ${sign} ${yCoef}y}{${denominator}} `

  // Modify Here
  const check = () => {
    return ( 
      parseInt(c, 10) === parseInt(numerator, 10) 
      // && parseInt(yAnswer, 10) === parseInt(y, 10)
      && ((yCoef > 0 && sign === "-") || (sign === '-'))
      && parseInt(b, 10) === parseInt(yCoef, 10) 
      && parseInt(a, 10) === parseInt(denominator)
    );
  };

  const handleCheck = () => {
    console.log("Calling onCheck");
    onCheck(check());
  };

  return (
    <>
      <div className="eq">
        <MathComponent tex={eq1(a, b, c)} />
      </div>
        <MathComponent tex={eq2(numerator, sign, yCoef, denominator)} />
      <div>

      </div>

      <div className="answerContainer"> 
      <div className="rearrange-grid">
        <div className="numerator"><input value={numerator} onChange={(e) => setNumerator(e.target.value)} /></div>
        <div className="numerator"><input value={sign} onChange={(e) => setSign(e.target.value)} /></div>
        <div className="numerator yCoef" >
            <input value={yCoef} onChange={(e) => setYCoef(e.target.value)} />
            <div style={{fontSize:'150%'}}><MathComponent  tex={'y'}/></div>
        </div>
        <div></div>
        <div><input value={denominator} onChange={(e) => setDenominator(e.target.value)} /></div>
        <div></div>
      </div>
      </div>
    
      

      <div style={{display:'flex', justifyContent: 'center'}}>
        <Button variant="contained" onClick={handleCheck}>Check</Button>
      </div>
      
      <style jsx>
        {`

          .answerContainer {
           
              text-align: center;
              display: flex;
              justify-content: center;
          
          }

          .yCoef {
            display: flex;
            flex-direction: row;
          }

          .yCoef span {
            color: red;
            font-size: 3rem;
            font-family: 'Times New Roman'
            font-style: italic;
          }

          .rearrange-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: min-content;
          }

          button {
            background-color: #6ebcf3;
            border-radius: 0.3rem;
            font-size: 2rem;
            padding: 1rem;
            margin: 0.5rem;
          }
          input {
            width: 4rem;
            font-size: 2rem;
            padding: 0.5rem;
            margin: 0.5rem;
            height: 56.34px;
          }

          .label {
            font-size: 2rem;
            padding: 0.5rem;
            margin: 0.5rem;
          }

          .fraction {
            border-bottom : solid 2px black;
            width: 8rem;
          }

          .eq {
            font-size: 3rem;
          }

          .answerGrid{
            text-align: center;
          }

          .numerator {
            border-bottom : solid 3px black;
          }

          
        `}
      </style>
    </>
  );
};


export default MakeXTheSubjectQuestion;