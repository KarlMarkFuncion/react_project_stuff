
import PropTypes from 'prop-types';

const Answer = ({ content, isActive, isCorrect, isWrong, onClick }) => {
    let className = "border border-b-4 px-3 py-5 rounded-md cursor-pointer";
    if (isActive) className += " border-yellow-500 text-yellow-500";
    if (isCorrect) className += " bg-green-500 border-green-700 text-white";
    if (isWrong) className += " bg-red-500 border-red-700 text-white";

    return (
        <div className={className} onClick={onClick}>
            {content}
        </div>
    );
};

Answer.propTypes = {
    content: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isCorrect: PropTypes.bool,
    isWrong: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Answer;