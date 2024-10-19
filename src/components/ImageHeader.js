import PropTypes from "prop-types";
import styles from "./ImageHeader.module.css";

const ImageHeader = ({ className = "" }) => {
  return (
    <div className={[styles.imageheader, className].join(" ")}>
      <img className={styles.image1Icon} alt="" src="/imageheader.jpeg" />
      <div className={styles.info}>
        <div className={styles.winBigPrizesAsPartOfBundParent}>
          <div className={styles.winBigPrizesContainer}>
            <p className={styles.winBigPrizes}>
              Gemeinsam gegen Gewalt auf dem Sportplatz,
            </p>
          </div>
          <div className={styles.toCelebrateBundesliga}>
            <p>
              Wir verurteilen jede Form von Gewalt auf unseren Sportplätzen, sei sie physisch oder verbal.
              Unsere Schiedsrichter sind dazu angehalten, jede Art von Fehlverhalten konsequent zu ahnden.
              Die endgültige Entscheidung über eine Strafe trifft der Strafsenat auf Basis der Ligaordnung.
            </p>
            <p>
              Warum bestrafen wir Gewalt so streng? Weil der Sport uns allen als gemeinsames Hobby Freude bereitet, ob
              wir gegeneinander oder miteinander spielen.
              Gewalt schadet nicht nur dem Ruf unseres Verbands, sondern raubt vielen auch die Freude am Spiel.
            </p>
            <p>
              Leider kam es in den ersten Spielen dieser Saison bereits zu ein paar Vorfällen, weshalb wir uns gezwungen
              sehen, diesen Appell an alle Teams zu richten.
              Wir bitten alle Trainer, Teamleiter und Kapitäne, ihre Spieler anzuhalten, sich nicht zu unsportlichem
              Verhalten hinreißen zu lassen.
            </p>
            <p>
              Der Verband allein kann nicht gewährleisten, dass auf den Sportplätzen immer alles friedlich bleibt.
              Hier sind wir auf die Zusammenarbeit aller Mannschaften und der gesamten Gemeinschaft angewiesen, um einen
              fairen Wettkampf sicherzustellen.
            </p>
            <p>
              Auch Schiedsrichter sind Menschen – sie haben gute und schlechte Tage und treffen, wie jeder Spieler oder
              Trainer, manchmal Fehlentscheidungen.
              Dennoch machen sie ihren Job aus Leidenschaft. Ohne sie könnte der Spielbetrieb nicht stattfinden. Daher
              bitten wir um den nötigen Respekt gegenüber unseren Schiedsrichtern.
              Solltet ihr mit einer Schiedsrichterleistung unzufrieden sein, nehmt euch einen Tag Zeit zur Reflexion und
              sendet uns dann eine sachliche Beschwerde.
              Der Verband wird die Angelegenheit ernst nehmen und gegebenenfalls Maßnahmen ergreifen, um die Leistungen
              der Unparteiischen zu verbessern.
            </p>
            <p>
              Wir bitten jedoch eindringlich, von Diskussionen und Beleidigungen auf dem Sportplatz abzusehen – auch wenn Emotionen in einem gewissen Rahmen zum Sport dazugehören.
            </p>
            <p>
              Die Entscheidungen des Strafsenats basieren in erster Linie auf den Berichten der Schiedsrichter.
              Sollten Videoaufnahmen oder Bilder vorliegen, werden auch diese in die Urteilsfindung einbezogen.
              Falls neue Beweise oder sachliche Hinweise vorliegen, können diese gerne im Rahmen eines Einspruchs oder, noch besser, im Vorfeld an den Strafsenat übermittelt werden.
              Einsprüche ohne sachliche Grundlage werden künftig ignoriert, da Meinungen von Teams oder Fans nicht als objektiv angesehen werden können.
            </p>
            <p>
              Es ist unser Wunsch, dass der Strafsenat so wenig wie möglich zu tun hat und keine Strafen ausgesprochen werden müssen.
              Daher bitten wir alle Teams, uns zu unterstützen, damit in Zukunft der sportliche Wettkampf im Vordergrund steht.
            </p>

            <p>
              Wir wünschen allen eine erfolgreiche und faire Saison!
            </p>
            <p>
              Mit freundlichen Grüßen,
              Der Vorstand des ÖKFB
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  className: PropTypes.string,
};

export default ImageHeader;
