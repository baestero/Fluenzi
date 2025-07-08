import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gestudantes from "./components/GerenciamentoEstudantes/Gestudantes";
import Gprofessores from "./components/GerenciamentonProfessores/Gprofessores";
import Aestudante from "./components/AgendamentoEstudante/Aestudante";
import "./App.css";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/gerenciamento-de-estudantes"
              element={<Gestudantes />}
            />
            <Route
              path="/gerenciamento-de-professores"
              element={<Gprofessores />}
            />
            <Route path="/agendamento-do-estudante" element={<Aestudante />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
