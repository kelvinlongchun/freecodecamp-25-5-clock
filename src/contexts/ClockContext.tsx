import { createContext, useContext, useState } from "react";
import type { FC, ReactNode } from "react";

interface State {
  breakLength: number;
  sessionLength: number;
  timeLeft: number;
  isSession: boolean;
  interval: NodeJS.Timer | null;
}

interface ContextType {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const INITIAL_STATE: State = {
  breakLength: 5,
  sessionLength: 25,
  timeLeft: 25 * 60,
  isSession: true,
  interval: null,
};

const ClockContext = createContext<ContextType | null>(null);

const ClockContextWrapper: FC<{ children: ReactNode }> = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <ClockContext.Provider value={{ state, setState }}>
      {props.children}
    </ClockContext.Provider>
  );
};

const useClockContext = () => useContext(ClockContext) as ContextType;

export default ClockContextWrapper;
export { useClockContext, INITIAL_STATE };
