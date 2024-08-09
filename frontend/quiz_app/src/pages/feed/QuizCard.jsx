import { Link } from "react-router-dom";

const QuizCard = ({title, author, category, description, slug}) => {
    const handleRedirect = () =>{
        // This function will redirect the thingy on click.
        // USE SLUGS INSTEAD OF NUMERIC IDs to encrypt connections
        console.log("redirect")
    }

    return <>

        <Link to="/quiz/id">
            <div className="rounded-lg hover:shadow-xl p-5 mb-2" onClick={handleRedirect}>
                <img className="object-cover rounded-md h-40 w-full" src="https://picsum.photos/400" />
                <h3 className="text-xl font-bold my-1">
                    CAPITALS OF THE WORLD
                </h3>
                <p className="text-gray-500">
                    {/* author name • category */}
                by John Jones • <span className="font-bold">Geography</span>
                </p>
                <p className="text-gray-500">
                    {/* description */}
                    "Can you name all the world's capital cities?"
                </p>
            </div>
        </Link>
    </>
}

export default QuizCard;    