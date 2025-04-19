import css from './Options.module.css';

type Props = {
  onUpdate: (a: string) => void;
  isReset: boolean;
  onReset: () => void;
}

const Options: React.FC<Props> = ({ onUpdate, isReset, onReset }) => {
  
  return (
    <div className={css.options}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {isReset && <button onClick={onReset}>Reset</button>}
    </div>
  )
}

export default Options;