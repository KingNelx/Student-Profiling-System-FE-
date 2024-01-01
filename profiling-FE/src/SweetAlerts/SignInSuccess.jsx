import Swal from "sweetalert2";

const SignInSuccess = () => {
    Swal.fire({
        position: "text-center",
        icon: "success",
        title: "SUCCESSFULLY LOG IN",
        showConfirmButton: false,
        timer: 1500
    });
}

export default SignInSuccess;