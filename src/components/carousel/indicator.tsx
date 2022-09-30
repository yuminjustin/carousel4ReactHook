import React, { useState } from "react";
import IndicatorItem from "./indicator_item";
import { numberArray } from "./tool";

const Indicator: React.FC<{
  num: number;
  idx: number;
  duration: number;
  click: Function;
  play: boolean;
}> = (props) => {
  const [num] = useState<Array<number>>(numberArray(props.num));
  return (
    <div className="_indicator">
      {num.map((i: number) => {
        return (
          <IndicatorItem
            key={i}
            mkey={i}
            idx={props.idx}
            duration={props.duration}
            click={props.click}
            play={props.play}
          />
        );
      })}
    </div>
  );
};

export default Indicator;
