import Swal from "sweetalert2";

const DeleteRecord = () => {
    return (
        Swal.fire({
            position: "text-center",
            icon: "success",
            title: "Record Deleted",
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default DeleteRecord;