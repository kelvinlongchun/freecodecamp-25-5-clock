import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

interface Props {
  className?: string;
  type: string;
  length: number;
  increaseVal: React.MouseEventHandler;
  decreaseVal: React.MouseEventHandler;
  isDisabled: boolean;
}

const Control: FC<Props> = (props) => {
  const getText = (type: string) =>
    type[0].toUpperCase() + type.slice(1) + " Length";

  const getTextId = (type: string) => type + "-label";

  const getDecrementId = (type: string) => type + "-decrement";

  const getIncrementId = (type: string) => type + "-increment";

  const getLengthId = (type: string) => type + "-length";

  return (
    <div className={`control ${props.className}`}>
      <h2 id={getTextId(props.type)}>{getText(props.type)}</h2>
      <div className="control__buttons">
        <button
          id={getDecrementId(props.type)}
          type="button"
          title="down"
          onClick={props.decreaseVal}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p id={getLengthId(props.type)}>{props.length}</p>
        <button
          id={getIncrementId(props.type)}
          type="button"
          title="up"
          onClick={props.increaseVal}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default Control;
