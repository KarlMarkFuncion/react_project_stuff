import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";

const LoginPage = () => {
    return <> 
        <form>
            <h2 className="font-bold text-lg">
                Log in
            </h2>
            <div> 
                <CustomInput name="usernameOrEmail" label="Username / Email" required={true}/>
                <CustomInput name="password" label="Password" required={true}/>
                {/* ADD CAPTCHA IF THERE IS TIME */}
            </div>
            <div className="flex justify-end">
                <div className="flex flex-col md:flex-row w-full gap-0 md:w-60 md:gap-2">
                    <Button name="Sign up" color="accent" linkRoute="/sign_up"/>
                    <Button name="Log in" color="success"linkRoute="/login"/>
                </div>
            </div>
        </form> 
    </>
}

export default LoginPage;