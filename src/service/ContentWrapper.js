import React, { useRef, useState, useEffect, createRef } from "react";
import PageScroller from "../components/PageScroller";

const ContentWrapper = ({ children, showDots = true }) => {
  const [active, setActive] = useState(0);
  const contentArray = React.Children.toArray(children);
  const refArray = Array.from({ length: contentArray.length }, () =>
    createRef()
  );

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      refArray.map((ref, index) => {
        if (active === index) {
          setActive(index + 1);
        }
        return active;
      });
    } else if (e.deltaY < 0) {
      refArray.map((ref, index) => {
        if (active === index) {
          setActive(index - 1);
        }
        return active;
      });
    }
  };

  useEffect(() => {
    if (active < 0) {
      setActive(0);
    } else if (active > refArray.length - 1) {
      setActive(refArray.length - 1);
    }
  }, [active]);
  return (
    <>
      <PageScroller
        showDots={showDots}
        refArray={refArray}
        active={active}
        setActive={setActive}
      ></PageScroller>
      <div onWheel={handleWheel}>
        {contentArray.map((content, index) => {
          return <div ref={refArray[index]}>{content}</div>;
        })}
      </div>
    </>
  );
};

export default ContentWrapper;
