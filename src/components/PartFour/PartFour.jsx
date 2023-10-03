import { Parallax } from "react-parallax";
import bgimage from "../../img/moon-man-walking.jpg";
import "./PartFour.css";

export const PartFour = () => {
  return (
    <Parallax className="P4image" bgImage={bgimage} strength={200}>
      <div className="P4content">
        <span>
          <h4>
            First crew lunar landing in 1969
            <br />
            <div style={{ color: "gray" }}>Apollo 11 mission</div>
          </h4>
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
