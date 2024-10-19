import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-24">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-gray-800 font-bold text-2xl mb-6">Bem-vindo à Locadora de Carros</h1>
        <p className="home-content">Escolha uma das opções abaixo:</p>
        <Link to="/car" className="option-link mt-6">Cadastro de Carros</Link>
        <Link to="/brand" className="option-link">Cadastro de Marcas</Link>
      </div>
    </div>
  );
};

export default Home;
