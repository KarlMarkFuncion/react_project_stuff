import Button from "../../components/Button"
import CustomInput from "../../components/CustomInput"
const AnswerGroup = ({ answerNum, onRemove, index }) => {
    // INTENDED OUTCOME:
    // 1. when "add answer" in Create QuizPage is clicked this will appear
    // 2. when the form is submitted, this will be added in its own request
        // to the backend "/create_answer" with quizID as the FK
    // 3. If "remove answer" is clicked, this component will 
        // be deleted from the page.

    const removeGroup = () => {
        onRemove(answerNum)
        console.log(answerNum)
    }
    return <>
        <CustomInput name={`Answer${answerNum}`} label={`Answer #${answerNum}`} type="text" required={true} />
        { index !== 1 && 
        <Button name="remove answer" clickFunc={removeGroup} />
        }
        
    </>
}

export default AnswerGroup;