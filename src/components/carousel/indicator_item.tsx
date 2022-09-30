import React, { useState, useRef, useEffect } from "react";

const IndicatorItem: React.FC<{
  idx: number;
  mkey: number;
  duration: number;
  click: Function;
}> = (props) => {
  const [percent, setPercent] = useState<number>(0);
  const [step] = useState<number>(props.duration / 10 || 10);
  let itemRef = useRef<VoidFunction>(() => {});
  itemRef.current = () => works();
  const works = (): void => {
    setPercent(percent + 10);
  };

  useEffect(() => {
    if (props.idx !== props.mkey) setPercent(0);
    let id = setInterval(itemRef.current, step);
    return () => clearInterval(id);
  }, [percent, props.idx, props.mkey, step]);
  return (
    <div
      className={`_indicator_item ${props.idx === props.mkey ? "actived" : ""}`}
      onClick={() => props.click(props.mkey)}
    >
      <span
        style={{
          width: `${percent}%`,
          transitionDuration: `${step}ms`,
        }}
      ></span>
    </div>
  );
};

export default IndicatorItem;
