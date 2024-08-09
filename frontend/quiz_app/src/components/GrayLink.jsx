import { Link } from "react-router-dom";

const GrayLink = ({linkRoute, name}) => {
    return <>
    <Link to={linkRoute} className="text-gray-500 underline">
        {name}
    </Link>
    </>
}

export default GrayLink;