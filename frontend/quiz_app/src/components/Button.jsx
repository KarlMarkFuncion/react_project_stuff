import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ name, color, clickable = true, fullWidth = true, linkRoute, clickFunc = () => {}}) => {
    
    clickFunc = (e) => {
        if (!clickable) {
            e.preventDefault();
        }
    };


    // all styling will be contained here to avoid the bloating of div tag.
    const buttonClass = `
        rounded-xl border border-b-4 px-5 py-2
        text-center
        ${fullWidth ? "w-full" : ""}
        ${!clickable ? "cursor-default" : ""}
        ${color === "success" ? "bg-green-500 border-green-600" : ""}
        ${color === "danger" ? "bg-red-600 border-red-700" : ""}
        ${color === "accent" ? "bg-indigo-500 border-indigo-600" : ""}
        ${color === "muted" ? "bg-gray-500 border-gray-600" : ""}
    `;

    const ButtonContent = () => (
        <div className={buttonClass} role="button" aria-disabled={!clickable}>
            {name}
        </div>
    );

    return linkRoute ? (
        <>
            <Link className="block w-full" to={linkRoute} onClick={clickFunc}>
                <ButtonContent />
            </Link>
        </>
    ) : (
        <>
            <ButtonContent onClick={clickFunc} />
        </>
    );
};

// ensures the proper use of props-- avoids mis-configuring the button
Button.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["success", "danger", "accent", "muted"]),
    clickable: PropTypes.bool,
    fullWidth: PropTypes.bool,
    linkRoute: PropTypes.string,
    clickFunc: PropTypes.func
};

export default Button;