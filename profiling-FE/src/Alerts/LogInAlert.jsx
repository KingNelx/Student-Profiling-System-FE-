import Swal from "sweetalert2";

const LogInAlert = () => {
    Swal.fire({
        position: 'text-center',
        icon: 'success',
        title: 'Log in Successfully',
        showConfirmButton: false,
        timer: 1500
    })
}

export default LogInAlert;