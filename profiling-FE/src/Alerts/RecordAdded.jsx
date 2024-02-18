import Swal from "sweetalert2";

const RecordAdded = () => {
    return (
        Swal.fire({
            position: "text-center",
            icon: "success",
            title: "New Record Added",
            showConfirmButton: false,
            timer: 1500
        })
    );
}

export default RecordAdded;