import { MutableRefObject } from "react";

export const useRefScroll = (refContainer: MutableRefObject<HTMLElement>) => {
  function horizontalScroll(direction: "left" | "right", distance: number) {
    let scrollAmount = 0;
    const step = 50;
    const slideTimer = setInterval(() => {
      if (direction === "left") {
        refContainer.current.scrollLeft -= step;
      } else {
        refContainer.current.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, 30);
  }

  function verticalScroll(direction: "top" | "bottom", distance: number) {
    let scrollAmount = 0;
    const step = 30;
    const slideTimer = setInterval(() => {
      if (direction === "top") {
        refContainer.current.scrollTop -= step;
      } else {
        refContainer.current.scrollTop += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, 30);
  }

  function scrollLeft(distance?: number) {
    horizontalScroll(
      "left",
      distance ||
        refContainer.current.offsetWidth - refContainer.current.offsetLeft
    );
  }

  function scrollRight(distance?: number) {
    horizontalScroll(
      "right",
      distance ||
        refContainer.current.offsetWidth - refContainer.current.offsetLeft
    );
  }

  function scrollTop(distance?: number) {
    verticalScroll(
      "top",
      distance ||
        refContainer.current.offsetHeight - refContainer.current.offsetTop
    );
  }

  function scrollBottom(distance?: number) {
    verticalScroll(
      "bottom",
      distance ||
        refContainer.current.offsetHeight - refContainer.current.offsetTop
    );
  }

  function scrollRightEnd() {
    horizontalScroll("right", refContainer.current.scrollWidth);
  }

  function scrollLeftEnd() {
    horizontalScroll("left", refContainer.current.scrollWidth);
  }

  function scrollTopEnd() {
    verticalScroll("top", refContainer.current.scrollTop);
  }

  function scrollBottomEnd() {
    verticalScroll("bottom", refContainer.current.scrollHeight);
  }

  function scrollTo(x: number, y: number) {
    refContainer.current.scrollTo({ left: x, top: y });
  }

  return {
    horizontalScroll,
    verticalScroll,
    scrollLeft,
    scrollRight,
    scrollTop,
    scrollBottom,
    scrollRightEnd,
    scrollLeftEnd,
    scrollTopEnd,
    scrollBottomEnd,
    scrollTo,
  };
};
