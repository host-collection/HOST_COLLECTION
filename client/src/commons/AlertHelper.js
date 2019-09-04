import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const mySwal = (message, position = 'top-right') => {
  const MySwal = withReactContent(Swal);

  const Toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    type: 'error',
    title: message
  });

  return MySwal;
};

export const expiredLoginToast = (title) => {
  Swal.fire({
    title,
    type: 'warning',
    html: 'Please login again',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<a href="/login">Login now</a>',
    cancelButtonText: 'Later',
  });
};
