import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import Quiz from './Quiz';
import './quiz.css';
import GrayLink from '../../../components/GrayLink';
import { setActiveAnswer, checkAnswer, nextQuestion } from '../../../redux/quizSlice';
import ResultsPage from '../results/ResultsPage';

const QuizPage = () => {
    const dispatch = useDispatch();
    const { questions, currentQuestionIndex, activeAnswer, isAnswerChecked, isAnswerCorrect } = useSelector((state) => state.quiz);

    const handleAnswerClick = (index) => {
        dispatch(setActiveAnswer(index));
    };

    const handleCheckClick = () => {
        if (activeAnswer === -1) return;
        dispatch(checkAnswer());
    };

    const handleNextQuestion = () => {
        dispatch(nextQuestion());
    };

    useEffect(() => {
        if (isAnswerChecked) {
            // No need for timeout anymore
        }
    }, [isAnswerChecked, dispatch]);

    if (currentQuestionIndex >= questions.length) {
        // Change to redirect to Results page route.
        return <ResultsPage />;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            <div className="md:container md:mx-auto md:w-1/2">
                <div className="p-5 w-full flex flex-col gap-5">
                    <GrayLink linkRoute="/quiz/:id" name="Exit Quiz" />
                    <Quiz
                        question={currentQuestion}
                        activeAnswer={activeAnswer}
                        isAnswerChecked={isAnswerChecked}
                        isAnswerCorrect={isAnswerCorrect}
                        onAnswerClick={handleAnswerClick}
                    /> 
                </div>
            </div>
            <div className="border-t p-5">
                <div className="md:container md:w-1/2 md:mx-auto flex md:flex-row flex-col md:gap-3 gap-4 justify-end">
                    <div className="md:w-40">
                        <Button
                            name={isAnswerChecked ? "Continue" : "Check"}
                            color={isAnswerChecked ? (isAnswerCorrect ? "success" : "danger") : "primary"}
                            clickable={true}
                            clickFunc={isAnswerChecked ? handleNextQuestion : handleCheckClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizPage;