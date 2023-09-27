import TopNav from "../Components/TopNav";
import AdminSideBar from "./AdminSideBar";


const AdminHome = () => {
    return (
        <>
            <TopNav />
            <div>
                <AdminSideBar />
            </div>
        </>
    );
}

export default AdminHome;