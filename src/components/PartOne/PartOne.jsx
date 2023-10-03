import { Parallax } from "react-parallax";
import bgimage from "../../img/moon.jpg";
import "./PartOne.css";

export const PartOne = () => {
  return (
    <Parallax className="P1image" bgImage={bgimage} strength={800}>
      <div className="P1content">
        <span className="P1spantext">
          <h1>
            The <br />
            Moon
          </h1>
        </span>
      </div>
    </Parallax>
  );
};

// this is the moon
// sometimes the moon looks like this too
//the moon can take all these forms, likes to hide doesn't it
// look at this man, hes been to the moon
// sometimes the moon does whats called a pro gamer move and blocks the sun
// we also have tempoary moons
// we have ghost moons  or a dust cloud called Kordylewski clouds
// honourable mention , earth from the mooon
