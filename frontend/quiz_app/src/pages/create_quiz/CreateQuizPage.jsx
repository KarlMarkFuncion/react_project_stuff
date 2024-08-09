import CustomTextArea from "../../components/CustomTextArea";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import CustomSelectInput from "../../components/CustomSelectInput";
import { Link } from "react-router-dom";


const CreateQuizPage = () =>{

    const dummyData = [
        {value: "Theology", emojiIcon: "✝"},
        {value: "Science", emojiIcon: "🧪"},
        {value: "Entertainment", emojiIcon: "🎭"},
        {value: "Geography", emojiIcon: "🌏"},
        {value: "History", emojiIcon: "📙"},
        {value: "Just for Fun", emojiIcon: "😄"},
    ]
    return <>
        <div className="sm:container container mx-auto p-5">
            <div className="mb-5">
                <h2 className="text-2xl font-bold">
                    Create a Quiz
                </h2>
                <Link to="/" className="underline text-gray-500">Return to quiz feed</Link>
            </div>

            {/* 
                Make thing like this ideally:
                1. Each major form is its own component
                2. Use Redux to keep track of data and store on Session so it persists even when refreshed
                3. All data are passed through separate URL and are their own requests
            */}
            <form>
                <div className="mb-5">
                    <CustomInput name="Title" label="Quiz Title" type="text" required={true} /> 
                    <CustomSelectInput name="Category" label="Category" values={dummyData}  />
                    <CustomTextArea name="QuizDescription" label="Description" />
                    <Button name="Add Question"  color="success"/>
                </div>
                <div className="mb-5">
                    <CustomTextArea name="QuestionContent" label="Question content" required={true} />
                    <CustomInput name="CorrectAnswer" label="Correct answer" type="text" required={true} /> 
                    <CustomInput name={`Answer${2}`} label={`Answer ${"#2"}`} type="text" required={true} />
                    <CustomInput name={`Answer${3}`} label={`Answer ${"#3"}`} type="text" required={true} />
                    <Button name="Add Answer" color="accent" />
                </div>

                {/* V2 - make another conditional rendering in the Button component that turns the div-button into a button-submit. */}
                <button className="rounded-xl border border-b-4 px-5 py-2
                text-center" type="submit">
                    Submit
                </button>
            </form>
        </div>
    </>
}

export default CreateQuizPage;