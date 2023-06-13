(async() =>{
    const link = '<a href="https://linktr.ee/matias_n_zamora" target="_black"> Mis Redes </a>';
    Swal.fire({
        html: `Para conoscer un poco mas nuestros proyectos has click en el enlace:  ${link} `,
        width:'40%',
        icon:'warning',
        padding: '1rem',
        confirmButtonText:'Acepto',
        backdrop: true,
        toast: true,
        position: 'bottom',
        showConfirmButton: true,
        showCancelButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        closeButtonAriaLabel: 'Cerrar alerta',
});
})();












