import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importando o CSS

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Sistema de Cadastro</div>
        <div className="flex space-x-4">
          <Link to="/car" className="nav-link">Cadastrar Carro</Link>
          <Link to="/brand" className="nav-link">Cadastrar Marca</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
