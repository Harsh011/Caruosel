import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ Data }) => {
  const DATA_LENGTH = Data.length;
  const [index, setIndex] = useState(0);
  const ref = useRef();

  console.log(index);
  const handleNext = () => {
    setIndex((prev) => {
      if (prev == DATA_LENGTH - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePrev = () => {
    if (index == 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div
      className="container"
      onMouseLeave={() => (ref.current = setInterval(handleNext, 1000))}
      onMouseEnter={() => clearInterval(ref.current)}
    >
      <div className="rightArrow" onClick={handleNext}>
        {">"}
      </div>
      <img src={Data[index]?.download_url} alt={Data[index]?.author} />
      <div className="leftArrow" onClick={handlePrev}>
        {"<"}
      </div>
    </div>
  );
};

export default Carousel;
