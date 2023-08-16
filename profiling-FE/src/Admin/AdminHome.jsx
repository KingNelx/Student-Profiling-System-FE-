import NavTitle from "../Components/NavTitle";
import AdminSignIn from "./AdminSignIn";

const AdminHome = () => {

    return (
        <div>
           {<NavTitle />}

           <section className='mt-5'>
            {<AdminSignIn />}
           </section>
        </div>
        
    );
}

export default AdminHome;