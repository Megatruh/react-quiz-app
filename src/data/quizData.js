export const quizData=[
    {
        id:1,
        question:"Manakah yang merupakah hook dasar di React untuk mengelola state ?",
        options:["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer:"useState",
    },
    {
        id:2,
        question:"Kapan useEffect dengan array dependensi kosong [] akan dijalankan ?",
        options:[
            "Setiap kali komponen re-render", 
            "Hanya sekali setelah komponen selesai mount", 
            "Saat komponen unmount saja", 
            "Saat state dalam komponen berubah"
        ],
        correctAnswer:"Hanya sekali setelah komponen selesai mount",
    },
    {
        id:3,
        question:"Apa fungsi utama dai syntax JSX di React ?",
        options:[
            "Menulis CSS murni di dalam Javascript", 
            "Menggabungkan HTML dan logika Javascript secara deklaratif", 
            "Menjalankan query langsung ke database SQL", 
            "Menggantikan peran dari Vite"
        ],
        correctAnswer:"Menggabungkan HTML dan logika Javascript secara deklaratif",
    },
];