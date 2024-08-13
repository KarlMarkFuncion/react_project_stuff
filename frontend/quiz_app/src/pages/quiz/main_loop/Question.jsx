import PropTypes from "prop-types";

const Question = ({ content }) => {
    return (
        <div className="text-xl font-bold">
            {content}
        </div>
    );
};

Question.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Question;