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
import NewsStrafsenatwrapper from "../components/NewsStrafsenatwrapper";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Navigationbar />
      <ImageHeader />
      <BundeslanderSelectionRow />
        <Aktuell />
        <Newswrapper />
        <NewsStrafsenatwrapper />
        <Nationalteam />
        {/*<Events />*/}
      <Banner />
      <FooterMain />
    </div>
  );
};

export default Landing;
