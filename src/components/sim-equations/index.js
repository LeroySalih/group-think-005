import { MathComponent } from "mathjax-react";
import {useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const SimEqQuestion = ({ a, b, c, d, x, y, showAnswer, onCheck }) => {
  const [xAnswer, setXAnswer] = useState(0);
  const [yAnswer, setYAnswer] = useState(0);

  const formatCoef = (a) => {
    switch (a) {
      case 1: return '';
      case -1: return '-';
      default: return a;
    }
  }
  const eq1 = (a, b, x, y) =>
    `${formatCoef(a)}x ${b > 0 ? "+" : ""} ${formatCoef(b)}y = ${a * x + b * y}`;

  const check = () => {
    return (
      parseInt(xAnswer, 10) === parseInt(x, 10) &&
      parseInt(yAnswer, 10) === parseInt(y, 10)
    );
  };

  const handleCheck = () => {
    console.log("Calling onCheck");
    onCheck(check());
  };

  return (
    <>
      <div className="eq">
        <MathComponent tex={eq1(a, b, x, y)} />
        <MathComponent tex={eq1(c, d, x, y)} />
      </div>

      
          
        <Stack className="answerBlock" direction="row" spacing={2}>
          
          <TextField label="x =" variant="outlined" value={xAnswer} onChange={(e) => setXAnswer(e.target.value)} />
          <TextField label="y =" variant="outlined" value={yAnswer} onChange={(e) => setYAnswer(e.target.value)}/>
          <Button variant="contained" onClick={handleCheck}>Check</Button>
          
        </Stack>
      
      
      <style jsx>
        {`
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
          }

          .label {
            font-size: 2rem;
            padding: 0.5rem;
            margin: 0.5rem;
          }

          .eq {
            font-size: 3rem;
          }

          .answerBlock{
            justify-content: center;
            text-align: center;
          }

          
        `}
      </style>
    </>
  );
};


export default SimEqQuestion;