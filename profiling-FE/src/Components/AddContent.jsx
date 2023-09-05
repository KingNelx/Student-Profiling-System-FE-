import Swal from "sweetalert2";

const AddContent = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'NEW STUDENT ADDED',
        showConfirmButton: false,
        timer: 1500
    })
}

export default AddContent;