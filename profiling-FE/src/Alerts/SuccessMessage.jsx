import Swal from "sweetalert2";

const SuccessMessage = () => {
    return (
        Swal.fire({
            position: "text-center",
            icon: "success",
            title: "Account Created",
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default SuccessMessage;