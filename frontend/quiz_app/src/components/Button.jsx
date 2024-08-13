import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ name, color, clickable = true, customWidth, linkRoute, clickFunc = () => {} }) => {

    const handleClick = (e) => {
        console.log('About to call clickFunc');
        console.log('Clickable:', clickable);
        if (!clickable) {
            e.preventDefault();
        } else {
            console.log("About to run func")
            clickFunc(e);
        }
    };

    // all styling will be contained here to avoid the bloating of div tag.
    const buttonClass = `
        rounded-xl border border-b-4 px-5 py-2
        text-center
        ${customWidth ? `w-full md:w-${customWidth}` : "w-full"}
        ${!clickable ? "cursor-default" : ""}
        ${color === "success" ? "bg-green-500 border-green-700" : ""}
        ${color === "danger" ? "bg-red-600 border-red-700" : ""}
        ${color === "accent" ? "bg-yellow-500 border-yellow-700" : ""}
        ${color === "muted" ? "bg-gray-500 border-gray-700" : ""}
    `;

    const ButtonContent = ({ onClick }) => (
        <div className={buttonClass} role="button" aria-disabled={!clickable} onClick={onClick}>
            {name}
        </div>
    );

    return linkRoute ? (
        <Link className="block w-full" to={linkRoute} onClick={handleClick}>
            <ButtonContent />
        </Link>
    ) : (
        <div className="block w-full" onClick={handleClick}>
            <ButtonContent />
        </div>
    );
};

// ensures the proper use of props-- avoids mis-configuring the button
Button.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["success", "danger", "accent", "muted"]),
    clickable: PropTypes.bool,
    fullWidth: PropTypes.bool,
    linkRoute: PropTypes.string,
    clickFunc: PropTypes.func,
    customWidth: PropTypes.string,
};

export default Button;