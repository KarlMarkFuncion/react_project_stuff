import QuizCard from "./QuizCard";

const FeedPage = () => {
    return <>
    <div className="p-5">
        <div className="mb-5">
            <h2 className="text-xl font-bold">
                Quizzes you can take!
            </h2>
            <p className="text-gray-500 underline">
                Pick by category
            </p>
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