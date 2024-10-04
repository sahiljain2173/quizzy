import { useEffect, useState } from 'react';
import { supabase } from '../../api/supabaseClient';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const { data, error } = await supabase.from('quizzes').select('*');
      if (error) console.error(error);
      setQuizzes(data || []);
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h1>Available Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
