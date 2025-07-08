import React from "react";
import styles from "./Main.module.css";
import { NavLink } from "react-router-dom";
import Box from "./Box";
const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.menuBox + " animeLeft"}>
        <Box
          title={"Gerenciamento de Estudantes"}
          subtitle={"Gerencie registros e informações de estudantes"}
        />
        <NavLink to={"/gerenciamento-de-estudantes"}>
          <button className={styles.buttonGeral}>Acessar</button>
        </NavLink>
      </div>

      <div className={styles.menuBox + " animeLeft"}>
        <Box
          title={"Agendamentos do Estudante"}
          subtitle={"Visualize os horarios dos estudantes"}
        />
        <NavLink to={"/agendamento-do-estudante"}>
          <button className={styles.buttonGeral}>Acessar</button>
        </NavLink>
      </div>

      <div className={styles.menuBox + " animeLeft"}>
        <Box
          title={"Gerenciamento de Professores"}
          subtitle={"Gerencie registros e informações de professores"}
        />
        <NavLink to={"/gerenciamento-de-professores"}>
          <button className={styles.buttonGeral}>Acessar</button>
        </NavLink>
      </div>
    </main>
  );
};

export default Main;
