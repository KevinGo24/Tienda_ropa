// Capturar los elementos de correo - rol - contraseña - Btn_ingreso
const  Users = document.getElementById('Tbx_users')
const  Roles = document.getElementById('Tbx_rol')
const Pass = document.getElementById('Tbx_pass')
const ingreso = document.getElementById('Btn_ingreso')

// Validar ingreso

function Ingreso  () {
      const email = document.getElementById('Tbx_users').value; 
    const rol = document.getElementById('Tbx_rol').value;
    const password = document.getElementById('Tbx_pass').value;

      // 2. Validación de campos vacíos (lo que ya sabías)
      if (!email || !password || !rol) {
            alert("Por favor, llena todos los campos.");
            return;
      }


      // 3. Validación de Roles Específicos
      // 3. Validación de Roles (Sugerencia: usa .toLowerCase() para que no falle por mayúsculas)
      const rolMin = rol.toLowerCase(); 
      if (rolMin !== "admin" && rolMin !== "usuario" && rolMin !== "diseño") {
            alert("Rol no válido. Solo se permite: Admin, Usuario o Diseño.");
            return;
      }

      // 4. Éxito
      alert("¡Bienvenido! Has ingresado como: " + rolMin);
}