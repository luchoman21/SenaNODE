import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    correo: '',
    telefono: '',
    direccion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2><center>Formulario de Inscripción</center></h2>
      <h3><center>Construempleo</center></h3>
      <div>
        <label>Nombres:</label>
        <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} />
      </div>
      <div>
        <label>Apellidos:</label>
        <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
      </div>
      <div>
        <label>Fecha de Nacimiento:</label>
        <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
      </div>
      <div>
        <label>Dirección:</label>
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
      </div>
      <form action="departments">
            <label for="deptartments">Departamento de Nacimiento</label>
            <select name="departments" id="dept">
              <option value="Vacio"></option>
                <option value = "Amazonas">Amazonas</option>
                <option value = "Antioquia">Antioquia</option>
                <option value = "Arauca">Arauca</option>
                <option value = "Atlántico">Atlántico</option>
                <option value = "Bolívar">Bolívar</option>
                <option value = "Boyacá">Boyacá</option>
		            <option value = "Caldas">Caldas</option>
                <option value = "Caquetá">Caquetá</option>
                <option value = "Casanare">Casanare</option>
                <option value = "Cauca">Cauca</option>
                <option value = "Cesar">Cesar</option>
                <option value = "Chocó">Chocó</option>		            
                <option value = "Córdoba">Córdoba</option>
                <option value = "Cundinamarca">Cundinamarca</option>
                <option value = "Guainía">Guainía</option>
		            <option value = "Guaviare">Guaviare</option>
                <option value = "Huila">Huila</option>
                <option value = "La Guajira">La Guajira</option>
                <option value = "Magdalena">Magdalena</option>
		            <option value = "Meta">Meta</option>
                <option value = "Nariño">Nariño</option>
                <option value = "Norte de Santander">Norte de Santander</option>
                <option value = "Putumayo">Putumayo</option>                
                <option value = "Quindío">Quindío</option>  
		            <option value = "Risaralda">Risaralda</option>
                <option value = "San Andrés y Providencia">San Andrés y Providencia</option>
                <option value = "Santander">Santander</option>
                <option value = "Sucre">Sucre</option>
                <option value = "Tolima">Tolima</option>
                <option value = "Valle del Cauca">Valle del Cauca</option>
                <option value = "Vaupés">Vaupés</option>
                <option value = "Vichada">Vichada</option>
                <option value = "Vichada">Otro</option>
            </select>
            </form> 
        <form action="cities">
            <label for="cities">Ciudad/Municipio de Nacimiento</label>
            <select name="cities" id="ciudad">
                <option value="Vacio"></option>
                <option value="Arauca">Arauca</option>
                <option value="Armenia">Armenia</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Florencia">Florencia</option>
                <option value="Ibagué">Ibagué</option>
                <option value="Leticia">Leticia</option>
                <option value="Manizales">Manizales</option>
                <option value="Medellín">Medellín</option>
                <option value="Mitú">Mitú</option>
                <option value="Mocoa">Mocoa</option>
                <option value="Montería">Montería</option>
                <option value="Neiva">Neiva</option>
                <option value="Pasto">Pasto</option>
                <option value="Pereira">Pereira</option>
                <option value="Popayán">Popayán</option>
                <option value="Puerto Carreño">Puerto Carreño</option>
                <option value="Puerto Inírida">Puerto Inírida</option>
                <option value="Quibdó">Quibdó</option>
                <option value="Riohacha">Riohacha</option>
                <option value="San Andrés">San Andrés</option>
                <option value="San José del Guaviare">San José del Guaviare</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Sincelejo">Sincelejo</option>
                <option value="Tunja">Tunja</option>
                <option value="Valledupar">Valledupar</option>
                <option value="Villavicencio">Villavicencio</option>
                <option value="Yopal">Yopal</option>
                <option value="Otro">Otro</option>
            </select>
            </form> 
      <div>
      <form action="genero">
                <label for="genero">Género</label>
                <select name="genero" id="gen">
                    <option value="Vacio"></option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                </form> 
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;