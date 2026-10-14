import { use, useState } from 'react'
import './App.css'
import Card from './components/Card'



function App() {
  const [currentSlide, setCurrentSLide] = useState(0);
  const [firstButtonActive, setFirstButtonActive] = useState("not-active");
  const [secondButtonActive, setSecondButtonActive] = useState("active"); 
  let firstClick = true;

  

  const onButtonUpdate = (slide) => {
    if (slide > 0) {
        setFirstButtonActive("active");
    } else {
        setFirstButtonActive("not-active");
    }

    if (slide < flashcards.length - 1) {
        setSecondButtonActive("active");
    } else {
        setSecondButtonActive("not-active");
    }

    setAnswer("");
    setReply("reply")
};

const updateSlideNumberUp = () => {
    if (currentSlide < flashcards.length - 1) {
        const newSlide = currentSlide + 1;

        setCurrentSLide(newSlide);
        onButtonUpdate(newSlide);
    }
};

const updateSlideNumberDown = () => {
    if (currentSlide > 0) {
        const newSlide = currentSlide - 1;

        setCurrentSLide(newSlide);
        onButtonUpdate(newSlide);
    }
};



  const flashcards = [
    {
      question: "What is the sum of 1 + 1",
      answer: "2",
      type:"Addition"
    },
    {
      question: "What is the sum of 2 + 2",
      answer: "4",
      type:"Addition"
    },
    {
      question: "What is the sum of 3 + 3",
      answer: "6",
      type:"Addition"
    },
    {
      question: "What is the sum of 4 + 4",
      answer: "8",
      type:"Addition"
    },
    {
      question: "What is the sum of 5 + 5",
      answer: "10",
      type:"Addition"
    },
    {
      question: "What is the sum of 2 x 2",
      answer: "4",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 4 x 4",
      answer: "16",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 8 x 8",
      answer: "64",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 9 x 9",
      answer: "81",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 10 x 10",
      answer: "100",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 100 x 100",
      answer: "1000",
      type:"Multiplication"
    },
    {
      question: "What is the sum of 1 - 1",
      answer: "0",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 2 - 1",
      answer: "1",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 10 - 5",
      answer: "5",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 20 - 10",
      answer: "10",
      type:"Subtraction"
    }
    ,
    {
      question: "What is the sum of 100 - 50",
      answer: "50",
      type:"Subtraction"
    },
    {
      question: "What is the sum of 2 ÷ 2",
      answer: "1",
      type:"Division"
    },
    {
      question: "What is the sum of 4 ÷ 2",
      answer: "2",
      type:"Division"
    },
    {
      question: "What is the sum of 10 ÷ 2",
      answer: "5",
      type:"Division"
    },
    {
      question: "What is the sum of 24 ÷ 6",
      answer: "4",
      type:"Division"
    }
    

    
  ]

  const [answer, setAnswer] = useState("");
  const [reply, setReply] = useState("reply");

  const onSumbit = () => {
    if (answer == flashcards[currentSlide].answer) {
      setReply("reply-true")
    } else {
      setReply("reply-false")
    }
  }


  return (
    <div className="App">
      <header>
        <h1 className="Title">Basic maths cards!</h1>
        <h2 className="Desc">Take a easier approach learning math with flashcards, for beginners!</h2>
        <h3 className="DeckCount">Number of cards in deck: {flashcards.length}</h3>
      </header>
        <Card key={currentSlide} Question={flashcards[currentSlide].question} Answer={flashcards[currentSlide].answer} type={flashcards[currentSlide].type}/>
        
        <input type="text" placeholder='Enter answer here' onChange={(e) => setAnswer(e.target.value)} className={reply} value={answer}/>
        <button onClick={onSumbit} >Submit Answer</button>
        <div className="slide-buttons">
          <button className={firstButtonActive} type="reset" onClick={updateSlideNumberDown}> &lt; </button>
          <button className={secondButtonActive} type="reset" onClick={updateSlideNumberUp}> &gt;</button>
        </div>
        
    </div>
  )
}

export default App
