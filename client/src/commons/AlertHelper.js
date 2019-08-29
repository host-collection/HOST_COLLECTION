// import React from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const mySwal = (message) => {
  const MySwal = withReactContent(Swal);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    type: 'error',
    title: message
  });

  return MySwal;
};
