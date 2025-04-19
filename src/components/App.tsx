import { useEffect, useState } from 'react';
import './App.css';
import Description from './description/Description';
import Options from './options/Options';
import Feedback from './feedback/Feedback';
import Notification from './notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storageFeedback = window.localStorage.getItem('feedback');
    
    if (storageFeedback !== null) {
      return JSON.parse(storageFeedback);
    }
  
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  })

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback])

  const updateFeedback = (feedbackType: string) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    });
  }

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} isReset={totalFeedback > 0} onReset={resetFeedback} />
      {totalFeedback > 0
        ? <Feedback {...feedback} total={totalFeedback} />
        : <Notification />}
    </>
  );
}

export default App;
