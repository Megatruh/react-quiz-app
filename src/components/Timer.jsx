import { useEffect } from "react";

function Timer({timerLeft, setTimeLeft, isAnswerd, onTimeout}){
    useEffect(()=>{
        // jika user sudah menjawab, hentikan timer (jangan jalankan interval)
        if (isAnswerd) return;

        // Jika waktu habis pemicu fungsi timeout dari App.jsx
        if (timerLeft === 0) {
            onTimeout();
            return;
        }

        // jalankan interval setiap satu detik (1000 ms)
        const intervalId = setInterval(()=>{
            setTimeLeft((prevTime) => prevTime -1);
        }, 1000);

        // Fungsi clean up untuk menghapus interval saat komponen unmount/re-render
        return () => {
            clearInterval(intervalId);
        };
    }, [timerLeft, isAnswerd, setTimeLeft, onTimeout]);

    // Mengubah format timer menjadi MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    };

    // Tentukan warna timer, kalau kritis (< 10 detik) warnanya menjadi merah
    const timerClass = timerLeft <= 10 ? "timer-text critical":"timer-text";

    return (
        <div className="timer-container">
            <span className="timer-label"></span>
            <span className={timerClass}>{formatTime(timerLeft)}</span>
        </div>
    );
}

export default Timer;