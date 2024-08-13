import PropTypes from 'prop-types';
import Answer from './Answer';
import Question from './Question';

const Quiz = ({ question, activeAnswer, isAnswerChecked, isAnswerCorrect, onAnswerClick }) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <Question content={question.QuestionContent} />
            <div className="grid md:grid-cols-1 grid-cols-2 gap-3">
                {question.Answers.map((answer, index) => (
                    <Answer
                        key={answer.AnswerID}
                        content={answer.AnswerContent}
                        isActive={activeAnswer === index}
                        isCorrect={isAnswerChecked && isAnswerCorrect && activeAnswer === index}
                        isWrong={isAnswerChecked && !isAnswerCorrect && activeAnswer === index}
                        onClick={() => onAnswerClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

Quiz.propTypes = {
    question: PropTypes.object.isRequired,
    activeAnswer: PropTypes.number,
    isAnswerChecked: PropTypes.bool.isRequired,
    isAnswerCorrect: PropTypes.bool,
    onAnswerClick: PropTypes.func.isRequired,
};

export default Quiz;