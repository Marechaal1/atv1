import React, { useState } from 'react';
import './Form.css'; 
const CarForm = () => {
  const [carLicensePlate, setCarLicensePlate] = useState('');
  const [km, setKm] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro do carro
    console.log("Carro cadastrado:", { carLicensePlate, km, available });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro de Carro</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="carLicensePlate">Placa do Carro</label>
            <input
              id="carLicensePlate"
              type="text"
              className="input-field"
              value={carLicensePlate}
              onChange={(e) => setCarLicensePlate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="km">Quilometragem</label>
            <input
              id="km"
              type="number"
              className="input-field"
              value={km}
              onChange={(e) => setKm(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold mr-2" htmlFor="available">Disponível</label>
            <input
              id="available"
              type="checkbox"
              checked={available}
              onChange={() => setAvailable(!available)}
            />
          </div>
          <button type="submit" className="submit-button">Cadastrar Carro</button>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
