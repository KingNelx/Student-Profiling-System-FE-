import Swal from "sweetalert2";

const AccountSaved = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'ACCOUNT CREATED',
        showConfirmButton: false,
        timer: 1500
      })
}
 
export default AccountSaved;