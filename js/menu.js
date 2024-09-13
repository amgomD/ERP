
document.addEventListener("DOMContentLoaded", function() {

    const menuIcon = document.getElementById("openmenu");
    const menuLateral = document.getElementById("menu-lateral");
    var closeMenu = document.getElementById('closemenu');
    // Función para mostrar el menú lateral
    function mostrarMenu() {
        menuLateral.style.left = "0";
        menuIcon.style.display = 'none';
        closeMenu.style.display = 'block'; // Desliza el menú hacia la vista
    }

    // Función para ocultar el menú lateral
    function ocultarMenu() {
        menuLateral.style.left = "-250px"; 
        menuIcon.style.display = 'block';
        closeMenu.style.display = 'none';// Desliza el menú hacia fuera de la vista
    }

    // Mostrar el menú cuando el cursor está sobre el ícono o el menú
    menuIcon.addEventListener("mouseenter", mostrarMenu);
    menuLateral.addEventListener("mouseenter", mostrarMenu);

    // Ocultar el menú cuando el cursor deja el ícono o el menú
    menuIcon.addEventListener("mouseleave", function() {
        // Retrasar un poco para dar tiempo al usuario de mover el cursor al menú
        setTimeout(function() {
            if (!menuLateral.matches(':hover') && !menuIcon.matches(':hover')) {
                ocultarMenu();
            }
        }, 200);
    });
   
    menuLateral.addEventListener("mouseleave", function() {
        // Retrasar un poco para dar tiempo al usuario de mover el cursor al ícono
        setTimeout(function() {
            if (!menuLateral.matches(':hover') && !menuIcon.matches(':hover')) {
                ocultarMenu();
            }
        }, 200);
    });
});



