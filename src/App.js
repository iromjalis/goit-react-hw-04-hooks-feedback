import { useState } from "react";
//styles
import "./App.css";
//components
import Section from "./components/Section/Section";
import Container from "./components/Container";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

const App = function App() {
  // Объявление новой переменной состояния «count»
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return total;
  };

  const positivePercentage = () => {
    const total = countTotalFeedback();
    const posPercentage = Math.round(Number((good / total) * 100));
    return posPercentage;
  };
  const handleClick = (e) => {
    const value = e.target.textContent;
    console.log("value: ", value);
    switch (value) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        console.log("good: ", good);
        console.log("posPercentage: ", positivePercentage());

        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Container>
        <Section title="Feedback:">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            handleClick={handleClick}
          />
        </Section>

        <Section>
          <Statistics
            title="Statistics"
            state={(good, neutral, bad)}
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      </Container>
    </div>
  );
};
export default App;
