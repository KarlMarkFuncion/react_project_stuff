import Button from "../../components/Button"

const AnswerGroup = ({answerNum}) => {
    const removeGroup = () => {
        return
    }
    return <>
        <CustomInput name={`Answer${answerNum}`} label={`Answer #${answerNum}`} type="text" required={true} />
        <Button name="remove answer" clickFunc={} />
    </>
}