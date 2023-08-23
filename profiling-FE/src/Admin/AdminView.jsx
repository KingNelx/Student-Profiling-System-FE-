import ListOfStudents from "../Components/ListOfStudents";
import NavTitle from "../Components/NavTitle";
import AdminStudentView from "./AdminStudentView";

const AdminView = () => {
    return (
        <div>
            <NavTitle />
            <section>
                <ListOfStudents />
            </section>
            <section>
                <AdminStudentView/>
            </section>
        </div>
    );
}

export default AdminView;