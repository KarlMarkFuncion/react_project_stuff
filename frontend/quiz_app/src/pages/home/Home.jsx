import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
    return <>
        <img className="object-cover h-44 w-full mb-5" src="https://picsum.photos/400" />
        <div className="p-5 container mx-auto ">
            <div className="md:w-2/4 mx-auto">
                <h1 className="text-4xl font-bold mb-2">
                    Aquinas' Library
                </h1>
                <h2 className="text-2xl mb-3">
                    Public Quiz Forum
                </h2>
                <p className="">
                    “The intellect is moved by the command
                    of the will to assent to what is of 
                    faith: for ‘no man believeth, unless he will.”
                    <span className="mt-5 grid">
                        - St. Thomas Aquinas
                    </span>
                </p>
            </div>
        </div>
        <div className="grid align-bottom p-5 gap-2 md:w-2/4 lg:w-1/4 mx-auto">
            <Button name="START QUIZZING!" linkRoute="/" /> 
            <Button name="LOG IN" linkRoute="/login" />
        </div>
    </>
}

export default Home;