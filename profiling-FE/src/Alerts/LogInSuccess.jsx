import Swal from "sweetalert2";

const LogInSuccess = () => {
    return (
        Swal.fire({
            position: "text-center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default LogInSuccess;