import Button from "../../../components/Button";
import Quiz from "./Quiz";
import "./quiz.css"

const QuizPage = () => {
    return <>
    <div className="md:container md:mx-auto">
        <div className="p-5 w-full">
            <Quiz />
        </div>
    </div>
    <div className="border-t p-5 ">
            <div className="flex md:flex-row flex-col md:gap-3 gap-4 md:container md:mx-auto justify-end">
                <Button name="Skip" color="muted" clickable={false}/>
                <Button name="Check" color="success"  />
            </div>
    </div>
    </>
}

export default QuizPage;