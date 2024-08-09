import { Outlet } from "react-router-dom"

const LoginSignupPage = () =>{
    return <>
    <div className="p-5 md:container mx-auto md:w-96 md:mt-5">
        <h1 className="flex gap-2 text-4xl mb-5 font-bold">
            <span className="text-4xl">🌞</span>
            Aquinas' Library
        </h1>
        <Outlet/>
    </div>
    </>
}

export default LoginSignupPage;