import Swal from "sweetalert2";

const ErrorNotExisted = () => {
    return (
        Swal.fire({
            position: "text-center",
            icon: "error",
            title: "Account Warning: Account does not exist!",
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default ErrorNotExisted;