import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        {
            "QuestionID": 1,
            "QuizID": 101,
            "QuestionContent": "What is the capital of France?",
            "Answers": [
                {
                    "AnswerID": 1,
                    "AnswerContent": "Paris",
                    "isCorrect": true
                },
                {
                    "AnswerID": 2,
                    "AnswerContent": "London",
                    "isCorrect": false
                },
                {
                    "AnswerID": 3,
                    "AnswerContent": "Berlin",
                    "isCorrect": false
                },
                {
                    "AnswerID": 8,
                    "AnswerContent": "France",
                    "isCorrect": true
                },
            ]
        },
        {
            "QuestionID": 2,
            "QuizID": 101,
            "QuestionContent": "What is 2 + 2?",
            "Answers": [
                {
                    "AnswerID": 4,
                    "AnswerContent": "3",
                    "isCorrect": false
                },
                {
                    "AnswerID": 5,
                    "AnswerContent": "4",
                    "isCorrect": true
                },
                {
                    "AnswerID": 6,
                    "AnswerContent": "5",
                    "isCorrect": false
                },
                {
                    "AnswerID": 7,
                    "AnswerContent": "9",
                    "isCorrect": true
                },
            ]
        }
    ],
    currentQuestionIndex: 0,
    activeAnswer: null,
    isAnswerChecked: false,
    isAnswerCorrect: null,
    correctAnswersCount: 0,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setActiveAnswer: (state, action) => {
            state.activeAnswer = action.payload;
        },
        checkAnswer: (state) => {
            const isCorrect = state.questions[state.currentQuestionIndex].Answers[state.activeAnswer].isCorrect;
            state.isAnswerCorrect = isCorrect;
            state.isAnswerChecked = true;
            if (isCorrect) {
                state.correctAnswersCount += 1;
            }
        },
        nextQuestion: (state) => {
            state.activeAnswer = null;
            state.isAnswerChecked = false;
            state.isAnswerCorrect = null;
            state.currentQuestionIndex += 1;
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.activeAnswer = null;
            state.isAnswerChecked = false;
            state.isAnswerCorrect = null;
            state.correctAnswersCount = 0;
        },
    },
});

export const { setActiveAnswer, checkAnswer, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;