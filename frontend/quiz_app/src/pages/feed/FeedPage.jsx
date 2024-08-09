import { Link } from "react-router-dom";
import Button from "../../components/Button";
import QuizCard from "./QuizCard";

const FeedPage = () => {
    return <>
    <div className="p-5">
        <div className="mb-5 px-5">
            <div className="grid md:grid-cols-2 ">
                <div>
                    <h2 className="text-3xl font-bold mb-2">
                        Quizzes you can take!
                    </h2>
                    {/* 
                    Let this be a V2 function, where you can sort by category 
                    */}
                    {/* <Link  className="text-gray-500 underline">
                        Pick by category
                    </Link> */}
                </div>
                    <Link to="/quiz/create_quiz" className="rounded-lg border-b-4 border text-center my-auto py-2 px-4 md:mt-0 mt-5 md:w-fit w-full justify-self-end">
                        Create quiz
                    </Link>
            </div>
            
        </div>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 md:grid-rows-auto">
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
        </div>
    </div>
    </>
}

export default FeedPage;