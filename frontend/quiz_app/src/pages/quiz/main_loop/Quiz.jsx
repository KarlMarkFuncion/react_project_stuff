import Answer from "./Answer";
import Question from "./Question";

const Quiz = () => {
    return <>
        <div className="flex flex-col gap-5 mb-5">
            <Question content={"What is the capital of the Philippines?"} />
            <div className="grid md:grid-cols-1 grid-cols-2 gap-3">
                <Answer content={"Manila"} />
                <Answer content={"Manila"} />
                <Answer content={"Manila"} />
                <Answer content={"Manila"} />
            </div>
        </div> 
    </>
}


export default Quiz;