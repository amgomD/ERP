
let barra =    `     <div class="barra-superior">
        <div class="ladoizq">
        <div  id="openmenu" class="">
            <i  class="menu fa-solid fa-bars"></i>
        </div>

        <div  id="closemenu" class="">
            <i  class="menu fa-solid fa-xmark"></i>

        </div>
      <div class="logo-texto">
            <img class="img-45" src="../../img/logo.png" alt="">
          <h2>Stok.</h2>
         </div>
        </div>
        <div class="centro">
        
        </div>
        <div class="ladoder">
        
        </div>
        
        </div>`



  var menu =   `       <div id="menu-lateral">
        <div class="menu-Content">
        <div class="items">
          <p id="username">ANDRES GOMEZ Niño</p>
            <i id="perfil-flecha" class="fa-solid fa-chevron-down"></i>
          </div>
   
           <div class="items">
            <i class="fa-solid fa-house"></i> Inicio
        </div>
           <div class="items">
            <i class="fa-solid fa-gear"></i>Configuraciones
        </div>
           
        <div class="tituloitem">
            Modulos
        </div>
        <div class="items">
          <i class="fa-solid fa-people-group"></i>  Nits
        </div>
        <div class="items">
        <i class="fa-solid fa-box"></i>
            Articulos
         </div>
        <div class="items">
        <i class="fa-solid fa-cart-shopping"></i>
           Compras
        </div>
        <div class="items">
        <i class="fa-solid fa-money-bills"></i>
         Facturación
         </div>
         <div class="items">
         <i class="fa-solid fa-arrow-right-arrow-left"></i>
          Devoluciones
         </div>
         <div class="items">
         <i class="fa-solid fa-check-to-slot"></i>
            Recibos de caja
           </div>
           <div class="items">
           <i class="fa-solid fa-cart-flatbed"></i>
            Ajuste de inventario
           </div>
         <div class="tituloitem">
            
        </div>
  
         <div class="items">
      
         </div>
        </div>
        
        </div>  `
var nuevoElemento = document.createElement('div');
nuevoElemento.innerHTML = barra
nuevoElemento.innerHTML += menu
var body = document.body;
body.insertBefore(nuevoElemento, body.firstChild);
