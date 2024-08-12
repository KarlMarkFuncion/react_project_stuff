import CustomTextArea from "../../components/CustomTextArea";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import CustomSelectInput from "../../components/CustomSelectInput";
import { Link } from "react-router-dom";
import AnswerGroup from "./AnswerGroup";
import { useState } from "react";

const CreateQuizPage = () => {
    const dummyData = [
        { value: "Theology", emojiIcon: "✝" },
        { value: "Science", emojiIcon: "🧪" },
        { value: "Entertainment", emojiIcon: "🎭" },
        { value: "Geography", emojiIcon: "🌏" },
        { value: "History", emojiIcon: "📙" },
        { value: "Just for Fun", emojiIcon: "😄" },
    ];

    // State for managing the list of questions
    const [questionsList, setQuestionsList] = useState([]);

    // State for managing the current question form inputs
    const [currentQuestion, setCurrentQuestion] = useState({
        content: "",
        correctAnswer: "",
        answer1: "",
        answer2: "",
        answer3: "",
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentQuestion({
            ...currentQuestion,
            [name]: value,
        });
    };

    // Handle deleting a question
    const deleteQuestion = (index) => {
        const updatedQuestionsList = questionsList.filter((_, i) => i !== index);
        setQuestionsList(updatedQuestionsList);
    };


    // Handle adding a new question
    // Handle adding a new question
    const addQuestion = () => {
        const { content, correctAnswer, answer1, answer2, answer3 } = currentQuestion;

        // Validate the current question
        if (!content || !correctAnswer || !answer1 || !answer2 || !answer3) {
            setError("All fields are required.");
            return;
        }

        if (questionsList.length < 20) {
            setQuestionsList([...questionsList, currentQuestion]);
            // Reset the form inputs
            setCurrentQuestion({
                content: "",
                correctAnswer: "",
                answer1: "",
                answer2: "",
                answer3: "",
            });
            setError(""); // Clear any previous error
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission to the backend
    };

    return (
        <>
            <div className="sm:container container mx-auto p-5">
                <div className="mb-5">
                    <h2 className="text-2xl font-bold">Create a Quiz</h2>
                    <Link to="/" className="underline text-gray-500">
                        Return to quiz feed
                    </Link>
                </div>

                {/* 
                    Make thing like this ideally:
                    1. Each major form is its own component
                    2. Use Redux to keep track of data and store on Session so it persists even when refreshed
                    3. All data are passed through separate URL and are their own requests
                */}

                <form className="grid md:grid-cols-3 gap-5" onSubmit={handleSubmit}>
                    <div className="mb-5 flex flex-col">
                        <h3 className="font-bold">Quiz info</h3>
                        <CustomInput name="Title" label="Quiz Title" type="text" required={true} />
                        <CustomSelectInput name="Category" label="Category" values={dummyData} />
                        <CustomInput name="Title" label="Quiz Title" type="text" required={true} />
                        <CustomTextArea name="QuizDescription" label="Description" />
                    </div>

                    <div className="mb-5 flex flex-col">
                        <h3 className="font-bold">Question Form</h3>

                        <div className="flex-grow">
                            {/* INTENDED OUTCOME V3:
                                1. There will be a minimum of 3 questions on creation of a quiz
                                2. User can add a question by pressing the "Add question" button
                                3. There will be a maximum of 20 questions
                            */}
                            <CustomTextArea
                                name="content"
                                label="Question content"
                                value={currentQuestion.content}
                                onChange={handleInputChange}
                            />

                            {/* INTENDED OUTCOME V2:
                                1. There will always be a minimum of 2 answer groups on the page
                                2. One of the answer groups will be indicated as "Correct answer"
                                3. The user can add answers to a maximum of 4 total answers including the correct answers.
                                4. User can remove the two of the four answers.
                            */}
                            <CustomInput
                                name="correctAnswer"
                                label="Correct answer"
                                type="text"
                                required={true}
                                value={currentQuestion.correctAnswer}
                                onChange={handleInputChange}
                            />
                            <CustomInput
                                name="answer1"
                                label="Answer #1"
                                type="text"
                                required={true}
                                value={currentQuestion.answer1}
                                onChange={handleInputChange}
                            />
                            <CustomInput
                                name="answer2"
                                label="Answer #2"
                                type="text"
                                required={true}
                                value={currentQuestion.answer2}
                                onChange={handleInputChange}
                            />
                            <CustomInput
                                name="answer3"
                                label="Answer #3"
                                type="text"
                                required={true}
                                value={currentQuestion.answer3}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Add question button */}
                        <div className="mt-auto rounded-xl border border-b-4 px-5 py-2 text-center cursor-pointer"
                            onClick={addQuestion}>
                            Add question
                        </div>
                    </div>

                    {/* V2 - make another conditional rendering in the Button component that turns the div-button into a button-submit. */}
                    <div className="max-h-full overflow-y-auto flex flex-col">
                        <h3 className="font-bold mb-2">List of Questions</h3>
                        <div className="grid gap-2">
                            {questionsList &&
                                questionsList.map((question, index) => {
                                    return (
                                        <div key={index} className="border rounded-md px-3 py-2 flex gap-3">
                                            <div className="w-full"> 
                                                <p className="font-semibold">{question.content}</p>
                                                <p className="text-gray-500">Correct answer: {question.correctAnswer}</p>
                                            </div>
                                            <span className="text-gray-500">view</span>
                                            <span className="text-red-500 underline cursor-pointer" onClick={() => deleteQuestion(index)}>delete</span>
                                        </div>
                                    );
                                })}
                        </div>
                        {/* Submit button */}
                        <button className="mt-auto rounded-xl border border-b-4 px-5 py-2 w-full text-center" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateQuizPage;