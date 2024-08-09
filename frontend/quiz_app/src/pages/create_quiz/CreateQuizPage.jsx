import CustomTextArea from "../../components/CustomTextArea";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import CustomSelectInput from "../../components/CustomSelectInput";


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
            <h2 className="text-2xl font-bold">
                Create a Quiz
            </h2>
            <p className="underline text-gray-500 mb-5">Return to quiz feed</p>

            {/* 
                Make thing like this ideally:
                1. Each major form is its own component
                2. Use Redux to keep track of data and store on Session so it persists even when refreshed
                3. All data are passed through separate URL and are their own requests
            */}
            <form>
                <CustomInput name="Title" label="Quiz Title" type="text" required={true} /> 
                <CustomSelectInput name="Category" label="Category" values={dummyData}  />
                <CustomTextArea name="QuizDescription" label="Description" />
                <Button name="Add Question"  color="success"/>
                <CustomTextArea name="QuestionContent" label="Question content" required={true} />
                <CustomInput name="CorrectAnswer" label="Correct answer" type="text" required={true} /> 
                <CustomInput name="Answer2" label="Answer #2" type="text" required={true} />
                <CustomInput name="Answer3" label="Answer #3" type="text" required={true} removable={true} />    
                <Button name="Add Answer" color="accent" />
            </form>
        </div>
    </>
}

export default CreateQuizPage;