import PropTypes from 'prop-types';

const Answer = ({ content, isActive, isCorrect, isWrong, onClick }) => {
    let className = "border border-b-4 px-3 py-5 rounded-md cursor-pointer";

    // Check if the answer is correct or wrong first
    if (isCorrect) {
        className += " bg-green-500 border-green-700 text-white";
    } else if (isWrong) {
        className += " bg-red-500 border-red-700";
    } else if (isActive) {
        // Only add active styling if the answer is neither correct nor wrong
        className += " border-yellow-500 text-yellow-800 font-black";
    }

    // Modify the handleClick function to conditionally execute onClick
    const handleClick = () => {
        if (!isCorrect && !isWrong) {
            onClick();
        }
    };

    return (
        <div className={className} onClick={handleClick}>
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
