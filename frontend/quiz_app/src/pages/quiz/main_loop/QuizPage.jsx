import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Quiz from "./Quiz";
import "./quiz.css"
import GrayLink from "../../../components/GrayLink";

const QuizPage = () => {
    return <>
    <div className="md:container md:mx-auto  md:container mx-auto md:w-1/2">
        <div className="p-5 w-full flex flex-col gap-5">
            <GrayLink linkRoute="/quiz/:id" name="Exit Quiz" />
            <Quiz />
        </div>
    </div>
    <div className="border-t p-5 ">
            <div className=" md:container md:w-1/2 md:mx-auto flex md:flex-row flex-col md:gap-3 gap-4 justify-end ">
                <div className="md:w-40">
                    <Button name="Check" color="success"  />
                </div>
            </div>
    </div>
    </>
}

export default QuizPage;