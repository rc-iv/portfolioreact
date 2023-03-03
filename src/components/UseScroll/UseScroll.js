import react, { useRef } from "react";

const UseScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () => elRef.current.scrollIntoView();

  return [executeScroll, elRef];
};

export default UseScroll;