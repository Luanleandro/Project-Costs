import loading from '../../img/loading.svg'
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <img className={styles.loader} src={loading} alt='loading'></img>
    </div>
   
  );
};

export default Loading;
