function QuizCard({
    cardData,
    onAnswerClick,
    selectedAnswer,
    isAnswered,
    onNext,
    isLastQuestion
}){
    return (
        <div className="quiz-card">
            {/* teks pertanyaan */}
            <h2 className="question-text">
                {cardData.question}
            </h2>

            {/* daftar pilhan ganda */}
            <div className="options-container">
                {cardData.options.map((option, index) => {
                    // Logika penentuan class warna button setelah user menjawab
                    let buttonClass = "btn-option";
                    if(isAnswered){
                        if(option === cardData.correctAnswer){
                            buttonClass += " correct";//Hijau jika jawaban benar
                        } else if(option === selectedAnswer){
                            buttonClass += " wrong"// Merah jika jawaban salah
                        } else{
                            buttonClass += " disable";// Redup untuk opsi lainya
                        }
                    }

                    return (
                        <button
                            key={index}
                            className={buttonClass}
                            onClick={()=>onAnswerClick(option)}
                            disabled={isAnswered} // Kunci tombol jika sudah menjawab
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            {/* Tombol navigasi keluar setelah klik jawaban */}
            {isAnswered && (
                <button className="btn-next" onClick={onNext}>
                    {isLastQuestion ? "See Result" : "Next Question →"}
                </button>
            )}
        </div>
    );
}

export default QuizCard;