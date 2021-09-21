import { useState } from "react";
//styles
import "./App.css";
//components
import Section from "./components/Section/Section";
import Container from "./components/Container";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

const App = function App() {
  const options = ["good", "neutral", "bad"];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const positivePercentage = () => {
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
          <FeedbackOptions options={options} handleClick={handleClick} />
        </Section>

        <Section>
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        </Section>
      </Container>
    </div>
  );
};
export default App;
