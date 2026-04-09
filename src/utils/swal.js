import Swal from 'sweetalert2';

const commonConfig = {
  background: '#1A1A1A',
  color: '#FFFFFF',
  confirmButtonColor: '#D4AF37',
  cancelButtonColor: '#333333',
  customClass: {
    popup: 'swal-dark-popup',
    title: 'swal-title',
    confirmButton: 'swal-confirm-button',
  }
};

export const showSuccess = (title, text) => {
  return Swal.fire({
    ...commonConfig,
    icon: 'success',
    title: title || 'Success!',
    text: text,
    timer: 3000,
    showConfirmButton: false,
  });
};

export const showError = (title, text) => {
  return Swal.fire({
    ...commonConfig,
    icon: 'error',
    title: title || 'Oops...',
    text: text,
  });
};

export const showConfirm = (title, text) => {
  return Swal.fire({
    ...commonConfig,
    icon: 'question',
    title: title || 'Are you sure?',
    text: text,
    showCancelButton: true,
    confirmButtonText: 'Yes, proceed!',
    cancelButtonText: 'No, cancel',
  });
};
