import LongTextItem from "../components/LongTextItem";
import styles from "./Impressium.module.css";
import FooterMain from "../components/FooterMain";
import Navigationbar from "../components/Navigationbar";
import BundeslanderSelectionRow from "../components/BundeslanderSelectionRow";

const Impressium = () => {
  return (
    <div className={styles.impressium}>
        <Navigationbar />
        <BundeslanderSelectionRow />

      <div className={styles.sterreichischerKleinfeldFubParent}>
        <div className={styles.sterreichischerKleinfeldFub}>
          Österreichischer Kleinfeld Fußball Bund
        </div>
        <div className={styles.impressum}>Impressum</div>
      </div>
      <LongTextItem />
        <FooterMain />
    </div>
  );
};

export default Impressium;
