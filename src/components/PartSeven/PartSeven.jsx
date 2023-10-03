import { Parallax } from "react-parallax";
import bgimage from "../../img/moon-earth.jpg";
import "./PartSeven.css";

export const PartSeven = () => {
  return (
    <Parallax className="P7image" bgImage={bgimage} strength={800}>
      <div className="P7content">
        <span>
          <h4>
            Earth Photo by Apollo 11 spacecraft
            <br />
            July 20, 1969 <br />
            Pub. June 28,2018
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
