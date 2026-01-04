import { useEffect, useRef } from "react";

function usePreviousDay(currentDay) {
  const ref = useRef();

  useEffect(() => {
    ref.current = currentDay;
  }, [currentDay]);

  return ref.current;
}

export default usePreviousDay;
