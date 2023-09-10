import Swal from "sweetalert2";

const Success = () => {
    return (
        Swal.fire({
            position: 'text-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default Success;