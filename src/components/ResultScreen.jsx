function ResultScreen({ score, totalQuestions, userHistory, onRestart }){    
    // Cegah prensentase minus
    const finalResult = Math.max(0, score);
    const percentage = Math.round((finalResult/totalQuestions)*100);

    return (
        <div className="result-screen">
            <h1>Kuis Selesai! 🎉</h1>

            <div className="score-board">
                <h2>Score Akhir Kamu</h2>
                <div className="score-circle">
                    <span className="score-percentage">
                        {percentage}%
                    </span>
                </div>
                <p>{finalResult} dari {totalQuestions} jawaban benar</p>
            </div>

            <div className="history-container">
                <h3>Ringkasan Jawaban</h3>
                <ul className="history-list">
                    {userHistory.map((item,index)=>(
                        <li
                            key={index}
                            className={`history-item ${item.isCorrect ? 'correct' : 'wrong' }`}
                        >
                            <p className="history-question">
                                <strong>Q{index+1}</strong> {item.question}
                            </p>

                            <div className="history-details">
                                <p>
                                    Jawabanmu : <span className={item.status === 'TIMEOUT' ? 'timeout-text' : '' }>{item.selected}</span>
                                </p>                                
                                {!item.isCorrect && (
                                    <p className="correct-answer-text">Jawaban yang benar : {item.correct}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <button 
                className="btn-primary btn-restart" 
                onClick={onRestart}
            >
                Main Lagi ?        
            </button>
        </div>
    );
}

export default ResultScreen;