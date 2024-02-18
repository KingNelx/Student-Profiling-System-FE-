import Swal from "sweetalert2";

const StudentDuplicate = () => {
    return (
        Swal.fire({
            position: "text-center",
            icon: "error",
            title: "Student Already Exist!",
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default StudentDuplicate;