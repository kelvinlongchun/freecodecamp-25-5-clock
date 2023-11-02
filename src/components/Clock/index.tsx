import { useEffect } from "react";
import BreakControl from "./BreakControl";
import SessionControl from "./SessionControl";
import Stop from "./Stop";
import Timer from "./Timer";
import Reset from "./Reset";
import BeepSound from "./BeepSound";
import { useClockContext } from "../../contexts/ClockContext";
import "./styles.scss";

const Clock = () => {
  const { state, setState } = useClockContext();

  useEffect(() => {
    if (state.timeLeft < 0) {
      setState((st) => ({
        ...st,
        isSession: !st.isSession,
        timeLeft: (st.isSession ? st.breakLength : st.sessionLength) * 60,
      }));
    } // eslint-disable-next-line
  }, [state.timeLeft]);

  return (
    <div className="clock">
      <BreakControl />
      <SessionControl />
      <div className="clock__timer" is-session={state.isSession.toString()}>
        <Timer />
        <div className="clock__timer__buttons">
          <Stop />
          <Reset />
        </div>
      </div>
      <BeepSound />
    </div>
  );
};

export default Clock;
