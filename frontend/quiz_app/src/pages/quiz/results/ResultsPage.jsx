import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../../../redux/quizSlice';
import Button from '../../../components/Button';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const correctAnswersCount = useSelector((state) => state.quiz.correctAnswersCount);
    const totalQuestions = useSelector((state) => state.quiz.questions.length);

    const handleTryAgain = () => {
        dispatch(resetQuiz());
    };

    return (
        <>
            <div className="flex flex-col text-center p-5 gap-5 md:container mx-auto md:w-2/5">
                <div>
                    <h1 className='text-5xl mb-5'>🎉</h1>
                    <h1 className='font-bold text-3xl'>Quiz Result!</h1>
                    <h1 className='font-bold text-2xl'>Quiz Result!</h1>
                    <h1 className='font-bold text-lg'>Quiz Result!</h1>
                </div>
                <div>
                    <h1>
                        {correctAnswersCount} / {totalQuestions}!
                    </h1>
                    <h3>
                    {correctAnswersCount === totalQuestions 
                        ? '❤️‍🔥 Perfectly done :D ❤️‍🔥' 
                        : correctAnswersCount === 0 
                            ? 'TRY AGAIN!' 
                            : 'Great effort!'
                    }
                    </h3>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        correctAnswersCount === 0 ?
                        <Button name="Try Again!"
                            color="danger"
                            clickable={true}
                            clickFunc={handleTryAgain}
                        /> :
                        <Button
                            name="Try Again?"
                            color="accent"
                            clickable={true}
                            clickFunc={handleTryAgain}
                        /> 
                    }
                    
                    <Button
                        name="Return to feed"
                        color="primary"
                        clickable={true}
                        linkRoute="/"
                        clickFunc={handleTryAgain}
                    />
                </div>
            </div>
        </>
    );
}

export default ResultsPage;