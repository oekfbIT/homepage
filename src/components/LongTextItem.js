import Statitem2 from "./Statitem2";
import PropTypes from "prop-types";
import styles from "./LongTextItem.module.css";

const LongTextItem = ({ className = "" }) => {
    return (
        <div className={[styles.longtextitem, className].join(" ")}>
            <Statitem2
                key="Adresse:"
                value={`Adresse:
                
        Österreichischer Kleinfeld Fußball Bund,
        1020 Wien, Pazmanitengasse 15/7`}
                statitemFlex="unset"
                statitemAlignSelf="stretch"
            />
            <Statitem2
                key="ZVR:"
                value="ZVR:

                046132504"
                statitemFlex="unset"
                statitemAlignSelf="stretch"
            />
            <Statitem2
                key="Bankverbindung:"
                value={`Bankverbindung: 
                
                Österreichischer Kleinfeld Fußball Bund
                AT26 2011 1829 7052 4200
                GIBAATWWXXX`}
                statitemFlex="unset"
                statitemAlignSelf="stretch"
            />
            <Statitem2
                key="für den Inhalt verantwortlich:"
                value="Für den Inhalt verantwortlich:

                ÖKFB"
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
