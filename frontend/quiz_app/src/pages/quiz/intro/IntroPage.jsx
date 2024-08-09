import { Outlet } from "react-router-dom"
import Button from "../../../components/Button"
import { useState } from "react"

const quizInfo = (setIsAnswering) => {
    return <> 
        <div>
        
            <img className="object-cover h-64 w-full mb-5" src="https://picsum.photos/400" />
            {/* 
                [QUIZ BANNER IMG]
            */} 
            {/* In order to hide the intro page content, set a useState to check if the user is currently:
                1. has clicked the button
                2. button sets isAnswering to tru
                3. if isAnswering == hide Intro content, show Quiz Loop
            */}

            {/* acquire the quiz title by making an axios query and getting the response data into the Redux object. */}
            <h1 className="px-5 pt-5">Quiz Title</h1>

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
            
            <Button name="Take quiz" color="success" clickFunc={() => {setIsAnswering(true)}} />
        
        </div>
    </>
}

const IntroPage = () => {

    const [isAnswering, setIsAnswering] = useState(false);

    const handleClick = () => {
        setIsAnswering(!isAnswering);
        console.log(isAnswering);
    }
    
    return <>
    {/* {
        !isAnswering ? 
        <p onClick={handleClick} className="underline text-gray-500 mb-5">Exit Quiz</p>
        :
        quizInfo(setIsAnswering)
    }
    { isAnswering ? <Outlet/> : ""} */}
    <div>
        
        <img className="object-cover h-64 w-full mb-5" src="https://picsum.photos/400" />
        {/* 
            [QUIZ BANNER IMG]
        */} 
        {/* In order to hide the intro page content, set a useState to check if the user is currently:
            1. has clicked the button
            2. button sets isAnswering to tru
            3. if isAnswering == hide Intro content, show Quiz Loop
        */}

        {/* acquire the quiz title by making an axios query and getting the response data into the Redux object. */}
        <h1 className="px-5 pt-5">Quiz Title</h1>

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
        
        <Button name="Take quiz" color="success" linkRoute="main_loop" />
    
    </div>
    </>
}

export default IntroPage