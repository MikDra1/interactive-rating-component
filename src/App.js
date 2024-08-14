import { useState } from "react";
import star from "./images/icon-star.svg";
import illustration from "./images/illustration-thank-you.svg";

export default function App() {
  const [rate, setRate] = useState(null);
  const [isThankMessageOpen, setIsThankMessageOpen] = useState(false)

  function handleThanksMessage() {
    if(!rate) return;
    setIsThankMessageOpen(!isThankMessageOpen)
  }

  return (
    <main className="container">
      <div className={`card ${isThankMessageOpen ? 'display--none' : ''}`}>
        <img src={star} alt="" className="star--icon" />
        <h1>How did we do?</h1>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="rating--options">
      <Button onRate={setRate} rate={rate}>1</Button>
      <Button onRate={setRate} rate={rate}>2</Button>
      <Button onRate={setRate} rate={rate}>3</Button>
      <Button onRate={setRate} rate={rate}>4</Button>
      <Button onRate={setRate} rate={rate}>5</Button>
    </div>

        <button className="submit" onClick={handleThanksMessage}>Submit</button>
      </div>

      <div className={`card card--side ${isThankMessageOpen ? '' : 'display--none'}`}>
        <img src={illustration} alt="" />
        <p className="selection">You selected {rate} out of 5</p>
        <h2>Thank you!</h2>
        <p className="card--side-description">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </main>
  );
}

function Button({ children, onRate, rate }) {
  return (
    <button onClick={() => onRate(+children)} className={`rating--option ${rate === +children ? 'selected' : ''}`}>
      {children}
    </button>
  );
}
