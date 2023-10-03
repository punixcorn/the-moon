import "./App.css";
import { PartOne } from "./components/PartOne/PartOne";
import { PartTwo } from "./components/PartTwo/PartTwo";
import { PartThree } from "./components/PartThree/PartThree";
import { PartFour } from "./components/PartFour/PartFour";
import { PartFive } from "./components/PartFive/PartFive";
import { PartSix } from "./components/PartSix/PartSix";
import { PartSeven } from "./components/PartSeven/PartSeven";
import { Bar } from "./components/Bar/Bar";

function App() {
  return (
    <>
      <PartOne />
      <Bar
        header={'"Moon"'}
        text={
          'Not soo fun fact: Our Moon doesn\'t technically have a name Since the term "Moon" is more a classifier than a name. Earth\'s only natural satellite is simply called "Moon" because people didn\'t know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1609'
        }
      />
      <PartTwo />
      <Bar
        header={"Moon Phases"}
        text={
          " The Moon likes to hide in different ways throughout the month. Below is a sneak peek of Her doing that "
        }
      />
      <PartThree />
      <Bar
        header={"Humans & The Moon"}
        text={"The only planet Humans have been able step on"}
      />
      <PartFour />
      <Bar
        header={"Moon & Sun"}
        text={
          "sometimes the moon does whats called a pro gamer move and comes imbetween the sun and earth"
        }
      />
      <PartFive />
      <Bar
        header={"Moon's'"}
        text={"Yes, At one point in time we had more than 1 moon"}
      />
      <PartSix />
      <Bar
        header={"Earth From The Moon"}
        text={"The Earth also likes to hide from the Moon"}
      />
      <PartSeven />
      <Bar header={"© Potato 2023"} text={"The moon in 7 parts"} />
    </>
  );
}

export default App;
