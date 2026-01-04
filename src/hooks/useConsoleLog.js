import { useEffect } from "react";

function useConsoleLog(logName, arg) {
  useEffect(() => {
    console.log(`${logName}: ${arg}`);
  }, [logName, arg]);
}

export default useConsoleLog;
