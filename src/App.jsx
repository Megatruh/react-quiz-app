import { useState } from 'react';
import StartScreen from './components/StartScreen';
import './App.css';

function App(){
  // State untuk mengontrol fase aplikasi ('START', 'ACTIVE', atau RESULT)
  const [quizStage, setQuizStage] = useState('START');

  // fungsi untuk mengubah state agar pindah ke layar quis
  const handleStartQuiz = ()=>{
    setQuizStage('ACTIVE');
  };

  return (
    <div className="app-container">
      {/* Jika state bernilai 'START', tampilkan StartScreen*/} 
      {quizStage == 'START' && (
        <StartScreen onStart={handleStartQuiz}/>
      )}

      {/* Jika state bernilai 'ACTIVE', tampilkan placeholder ini untuk sementara */}
      {quizStage == 'ACTIVE' && (
        <div style={{ textAlign:'center' }} className="active-screen">
          <h2>Mode Kuis Aktif 🚀</h2>
          <p>Komponen Card akan kita buat di Tahap 3.</p>
        </div>
      )}
    </div>
  );
}

export default App;