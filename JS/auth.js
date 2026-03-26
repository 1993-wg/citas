import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', () => {

  // --- REGISTRO DE USUARIO ---
  const frmRegistro = document.getElementById('frmRegistro');
  if (frmRegistro) {
    frmRegistro.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btnSubmit = document.getElementById('btnRegistrar');
      btnSubmit.disabled = true;
      btnSubmit.innerText = 'Registrando...';

      const email = document.getElementById('txtEmailReg').value;
      const password = document.getElementById('txtPasswordReg').value;

      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      if (error) {
        alert('Error al registrarse: ' + error.message);
      } else {
        alert('Registro exitoso. Revisa tu correo electrónico para verificar tu cuenta (si tienes habilitada la confirmación de email) o ya puedes iniciar sesión.');
        window.location.href = 'login.html';
      }
      btnSubmit.disabled = false;
      btnSubmit.innerText = 'Registrarse';
    });
  }

  // --- INICIO DE SESIÓN ---
  const frmLogin = document.getElementById('frmLogin');
  if (frmLogin) {
    frmLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btnSubmit = document.getElementById('btnLogin');
      btnSubmit.disabled = true;
      btnSubmit.innerText = 'Iniciando sesión...';

      const email = document.getElementById('txtEmailLogin').value;
      const password = document.getElementById('txtPasswordLogin').value;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        alert('Error al iniciar sesión: ' + error.message);
      } else {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = '../index.html'; // Redirigir al inicio logueado (podrías mostrar estado en el nav)
      }
      btnSubmit.disabled = false;
      btnSubmit.innerText = 'Iniciar sesión';
    });
  }

});
