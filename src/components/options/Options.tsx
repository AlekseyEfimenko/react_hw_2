import css from './Options.module.css'

const Options = ({ onUpdate, isReset, onReset }) => {
  
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