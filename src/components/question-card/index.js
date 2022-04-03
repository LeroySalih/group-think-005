import {useState, useEffect} from 'react'
import SimEqQuestion from '../sim-equations';
import MakeXTheSubject from '../make-x-the-subject';
import ChangeTheDenominator from '../change-the-denominator';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomCoef(max, allowNegative) {
  const c1 = getRandomInt(max) + 1; // ensure not 0, 1
  return (allowNegative && Math.random() < 0.5) ? -c1 : c1 ;
}

function getRandomPrime() {
  const primes = [2,3,5,7,11,13,15]
  return primes[getRandomInt(primes.length - 1)]
}

const QuestionCard = ({type}) => {

  const generateQuestion = (type) => {

    switch(type){
      case 'change-the-denominator' : return {
        a : getRandomCoef(9),
        b : getRandomInt(9)
      }
      case 'sim-equ' : return {
        a : getRandomCoef(9), 
        b : getRandomCoef(9, true),
        c : getRandomCoef(9),
        d : getRandomCoef(9),
        x : getRandomInt(9) + 2,
        y : getRandomInt(9) + 2
      }

      case 'make-x-the-subject' : return {
        a : getRandomPrime(), 
        b : getRandomPrime(),
        c : getRandomPrime()
        
      }

      default : return null;
    }
  }
  const [question, setQuestion] = useState(generateQuestion(type));
  
  const [result, setResult] = useState(null);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    newQuestion(type);
  }, [type]);

  const handleNext = () => {
    setShowAnswer(false);
    newQuestion();
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleCheck = (result) => {
    setShowAnswer(true);
    setResult(result);
  };

  const newQuestion = () => {
    setQuestion(generateQuestion(type))
    setResult(null);
  };

  return (
    <div className="App">
      <div className="cardTitle">
        <h1>Math Card</h1>
        <button onClick={handleNext}>Skip</button>
      </div>

      { type==="sim-equ" && <SimEqQuestion
        {...question}
        showAnswer={showAnswer}
        onCheck={handleCheck}
      />
      }

      {type === 'change-the-denominator' && 
        <ChangeTheDenominator
          {...question}
          showAnswer={showAnswer}
          onCheck={handleCheck}
        />
      }

      {type === 'make-x-the-subject' && 
        <MakeXTheSubject
          {...question}
          showAnswer={showAnswer}
          onCheck={handleCheck}
        />
      }

      <div>
      {result && <div className="correct">Correct!</div>}
      {result === false && <div className="incorrect">Incorrect!</div>}
      </div>

      <style jsx>{`

        .cardTitle{
          background-color: silver;;
          display: flex;
          flex-direction: row;
        }

        .correct {
          border-bottom: solid 1px green;
          border-top: solid 1px green;
          background-color: #b7ffbf;
          padding: 0.3rem;
          text-align: center;
          font-size: 2rem;
      }

        .incorrect {
        
            border-bottom: solid 1px red;
            border-top: solid 1px red;
            background-color: #ffc0c0;
            padding: 0.3rem;
            text-align: center;
            font-size: 2rem;
        
        }
      `}</style>
     

      
    </div>
  );
};




export default QuestionCard;
