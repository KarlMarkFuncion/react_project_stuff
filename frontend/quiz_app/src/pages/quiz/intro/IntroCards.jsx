import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import GrayLink from "../../../components/GrayLink"

const IntroCard = ({ onClick }) => {
    return <>  
        
        <img className="object-cover h-64 w-full mb-5" src="https://picsum.photos/400" />
        {/* 
            [QUIZ BANNER IMG]
        */} 
        {/* In order to hide the intro page content, set a useState to check if the user is currently:
            1. has clicked the button
            2. button sets isAnswering to tru
            3. if isAnswering == hide Intro content, show Quiz Loop
        */}

        <div className="container px-5 w-2/5 mx-auto">
            <GrayLink linkRoute="/quiz/:id" name="Return to feed" />
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
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quos! Voluptatum atque temporibus fugiat, minima quos animi doloremque accusantium est? Sit, cumque magnam exercitationem minus accusamus cum in quas perspiciatis.
            </p>
            < Button name="Start Quiz" linkRoute="main_loop" onClick={onClick} />
        </div> 
    </>
} 

export default IntroCard;