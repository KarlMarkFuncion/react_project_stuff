import { Outlet } from "react-router-dom"

const IntroPage = () => {
    return <>
    <div>
        {/* 
            [QUIZ BANNER IMG]
        */}
        {/* In order to hide the intro page content, set a useState to check if the user is currently:
            1. has clicked the button
            2. button sets isAnswering to tru
            3. if isAnswering == hide Intro content, show Quiz Loop
        */}
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
        <Outlet/>
    </div>
    </>
}

export default IntroPage