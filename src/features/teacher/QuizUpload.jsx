import { useState } from 'react';
import { Button } from '../../components/Button';
import { FormField } from '../../components/FormField';
import { supabase } from '../../api/supabaseClient';

const QuizUpload = () => {
  const [title, setTitle] = useState('');

  const handleUpload = async () => {
    const { error } = await supabase.from('quizzes').insert({ title });
    if (error) console.error('Upload error:', error.message);
  };

  return (
    <div>
      <h1>Upload Quiz</h1>
      <FormField label="Quiz Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default QuizUpload;
