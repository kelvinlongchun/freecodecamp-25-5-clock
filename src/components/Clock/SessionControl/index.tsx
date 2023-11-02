import { useClockContext } from "../../../contexts/ClockContext";
import Control from "../../common/Control";
import "./styles.scss";

const SessionControl = () => {
  const { state, setState } = useClockContext();

  const updateSession = (sessionMin: number) =>
    setState((st) => ({
      ...st,
      sessionLength: sessionMin,
      timeLeft: st.isSession ? sessionMin * 60 : st.timeLeft,
    }));

  const increaseVal: React.MouseEventHandler = () => {
    if (state.sessionLength < 60) {
      updateSession(state.sessionLength + 1);
    }
  };

  const decreaseVal: React.MouseEventHandler = () => {
    if (state.sessionLength > 1) {
      updateSession(state.sessionLength - 1);
    }
  };

  return (
    <Control
      className="session-control"
      type="session"
      length={state.sessionLength}
      increaseVal={increaseVal}
      decreaseVal={decreaseVal}
      isDisabled={false}
    />
  );
};

export default SessionControl;
