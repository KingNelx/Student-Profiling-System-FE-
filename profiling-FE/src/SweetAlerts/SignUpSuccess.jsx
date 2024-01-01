import Swal from "sweetalert2";

const SignUpSuccess = () => {
    Swal.fire({
        position: "text-center",
        icon: "success",
        title: "ACCOUNT CREATED",
        showConfirmButton: false,
        timer: 1500
    });
}

export default SignUpSuccess;