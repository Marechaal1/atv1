import React, { useState } from 'react';
import './Form.css'; // Certifique-se de que o caminho está correto

const BrandForm = () => {
  const [brandName, setBrandName] = useState('');
  const [logo, setLogo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Marca cadastrada:", { brandName, logo });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="form-container">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Cadastro de Marca</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="brandName">Nome da Marca</label>
            <input
              id="brandName"
              type="text"
              className="input-field"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">URL do Logo</label>
            <input
              id="logo"
              type="text"
              className="input-field"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Cadastrar Marca
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrandForm;
