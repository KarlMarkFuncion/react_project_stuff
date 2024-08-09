import Button from "../../components/Button";

import CustomInput from "../../components/CustomInput";

const SignUpPage = () => {
    return <> 
        <form>
            <h2 className="font-bold text-lg">
                Sign up
            </h2>
            <div>
                <CustomInput name="username" label="Username" required={true}/>
                {/* TO DO: Add a separate helper function to<CustomInput name="username" label="Username" required={true}/> verify email's input once submitted. */}
                <CustomInput name="email" label="Email" required={true}/>
                <CustomInput name="password" label="Password" required={true}/>
                <CustomInput name="confirmPassword" label="Confirm Password" required={true}/>
            </div>
            <div className="flex justify-end">
                <div className="flex flex-col md:flex-row w-full gap-0 md:w-60 md:gap-2">
                    <Button name="Log in" color="accent" linkRoute="/login"/>
                    <Button name="Sign up" color="success" linkRoute="/sign_up"/>
                </div>
            </div>
        </form> 
    </>
}

export default SignUpPage;