// Capturar los elementos de correo - rol - contraseña - Btn_ingreso
const Users = document.getElementById('Tbx_users')
const Roles = document.getElementById('Tbx_rol')
const Pass = document.getElementById('Tbx_pass')
const ingreso = document.getElementById('Btn_ingreso')

// Validar ingreso

function Ingreso() {
      const email = document.getElementById('Tbx_users').value;
      const rol = document.getElementById('Tbx_rol').value;
      const password = document.getElementById('Tbx_pass').value;

      // 2. Validación de campos vacíos (lo que ya sabías)
      if (!email || !password || !rol) {
            alert("Por favor, llena todos los campos.");
            return;
      }


      // 1. Primero validamos si está vacío
      if (rol === "") {
            alert("🚨 Por favor, selecciona un rol.");
            return;
      }

      // 2. Comprobamos si el valor es uno de los permitidos
      // Usamos .toLowerCase() por seguridad
      const rolMin = rol.toLowerCase();

      if (rolMin !== "admin" && rolMin !== "usuario" && rolMin !== "diseño") {
            alert("❌ Rol no reconocido.");
            return;
      }

      // 4. Éxito
      alert("¡Bienvenido! Has ingresado como: " + rolMin);


}

// Regsitro.HTML

// --- 1. FUNCIONES COMPARTIDAS (Utilerías) ---
// Esta función nos sirve para CUALQUIER campo de CUALQUIER página
function validarVacio(valor) {
      return !valor; // Retorna true si está vacío, false si tiene contenido
}

function Registro() {
      // 1. Capturamos los valores usando tus nuevos IDs
      const nombre = document.getElementById('Reg_nombre').value;
      const apellido = document.getElementById('Reg_apellido').value;
      // Captura el valor de la opción seleccionada
      const rol = document.getElementById('Reg_rol').value;
      const email = document.getElementById('Reg_mail').value;
      const pass = document.getElementById('Reg_password').value; 
      const repeatPass = document.getElementById('Reg_Repit').value;
      const fecha = document.getElementById('Reg_date').value;

      // USANDO LA UTILERÍA:
      // Aquí preguntamos: ¿Está vacío el nombre? ¿O el apellido? ¿O el mail?...
      if (validarVacio(nombre) || validarVacio(apellido) || validarVacio(email) ||
            validarVacio(pass) || validarVacio(repeatPass) || validarVacio(fecha)) {

            alert("🚨 Todos los campos son obligatorios.");
            return; // Detenemos la ejecución
      }
      // La validación de vacío funcionará porque la primera opción tiene value=""
      if (validarVacio(rol)) {
            alert("🚨 Por favor, selecciona un rol.");
            return;
      }
      // 3. Validación: ¿Las contraseñas son iguales?
      if (pass !== repeatPass) {
            alert("❌ Las contraseñas no coinciden. Inténtalo de nuevo.");
            return;
      }

      // 4. Si todo está bien
      alert("✅ ¡Registro exitoso para " + nombre + apellido + " " + rol + "!");
      limpiarCampos();
      // Aquí podrías limpiar los campos o mandar al usuario al Login
      // --- 3. EXTRA: Función para limpiar los cuadros ---
      function limpiarCampos() {
            document.getElementById('Reg_nombre').value = "";
            document.getElementById('Reg_apellido').value = "";
            document.getElementById('Reg_mail').value = "";
            document.getElementById('Reg_password').value = "";
            document.getElementById('Reg_Repit').value = "";
            document.getElementById('Reg_date').value = "";
            document.getElementById('Reg_rol').value = "";
      }
}