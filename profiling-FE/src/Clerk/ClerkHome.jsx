import NavTitle from "../Components/NavTitle";
import ClerkSignIn from "./ClerkSignIn";

const ClerkHome = () => {
    return (
        <div>
            {<NavTitle />}

            <section className='mt-5'>
                {<ClerkSignIn />}
            </section>
        </div>
    );
}

export default ClerkHome;