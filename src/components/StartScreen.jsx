function StartScreen({ onStart }){
    return(
        <div className="start-screen">
            <h1>React Mastery Quiz</h1>
            <p>uji pemahamanmu mengenai fundamental Reac. Pilih jawaban yang paling tepat untuk setiap pertanyaan. Kamu siap ?</p>
            <button 
                className="btn-primary"
                onClick={onStart}
            >
                Start Quiz
            </button>
        </div>
    );
}

export default StartScreen;