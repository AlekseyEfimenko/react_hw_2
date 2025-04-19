import React from "react";
import css from './Feedback.module.css';

type Props = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
}

const Feedback:  React.FC<Props> = (values: Props) => {
  const { good, neutral, bad, total } = values;

  const positiveFeedback = Math.round((good / total) * 100);

  return (
    <ul className={css.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  )
}

export default Feedback;