import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import { useState } from "react"
import GrayLink from "../../../components/GrayLink"


const IntroPage = () => {

    const [isAnswering, setIsAnswering] = useState(false);

    const handleClick = () => {
        setIsAnswering(!isAnswering);
        console.log(isAnswering);
    }
 
    // const navigate = useNavigate(); 
    
    return <>
    <div className="h-screen">

        <img className="object-cover h-1/4 w-full mb-5" src="https://picsum.photos/400" />
        {/* 
            [QUIZ BANNER IMG]
        */} 
        {/* In order to hide the intro page content, set a useState to check if the user is currently:
            1. has clicked the button
            2. button sets isAnswering to tru
            3. if isAnswering == hide Intro content, show Quiz Loop
        */}

        <div className="container pb-5 px-5 md:w-2/5 mx-auto">
            <GrayLink linkRoute="/" name="Return to fed" />
            {/* acquire the quiz title by making an axios query and getting the response data into the Redux object. */}
            <h1 className="text-4xl font-bold py-5">Quiz Title</h1>

            {/*

                disappearing div, displaying non-sensitive quiz info

                <div>
                    [Quiz Description]
                    [Quiz num of takers]

                    [Start Button]
                    [Return to feed]
                </div>
            */}
            <p className="mb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quos! Voluptatum atque temporibus fugiat, minima quos animi doloremque accusantium est? Sit, cumque magnam exercitationem minus   accusamus cum in quas perspiciatis.
            </p>
            < Button color="accent" name="Start Quiz" linkRoute="main_loop" onClick={handleClick} />
        </div> 
    </div>
    </>
}

export default IntroPage