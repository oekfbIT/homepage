import Statitem2 from "./Statitem2";
import PropTypes from "prop-types";
import styles from "./LongTextItem.module.css";

const LongTextItem = ({ className = "" }) => {
  return (
    <div className={[styles.longtextitem, className].join(" ")}>
      <Statitem2
        key="Adresse:"
        value="Österreichischer Kleinfeld Fußball Bund, 1020 Wien, Darwingasse 6/4"
        statitemFlex="unset"
        statitemAlignSelf="stretch"
      />
      <Statitem2
        key="ZVR:"
        value="046132504"
        statitemFlex="unset"
        statitemAlignSelf="stretch"
      />
      <Statitem2
        key="Bankverbindung:"
        value="IBAN: AT26 2011 1829 XXXX XXXX"
        statitemFlex="unset"
        statitemAlignSelf="stretch"
      />
      <Statitem2
        key="für den Inhalt verantwortlich:"
        value="ÖKFB"
        statitemFlex="unset"
        statitemAlignSelf="stretch"
      />
      <Statitem2
        key="Logos und Teamnamen:"
        value="Die auf dieser Homepage verwendenten Teamnamen und Logos der Mannschaften sind weder auf Markenschutz geprüft noch sind diese von uns freigegeben. Der Österreichsiche Kleinfeld Fußball Bund übernimmt keine Haftung für Urheberrechtlich geschütze Namen oder Logos. Die Mitglieder (Mannschaften) tragen die Verantwortung, die angegebenen Teamnamen sowie Logos verwenden zu dürfen."
        statitemFlex="unset"
        statitemAlignSelf="stretch"
      />
    </div>
  );
};

LongTextItem.propTypes = {
  className: PropTypes.string,
};

export default LongTextItem;
