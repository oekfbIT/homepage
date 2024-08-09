import Navigationbar from "../components/Navigationbar";
import ImageHeader from "../components/ImageHeader";
import BundeslanderSelectionRow from "../components/BundeslanderSelectionRow";
import Nationalteam from "../components/Nationalteam";
import Aktuell from "../components/Aktuell";
import Events from "../components/Events";
import Banner from "../components/Banner";
import Newswrapper from "../components/Newswrapper";
import FooterMain from "../components/FooterMain";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Navigationbar />
      <ImageHeader />
      <BundeslanderSelectionRow />
      <Nationalteam />
      {/*<Aktuell />*/}
      {/*<Events />*/}
      <Banner />
      {/*<Newswrapper />*/}
      <FooterMain />
    </div>
  );
};

export default Landing;
