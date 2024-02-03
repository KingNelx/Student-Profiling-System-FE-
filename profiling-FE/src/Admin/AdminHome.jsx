import AdminHeadTitle from "./AdminHeadTitle";
import AdminSideBar from "./AdminSideBar";

const AdminHome = () => {
    return (  
        <div>
            <nav className="shadow-lg">
                <AdminHeadTitle />
            </nav>
            <AdminSideBar />
        </div>
    );
}
 
export default AdminHome;