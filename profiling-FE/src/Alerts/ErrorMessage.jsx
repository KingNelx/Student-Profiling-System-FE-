import Swal from "sweetalert2";

const ErrorMessage = () => {
    return (
        Swal.fire({
            position: "text-center",
            icon: "error",
            title: "Account Warning: Duplicate Detected!",
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default ErrorMessage;