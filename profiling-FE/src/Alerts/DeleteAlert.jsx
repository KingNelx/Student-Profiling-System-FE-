import Swal from "sweetalert2";

const DeleteAlert = () => {
    Swal.fire({
        position: 'text-center',
        icon: 'success',
        title: 'Deleted',
        showConfirmButton: false,
        timer: 1500
    })
}

export default DeleteAlert;