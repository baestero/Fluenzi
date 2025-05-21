import React from "react";
import styles from "./Main.module.css";
import Button from "../Button/Button";

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.menuBox}>
        <div>
          <h2 className={styles.tittle}>Gerenciamento de Estudantes</h2>
          <p>Gerencie registros e informações de estudantes</p>
        </div>
        <Button text={"Acessar"} />
      </div>
      <div className={styles.menuBox}>
        <div>
          <h2 className={styles.tittle}>Agendamentos do Estudante</h2>
          <p>Visualize os horarios dos estudantes</p>
        </div>
        <Button text={"Acessar"} />
      </div>
      <div className={styles.menuBox}>
        <div>
          <h2 className={styles.tittle}>Gerenciamento de Professores</h2>
          <p>Gerencie registros e informações de professores</p>
        </div>
        <Button text={"Acessar"} />
      </div>
    </main>
  );
};

export default Main;
