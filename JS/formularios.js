import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', () => {

  // --- FORMULARIO DE PACIENTES (CP_PAC_01 y CP_GEN_04) ---
  const frmPaciente = document.getElementById('frmPaciente');
  if (frmPaciente) {
    frmPaciente.addEventListener('submit', async (e) => {
      e.preventDefault(); // CP_PAC_01: Evitar recarga, la validación la hace HTML5 'required'
      
      const btnSubmit = document.getElementById('btnGuardarPaciente');
      btnSubmit.disabled = true;
      btnSubmit.innerText = 'Guardando...';

      const datos = {
        "nombres": document.getElementById('txtNombres').value,
        "apellidos": document.getElementById('txtApellidos').value,
        "documento": document.getElementById('txtDocumento').value,
        "teléfono": document.getElementById('txtTelefono').value,
        "email": document.getElementById('txtEmail').value,
        "fecha_nacimiento": document.getElementById('txtFechaNac').value
      };

      const { data, error } = await supabase.from('pacientes').insert([datos]);

      if (error) {
        alert('Error al guardar paciente: ' + error.message);
      } else {
        alert('Paciente guardado exitosamente.');
        frmPaciente.reset(); // Limpiar el formulario luego de guardar
      }
      
      btnSubmit.disabled = false;
      btnSubmit.innerText = 'Guardar Paciente';
    });

    // CP_CAN_05: Botón Cancelar
    const btnCancelar = document.getElementById('btnCancelarPaciente');
    if (btnCancelar) {
      btnCancelar.addEventListener('click', () => {
        frmPaciente.reset(); // Limpia los campos
      });
    }
  }

  // --- FORMULARIO DE MÉDICOS (CP_MED_02) ---
  const frmMedico = document.getElementById('frmMedico');
  if (frmMedico) {
    frmMedico.addEventListener('submit', async (e) => {
      e.preventDefault(); 
      // CP_MED_02: El HTML validará que el 'txtNombreMedico' no esté vacío mediante 'required'

      const btnSubmit = document.getElementById('btnGuardarMedico');
      btnSubmit.disabled = true;
      btnSubmit.innerText = 'Guardando...';

      const datos = {
        "nombre": document.getElementById('txtNombreMedico').value,
        "especialidad": document.getElementById('txtEspecialidad').value,
        "teléfono": document.getElementById('txtTelefonoMedico').value,
        "email": document.getElementById('txtEmailMedico').value
      };

      const { data, error } = await supabase.from('medicos').insert([datos]);

      if (error) {
        alert('Error al registrar médico: ' + error.message);
      } else {
        alert('Médico guardado exitosamente.');
        frmMedico.reset();
      }

      btnSubmit.disabled = false;
      btnSubmit.innerText = 'Guardar Médico';
    });

    const btnCancelarMedico = document.getElementById('btnCancelarMedico');
    if (btnCancelarMedico) {
      btnCancelarMedico.addEventListener('click', () => {
        frmMedico.reset();
      });
    }
  }

  // --- FORMULARIO DE PERSONAL (CP_TRB_03) ---
  const frmPersonal = document.getElementById('frmPersonal');
  if (frmPersonal) {
    frmPersonal.addEventListener('submit', async (e) => {
      e.preventDefault(); 
      // CP_TRB_03: Solo 'txtNombrePersonal' es 'required' en el HTML

      const btnSubmit = document.getElementById('btnGuardarPersonal');
      btnSubmit.disabled = true;
      btnSubmit.innerText = 'Guardando...';

      const datos = {
        nombre: document.getElementById('txtNombrePersonal').value,
        cargo: document.getElementById('txtCargo').value,
        departamento: document.getElementById('txtDepartamento').value
      };

      const { data, error } = await supabase.from('personal').insert([datos]);

      if (error) {
        alert('Error al registrar personal: ' + error.message);
      } else {
        alert('Personal guardado exitosamente.');
        frmPersonal.reset();
      }

      btnSubmit.disabled = false;
      btnSubmit.innerText = 'Guardar Personal';
    });

    const btnCancelarPersonal = document.getElementById('btnCancelarPersonal');
    if (btnCancelarPersonal) {
      btnCancelarPersonal.addEventListener('click', () => {
        frmPersonal.reset();
      });
    }
  }

});
