import { useClockContext } from "../../../contexts/ClockContext";

const Stop = () => {
  const { state, setState } = useClockContext();

  const handleClick = () => {
    if (state.interval === null) {
      const interval = setInterval(
        () => setState((st) => ({ ...st, timeLeft: st.timeLeft - 1 })),
        1000
      );
      setState((st) => ({ ...st, interval: interval }));
    } else {
      clearInterval(state.interval);
      setState((st) => ({ ...st, interval: null }));
    }
  };

  return (
    <button id="start_stop" onClick={handleClick}>
      Start
    </button>
  );
};

export default Stop;
