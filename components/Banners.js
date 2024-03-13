import { Button } from "./Buttons"

export function SignupReminderBanner() {

    /* placeholder for API call */
    let signup_complete = false; 

    if (!signup_complete) {
        return (
            <div href="#" className='flex border rounded-xl bg-[#e6bf4e] mb-7 p-5 border-[#dec068] z-1 drop-shadow-md'>
                <div className="relative ml-5">
                    <p className="align-middle">You haven't finished setting up your profile yet! <a className="underline" href="./account_setup_overview">Click here to complete!</a></p>

                </div>
            </div>
        )
    }
}