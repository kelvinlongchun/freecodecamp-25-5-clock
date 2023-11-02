import { useClockContext } from "../../../contexts/ClockContext";
import Control from "../../common/Control";
import "./styles.scss";

const BreakControl = () => {
  const { state, setState } = useClockContext();

  const updateBreak = (breakMin: number) =>
    setState((st) => ({
      ...st,
      breakLength: breakMin,
      timeLeft: st.isSession ? st.timeLeft : breakMin * 60,
    }));

  const increaseVal: React.MouseEventHandler = () => {
    if (state.breakLength < 60) {
      updateBreak(state.breakLength + 1);
    }
  };

  const decreaseVal: React.MouseEventHandler = () => {
    if (state.breakLength > 1) {
      updateBreak(state.breakLength - 1);
    }
  };

  return (
    <Control
      className="break-control"
      type="break"
      length={state.breakLength}
      increaseVal={increaseVal}
      decreaseVal={decreaseVal}
      isDisabled={false}
    />
  );
};

export default BreakControl;
