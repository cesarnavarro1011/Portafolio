import styles from "./Card.module.css";

const Card = () => (
  <div className={styles.card}>
    <div className={styles.mainContent}>
        <div className={styles.header}>
          <span>Date</span>
          <span>29-June-2023</span>
        </div>
        <p className={styles.heading}>Name of project</p>
      <div className={styles.categories}>
        <span>React</span>
        <span>Css</span>
      </div>
    </div>
    <div className={styles.footer}>
      Dev. César Navarro
    </div>
  </div>
  );
  
  export default Card ;
  