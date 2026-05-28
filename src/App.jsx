import { useState } from 'react';
import { quizData } from './data/quizData';
import StartScreen from './components/StartScreen';
import QuizCard from './components/QuizCard';
import './App.css';

function App(){
  // 1. Kumpulan state utama : 
  const [quizStage, setQuizStage] = useState('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  
  // Variabel Pembantu
  const currentCard = quizData[currentQuestionIndex];
  const totalQuestions = quizData.length;
  const isAnswered = selectedAnswer !== null;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;


  // 2. Fungsi untuk memulai quiz
  const handleStartQuiz = ()=>{
    setQuizStage('ACTIVE');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setUserHistory([]);
  };


  // 3. Fungsi Logika klik jawaban
  const handleAnswerClick = (chosenOption) =>{
    if(isAnswered) return;// Mencegah piihan double

    setSelectedAnswer(chosenOption);

    // Cek apakah jawaban benar 
    const isCorrect = chosenOption === currentCard.correctAnswer;
    if(isCorrect){
      setScore((previewScore) => previewScore +1);
    }

    // Catat history untuk keperluan Result Screen di tahap 5
    setUserHistory((previewHistory) => [
      ...previewHistory,
      {
        question: currentCard.question,
        selected: chosenOption,
        correct: currentCard.correctAnswer,
        isCorrect: isCorrect,
      }
    ]);
  };


  // 4. Fungsi navigasi ke pertanyaan selanjutnya 
  const handleNextQuestion = () => {
    if(isLastQuestion){
      setQuizStage('RESULT');// pindah layar akhir jika pertanyaan sudah habis
    } else {
      setCurrentQuestionIndex((previewIndex) => previewIndex + 1);
      setSelectedAnswer(null);
    }
  };
  

  return (
    <div className="app-container">
      {/* Fase 1 : Halaman awal */}
      {/* Jika state bernilai 'START', tampilkan StartScreen*/} 
      {quizStage == 'START' && (
        <StartScreen onStart={handleStartQuiz}/>
      )}

      {/* Fase 2 : Kuis Berjalan */}
      {/* Jika state bernilai 'ACTIVE', tampilkan placeholder ini untuk sementara */}
      {quizStage == 'ACTIVE' && (
        <div className="active-screen">
          {/* Header Progres Sederhana */}
          <div className="header-active-screen">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>

          <QuizCard
            cardData={currentCard}
            onAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
            isAnswered={isAnswered}
            onNext={handleNextQuestion}
            isLastQuestion={isLastQuestion}
          />
        </div>
      )}

      {/* Fase 3 : Halaman Akhir (Placeholder sementara) */}
      {quizStage === 'RESULT' && (
        <div className="start-screen">
          <h2>Kuis Selesai! 🎉</h2>
          <p>
            Skor Kamu : <strong style={{ color:'var(--accent-primary)' }}>{Math.round((score / totalQuestions) * 100)}/100</strong>
          </p>
          <div className="btn-primary" onClick={handleStartQuiz}>
            Main Lagi ?
          </div>
        </div>
      )}

    </div>
  );
}

export default App;