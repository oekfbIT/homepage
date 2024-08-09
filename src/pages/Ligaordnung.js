import LongTextItem from "../components/LongTextItem";
import styles from "./ligaordnung.module.css";
import FooterMain from "../components/FooterMain";
import Navigationbar from "../components/Navigationbar";
import BundeslanderSelectionRow from "../components/BundeslanderSelectionRow";
import StatItem from "../components/StatItem";

const Ligaordnung = () => {
    return (
        <div className={styles.impressium}>
            <Navigationbar/>
            <BundeslanderSelectionRow/>

            <div className={styles.sterreichischerKleinfeldFubParent}>
                <div className={styles.sterreichischerKleinfeldFub}>
                    Österreichischer Kleinfeld Fußball Bund
                </div>
                <div className={styles.impressum}>Ligaordnung</div>
            </div>

            <div className={styles.longtextitem}>
                <StatItem
                    title="§ 1 – Ligarhythmus und Wertung"
                    value={`1. Der Ligabetrieb findet von September bis Juni, mit einer Winterpause von November bis Februar, statt.
2. Die Spiele finden im Wochenrhythmus statt. Ausweichtermine werden vom Bund festgelegt.
3. Die Spiele werden an Sonn- und Feiertagen ausgetragen.
4. Es gibt für Hin- und Rückrunde je einen Termin für die Nachtragsspiele. Dieser wird vor Saisonbeginn bekannt gegeben. Die Spiele am Nachtragstermin können nicht mehr verschoben werden.
5. Bei Punktegleichheit gilt das direkte Duell der beiden Mannschaften (ohne Auswärtstorregel). Danach die Tordifferenz und die Anzahl der geschossenen Tore. Falls sich alle Faktoren die Waage halten, wird aufgrund der Fair Play Wertung entschieden.
6. Bei einem Spielabbruch wird das Spiel mit 0:6 für die Mannschaft, welche nicht für den Spielabbruch verantwortlich ist gewertet. Ausnahme: Wenn die unschuldige Mannschaft mit mehr als 6 Toren in Führung war, kein Nachteil für diese Mannschaft entstanden ist und 40 Minuten gespielt wurden. In diesem Fall kann das Ergebnis bestehen bleiben.
8. Bei einem Spielabbruch aufgrund von nicht beeinflussbaren Ereignissen (Wetter, Schiedsrichterverletzung, schwere Verletzung eines Spielers…) wir das Spiel wiederholt, außer es wurden 40 Minuten gespielt. Falls 40 Minuten gespielt wurden, bleibt das Ergebnis bestehen.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 2 – Termine"
                    value={`1. Zahlungsfristen:
• 5. August für die Hinrunde (Herbstsaison)
• 5. Februar für die Rückrunde (Frühjahrssaison)
2. Eine Abmeldung für die kommende Saison ist bis spätestens 5. Mai durchzuführen.
3. Abgabe der Wunschzeiten:
• 10. August für die Hinrunde (Herbstsaison)
• 10. Februar für die Rückrunde (Frühjahrssaison)
4. Spielabsagen und Spielverschiebungen:
• Bis 18:00 Uhr am Vortag des Spieles`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 3 – Allgemeine Vorgaben"
                    value={`1. Der Spielort wird vom Bund festgelegt.
2. Die Anstoßzeiten können bis 3 Tage vor dem Spiel zur Stichzeit 12:00 Uhr angepasst werden. Diese beinhalten in der Regel eine maximale Verschiebung um 2 Stunden.
3. Die Anstoßzeiten werden spätestens ein Monat vor dem Ligaspiel festgesetzt und werden nicht mehr geändert. Wunschzeiten können abgegeben werden (sh. §2, Pkt.3)
4. In der laufenden Saison können Spielzeitänderungen nur durch Spieltausch vorgenommen werden. Dafür müssen alle betroffenen Mannschaften einem Spieltausch zustimmen. Die Organisation eines Spieltauschs obliegt den betreffenden Teams. Bei Zustimmung aller Mannschaften ist der Bund zu informieren. Alle betroffenen Mannschaften haben dem Bund eine Homepage Nachricht mit der Zustimmung zu senden.
5. Heim- und Auswärtsrecht bezieht sich lediglich auf die Trikotwahl und die Zuständigkeit der Spielbälle.
6. Die Mannschaft muss zu Spielbeginn aus mindestens 5 Feldspieler und einem Tormann bestehen, ansonsten gilt das Spiel als 0:6 verloren. Es entsteht eine Geldstrafe aufgrund Nicht Antretens laut Ligaordnung (sh. §16, Pkt.11) Bei einem Spielabbruch (weniger als 4 Spieler) durch Verletzungen oder Sperren während dem Spiel entfällt die Geldstrafe.
7. Der Trainer kann online angemeldet werden (Funktion auf der Homepage). Während eines Ligaspiels darf sich nur eine, als Trainer gemeldete Person, im Bereich der Ersatzbank befinden. 
8. Auf der Ersatzbank dürfen sich nur auf dem Blankett stehende Spieler und eine als Trainer gemeldete Person befinden. Jede Mannschaft hat dafür zu sorgen, dass diese Regel eingehalten wird. Falls sich, nach Ermahnung des Schiedsrichters, noch unerlaubte Personen im Bereich der Ersatzbank befinden folgt eine Geldstrafe (sh. §16, Pkt. 19)
9. Wechselspielern und Trainern ist es untersagt das Spielfeld oder den Bereich der gegnerischen Wechselbank zu betreten. 
10. Wechselspieler müssen jederzeit die vom Bund bereitgestellten Überziehleibchen tragen. Es sind nur Überziehleibchen des Bundes gestattet.
11. Das Ergebnis ist unmittelbar nach dem Spiel zu kontrollieren und gegeben falls mit dem Schiedsrichter zu klären. Nachträgliche Änderungen am Ergebnis, Torschützen, Karte o.ä. werden nicht durchgeführt, außer diese wurden vom Schiedsrichter gemeldet.
`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 4 – zweite Mannschaften"
                    value={`1. Es ist möglich bis zu zwei Mannschaften pro Vertrag anzumelden. Diese unterliegen besonderen Vorgaben. Die zweite Mannschaft darf nicht in der gleichen oder einer höheren Liga wie die erste Mannschaft spielen.
2. Alle Spieler können am Wochenende bei beiden Mannschaften eingesetzt werden.
3. Der Bund ist bemüht, den Spielplan so einzuteilen, dass beide Mannschaften hintereinander spielen.
4. Beide Mannschaften müssen mit dem gleichen Namen und Logo antreten und müssen klar als Team 1 und Team 2 erkennbar sein.
5. Die zweite Mannschaft unterliegt ebenso der Ligaordnung. Insbesondere auch betreffend Kündigung und Vertragssituation.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 5 – Blankett"
                    value={`1. Jede Mannschaft muss selbstständig ein online Blankett für das jeweilige Meisterschaftsspiel eingeben. Für die Kontrolle des eingetragenen Blanketts ist das jeweilige Team verantwortlich.
Die Blankette können vor dem Spiel mit dem Schiedsrichter kontrolliert werden. Die Aufstellungen liegen dem Schiedsrichter vor. Der Schiedsrichter muss dazu, jedoch von einem Mannschaftsleiter aufgefordert werden. Falls Die Blankett Kontrolle nicht durchgeführt wurde und ein Fehler während dem Spiel entdeckt wird, liegt der Fehler beim Team selbst.
2. Ein Blankett Fehler liegt vor wenn:
• Bei einem oder mehreren Spielern keine Rückennummer eingetragen wurde.
• Ein oder mehrere Spieler mit einer anderen Nummer auflaufen als auf dem Blankett angegeben. 
• Der Tormann nicht mit der Trikotnummer 1 eingetragen ist. Ersatztormann muss mit einer anderen Nummer eingetragen und der Schiedsrichter vor dem Spiel darüber informiert werden.
In den obigen Fällen führt eines der Fehler zu einer Geldstrafe (sh. §16, Pkt.18)
• Ein oder mehrere Spieler, welche zum Einsatz kommen, sind auf dem Blankett nicht angeführt.
Im obigen Fall führt der Fehler zu einer automatischen Strafverifizierung und gegeben falls zu einer Geldstrafe. (Ausnahme: Die Mannschaft, welche den Fehler begangen hat verliert das Spiel. In diesem Fall bleibt das Ergebnis bei einem höheren Ausgang bestehen.)
3. Bei einem Fehlen des Blanketts wird das Spiel als 0:6 verloren gewertet.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 4 – zweite Mannschaften"
                    value={`1. Es ist möglich bis zu zwei Mannschaften pro Vertrag anzumelden. Diese unterliegen besonderen Vorgaben. Die zweite Mannschaft darf nicht in der gleichen oder einer höheren Liga wie die erste Mannschaft spielen.
2. Alle Spieler können am Wochenende bei beiden Mannschaften eingesetzt werden.
3. Der Bund ist bemüht, den Spielplan so einzuteilen, dass beide Mannschaften hintereinander spielen.
4. Beide Mannschaften müssen mit dem gleichen Namen und Logo antreten und müssen klar als Team 1 und Team 2 erkennbar sein.
5. Die zweite Mannschaft unterliegt ebenso der Ligaordnung. Insbesondere auch betreffend Kündigung und Vertragssituation.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 6 – Spielball"
                    value={`1. Die Spielbälle werden von der Liga gestellt. Jede Mannschaft muss jedoch zwei Matchbälle mitführen (ausreichend mit Luft versorgt) falls die Bälle der Liga während des Spieltages verloren gehen.
2. Jede Heimmannschaft erhält am Anfang des Spiels vom Schiedsrichter zwei Spielbälle und ist bis zum Ende des Spiels für diese verantwortlich. Sollten die Bälle unauffindbar, verschossen werden oder verloren gehen, werden diese der Heimmannschaft in Rechnung gestellt. (sh. §16, Pkt.22)
2.a. Ausnahme: Wenn der Ball von der Auswärtsmannschaft absichtlich weggeschossen wird. Dieser Fall muss vom Schiedsrichter bestätigt werden.
2.b. Ausnahme: Der Spielball geht kaputt.
3. In Situationen, in denen die Spielbälle nicht erreichbar oder kaputt sind, ist das Weiterspielen mit den Bällen der Heimmannschaft erlaubt. Die Heimmannschaft ist jedoch angehalten, den Spielball sofort wieder zu beschaffen.
4. Sollte die Heimmannschaft keine Bälle mitführen und diese werden benötigt, folgt eine Geldstrafe (sh. §16, Pkt. 23). Nach den Bällen der Heimmannschaft werden die Bälle der Gastmannschaft verwendet. Auch hier folgt die oben genannte Strafe, falls keine Bälle mitgeführt werden.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 7 - Trikots"
                    value={`1. Die Heimmannschaft kann bis Donnerstag 12:00 die Garnitur für das Wochenende auswählen (Tauschfunktion auf der Homepage). Die Heimmannschaft muss in den ausgewählten Farben spielen. Die Farben der Trikots und Stutzen der Auswärtsmannschaft können sich von den Farben auf der Homepage unterscheiden. Sie dürfen jedoch nicht dieselbe Farbe wie die Heimmannschaft haben.
2. Sollte die Auswärtsmannschaft mit gleichen Trikots oder Stutzenfarben zum Meisterschaftsspiel antreten als die Heimmannschaft (vorausgesetzt diese hat die Vorgaben auf der Homepage eingehalten), wird das Spiel strafverifiziert und es findet ein Freundschaftsspiel statt. 
3. Falls der Torwart während des Spiels mit einem Feldspieler getauscht wird, muss der ehemalige Torwart das gleiche Trikot inkl. Hosen und Stutzen wie die restlichen Feldspieler tragen.
4. Die Mannschaften sind selbst dafür verantwortlich, dass die dargestellten Trikotgarnituren auf der Homepage aktuell sind. Ansonsten ist dem Bund ein Bild der neuen Trikotgarnitur zu senden.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 8 - Sportplätze"
                    value={`1. Schuhwerk: Da der Bund den Meisterschaftsbetrieb im Regelfall auf Kunstrasenplätze austrägt, ist es lediglich erlaubt mit dafür zugelassenen Schuhen zu Spielen. Diese sind: Flache Sohle, IN Schuhe, MG Schuhe, SG Schuhe, TF Schuhe, AG Schuhe, FG Schuhe. Eisenstollen oder 6er sind nicht erlaubt.
2. Die Kabinen sind immer sauber und frei von Müll zu hinterlassen. Reste und Abfall werden sanktioniert. Der Sportplatz ist stets frei von Müll (Plastikflaschen, Obstreste, Tapes und ähnlichem) zu verlassen.
3. An Sportplätzen, welche eine geöffnete Kantine führen, ist das Mitnehmen von Speisen und Getränken strengstens untersagt, bei Zuwiderhandlungen folgt eine Strafe laut (sh. §16, Pkt. 21).
4. Es ist strengstens verboten auf einem Kunstrasenplatz zu rauchen. Mannschaften tragen die Verantwortung für Zuschauer und Betreuer, welche unmissverständlich der Mannschaft zugeordnet werden können. Das Rauchen auf dem Kunstrasenplatz ist ausnahmslos mit einer Geldstrafe verbunden (sh. §16, Pkt. 22)`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 9 – Spielberechtigung"
                    value={`1. Die Spielberechtigungen jedes Spielers sind auf der Homepage des Bundes, unter dem Mannschaftsprofil ersichtlich.
2. Jeder Spieler muss mit den vom Bund geforderten Daten, auf der Homepage des Bundes angemeldet und spielberechtigt sein. Spieler, welche bereits beim Bund gespielt haben und ein Profil haben, dürfen nicht neu angemeldet werden. Eine Neuanmeldung eines solchen Spielers führt zu einer Geldstrafe (sh. §16, Pkt.16)
2.a. Nach der Online-Anmeldung des Spielers, kann der Mannschaftsleiter über die Homepage, Freischaltungsemails an alle Spieler senden. Mit dieser Email kann sich der Spieler freischalten. Erst nach Eingang der geforderten Unterlagen seitens des Bundes, ist der Spieler spielberechtigt.
3. Sollten Spieler ohne ihr ausdrücklicher Zustimmung angemeldet werden, folgt eine Geldstrafe (sh. §16, Pkt. 17)
4. Spieler jeder Spielklasse des ÖFB sind zugelassen. Für internationale Bewerbe sind Spieler der ersten und zweiten Bundesliga ausgeschlossen (Europa- und Weltmeisterschaft sowie Championsleague und Eurocup)
5. Jede Spieleranmeldung muss bis Donnerstag 12:00 Uhr, vom Mannschaftsleiter abgeschickt werden. Der Spieler hat bis Freitag 23:59 Uhr Zeit die geforderten Unterlagen hochzuladen. Danach ist eine Spielberechtigung für den Sonntag sichergestellt.
6. Meistercup und Playoff: Es können für den Meistercup und Playoff lediglich Spieler eingesetzt werden, welche in der Meisterschaft bereits zum Einsatz gekommen sind. Neu angemeldete Spieler haben keine Spielberechtigung.
7. Beim Einsatz eines Spielers ohne Spielberechtigung oder Sperre wird das Spiel als 0:6 verloren gewertet. Weitere Strafen werden vom Strafsenat festgelegt.
8. Sperren:
• 8.a. Rote Karte: automatische Sperre von -mindestens- einem Spiel. Weitere Strafen werden vom Strafsenat festgelegt.
• 8.b. Gelb-Rote Karte: automatische Sperre von einem Spiel
• 8.c. Vierte gelbe Karte in der Meisterschaft: automatische Sperre von einem Spiel
• 8.d. Erhält ein Spieler in einem Spiel zwei gelbe Karten (gelbrot) dann wird die erste gelbe Karte nicht gezählt. Die gelbrote Karte egalisiert beide gelben Karten im Spiel.
• 8.e. Die Karten sind Wettbewerbsübergreifend - die Sperren gelten immer für das nächste stattfindende Spiel. Besitzt der Verein mehrere Mannschaften im Ligabetrieb des ÖKFB gelten die Strafen nur für das Team, in dem die Strafe erhalten wurde. Ausnahme: langfristige Sperren über ein Spiel hinaus.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 10 - Finanzen"
                    value={`1. Die Kosten der Liga betragen €70,- pro Spiel. Diese werden pro Halbjahr im Voraus verrechnet (sh. §2, Pkt.1). Bei Neuanmeldungen wird eine einmalige Anmeldegebühr in Höhe von € 300,- erhoben, die nach Abschluss der ersten Saison wieder gutgeschrieben wird.
1.a. Es ist möglich die komplette Saison im Voraus zu bezahlen. Zahlungsverzug ist ohne die Zustimmung des Bundes nicht gestattet.
2. Die Ligagebühr kann jährlich auf Basis der Inflationsrate angepasst werden. Die genaue Höhe der Anpassung wird den Mannschaften rechtzeitig mitgeteilt.
3. Die Spieleranmeldungen sind mit einer einmaligen Gebühr von €5,- pro Spieler verbunden. Spieleranmeldungen können nur mit genügend Guthaben am Mannschaftskonto durchgeführt werden.
4. Der Bund ist berechtigt Mannschaften, welche die Saisongebühr verspätet, bezahlen aus der Liga bis zur Begleichung, zu suspendieren. Sollten Mannschaften, bis zum Start der Hin- bzw. Rückrunde die Zahlungen nicht getätigt haben, können diese aus der Liga suspendiert werden. Der Ligabeitrag bleibt weiterhin als Pönale offen.
5. Die Finanzen sind unter dem Controlpanel Punkt „Finanzen“ auf der Homepage ersichtlich.
6. Falls das Guthaben der Mannschaft unter € 0,00 sinkt, wird der Account automatisch vom System gesperrt und bleibt bis das Konto wieder positiv ist geschlossen. Dadurch kann die Mannschaft kein Online-Blankett für den Spieltag eintragen und das Meisterschaftsspiel wird aufgrund von fehlendem Blankett strafverifiziert.
6.a. Die Mannschaft hat die Möglichkeit sich am Spieltag selbst freizuschalten.
Es entstehen folgende Strafen:
1. Mal – €50,00
2. Mal – €100,00
3. Mal – €150,00
Danach folgt eine Suspendierung
7. Mannschaften haften selbst dafür, dass offene Beträge rechtzeitig am Konto vom ÖKFB einlangen. 
8. Die Gebühren der Mannschaften müssen mit einer Überweisung erfolgen. Einzelne Zahlungen von Spielern sind nicht zugelassen.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 11 - Ausstieg und Kündigung"
                    value={`1. Der Vertrag wird auf unbestimmte Zeit abgeschlossen. Der Vertrag beinhaltet eine Kündigungsfrist von 7 Werktagen nach Unterzeichnung. 
2. Ein ordnungsgemäßer Ausstieg aus dem Bund ist immer nur zu Saisonende möglich. Die Mannschaft muss fristgerecht (sh. §2, Pkt.2) durch eine schriftliche Kündigung via E-Mail "support@oekfb.eu", aus dem Bund austreten. Es fallen keine weiteren Kosten für die Folgesaison an, der Verein ist damit kein Mitglied des ÖKFB mehr. Dies ist möglich, wenn die Mannschaft zum Zeitpunkt der Kündigung kein negatives Mannschaftsguthaben besitzt. Ein Guthaben wird nach einer Kündigung am 15. August zurückerstatten.
3. Kommt die Kündigung nicht fristgerecht ist die Mannschaft für eine weitere Saison gebunden. Die Saisongebühren der folgenden Saison bleiben aufrecht. Nur durch die Nennung eines Ersatzteams, welche die Position der bestehenden Mannschaft übernimmt, ist ein Ausstieg am Ende der Saison, ohne Einhaltung einer Frist möglich. In diesem Fall wird ein etwaiges Guthaben aus der Liga zurückerstattet und alle Verpflichtungen der Mannschaft an die neue Mannschaft übergegeben. Der Bund entscheidet, ob die neue Mannschaft die Vorgaben erfüllt. Eine Übernahme ist erst nach Unterzeichnung eines Vertrages vollständig.
4. Eine Übernahme während der Saison ist immer zwischen Hin- und Rückrunde möglich. Die übernehmende Mannschaft steigt mit 0 Punkten in die Saison ein.
5. Anmeldungen zu Turnieren des ÖKFB wie Meistercup, Playoff oder dergleichen, sind immer verbindlich und können nach einer Anmeldung nicht abgesagt werden. Bei einer Absage folgt eine Geldstrafe (sh. §2, Pkt.1).
6. Eine Mannschaft, die für die kommende Saison gekündigt hat, verliert das Recht am Ende der Saison am Meistercup oder dem Playoff für eine höhere Liga teilzunehmen.
7. Sollte eine Mannschaft, welche zu Saisonende gekündigt hat, vor Start der neuen Saison und nach dem 15. Juni umentscheiden, kommt dies einer Neuanmeldung gleich. Die Mannschaft muss in der untersten Liga anfangen.
8. Sollte eine Mannschaft den Spielbetrieb während der Saison oder kurz vor Saisonbeginn einstellen, ist eine Strafe von €70,- je offenen Spiel, an die jeweiligen Gegner zu bezahlen. Die Ligagebühren bleiben additional aufrecht.
9. Stellt eine Mannschaft während der Saison der Spielbetrieb ein, werden alle Spiele der Hin- oder Rückrunde mit 0:6 gewertet. Falls die Hinrunde komplett gespielt wurde, und es zu keiner Wettbewerbsverzerrung gekommen ist, bleiben diese Ergebnisse bestehen.
10. Nach der Kündigung erhaltene Strafen oder sonstige Zahlungen sind bis zum Saisonende zu bezahlen.
11. Die Haftung für den Vertrag übernehmen beide unterschreibenden Personen im vollen Umfang. Sollte es zu einem Rechtstreit kommen, haften beide Parteien für den Vertrag. Obgleich der Vertrag gegenüber einem Verein oder einer Firma abgeschlossen wurde.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 12 – Kontaktdaten"
                    value={`1. Jeder Mannschaftsleiter ist verantwortlich, jegliche Änderungen bezüglich der Kontaktdaten, auf der Homepage des Bundes zu ändern. Die Mannschaft haftet selbst für nicht erhaltene Nachrichten aufgrund veralteter Daten.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="$ 13 - Spielabsagen"
                    value={`1. Eine Spielabsage seitens des Bundes kann jederzeit aus bekanntzugebenden Gründen folgen. Dies kann auf zwei Arten erfolgen:
1.a. Der Komplette Spieltag wird abgesagt. In diesem Fall obliegt es dem Bund, wann der Spieltag nachgeholt wird.
1.b. Ein Spiel wird abgesagt: Nachholtermin wird vom Bund festgelegt.
2. Erscheint eine Mannschaft zu spät zur angegebenen Spielzeit, wird das Spiel ebenfalls mit 0:6 Toren gewertet.
3. Entspricht eine 0:6 Niederlage (Spielabsage) als Wettbewerbsverzerrung, muss das Spiel auf jeden Fall nachgeholt werden. Ist ein Nachholtermin nicht möglich, entscheidet der Bund über das weitere Vorgehen.
4. Spielabsagen müssen auf der Homepage online bekannt gegeben werden. Bei einer Spielabsage werden folgende Strafen verhängt:
1. Spielabsage der Saison – €170,00
2. Spielabsage der Saison – €270,00
3. Spielabsage der Saison – €370,00
Danach folgt eine Suspendierung.
5. Erscheint eine Mannschaft nicht zum Meisterschaftsspiel ohne das Spiel online mindestens am Vortrag bis 21:00 Uhr abzusagen, wird das Spiel mit 6:0 gewertet und eine zusätzliche Strafe (sh. §16, Pkt.11) verhängt.
6. Dem Gegner der Mannschaft, der das Spiel abgesagt hat, werden automatisch €70,- gutgeschrieben.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="$ 14 - Spielverschiebungen"
                    value={`1. Jede Mannschaft hat einmal im Herbst und einmal im Frühjahr die Möglichkeit 1 Spiel zu verschieben. Die Termine für die Nachtragsspiele werden vor Saisonbeginn bekannt gegeben. Folgende Punkte sind für eine erfolgreiche Spielverschiebung erforderlich,
• Zustimmung beider Mannschaften
• Zustimmung des Bundes
• Terminliche Möglichkeit eines Nachtragspiels am vom Bund angegebenen Spieltag für Nachtragspiele, nach Ende der Hinrunde bzw. zum Ende der Rückrunde. Nach dem Nachtragstermin im Frühjahr sind keine Spielverschiebungen mehr möglich.
• Nicht-Betroffenheit von Absprachen oder Wettbewerbsverzerrung.
2. Eine Verschiebung ist nur dann erlaubt, wenn beide Mannschaften noch kein Spiel am Nachtragstermin haben. Die Mannschaft, welche das Spiel verschiebt, bezahlt die Kosten des neuerlich angesetzten Spiels von €70,00,- Spielverschiebungen sind per Homepage Nachricht von beiden Teams zu beantragen.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 15 - Transfer"
                    value={`1. Es ist möglich einen Spieler eines anderen Teams zu verpflichten. Dazu muss man einen Transfer beantragen. Beim ÖKFB entscheidet einzig und alleine der Spieler bei welchem Verein er spielen möchte. Der aktuelle Verein darf einen Wechsel nicht verweigern. 
2. Ein Transfer ist immer nur innerhalb der spielfreien Zeit (Sommer- bzw. Winterpause) durchzuführen. Das Transferfenster wird auf den Social-Media Plattformen, sowie auf der Homepage bekannt gegeben. Transfers während des Transferfensters sind kostenlos.
3. Ein Spieler darf nur einmal pro Jahr seinen Verein wechseln. Hat er vor einer Wechselperiode bereits seinen Verein gewechselt, wird dieser in der nächstmöglichen Periode durchgeführt.
4. Hat ein Spieler mindestens eine Halbsaison bei keinem Verein gespielt, kann er jederzeit als Transferspieler eingesetzt werden. Ein Spieler, der bereits 6 Monate kein Meisterschaftsspiel oder Pokalspiel bestritten hat, ist ein freier Spieler und kann sofort zu einem neuen Verein wechseln und ab sofort auch für diese Spielen.
5. Ausschlaggebend für die Durchführung eines Transfers ist die Transferanfrage, durch die aufnehmende Mannschaft, an den Bund und die E-Mail Bestätigung des Spielers.
6. Falls ein Spieler keine Bestätigungsmail für den Transfer bekommt, muss der Spieler eine Mail an den Bund (support@oekfb.eu) senden, in der er den Transfer bestätigt. Der Transfer ist jedoch vorher von der Mannschaft zu beantragen.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />
                <StatItem
                    title="§ 16 - Strafen"
                    value={`1. Die Strafen werden vom Strafsenat festgelegt. Folgende Strafen sind als Richtlinie anzusehen. Der Strafsenat kann die hier stehenden Strafen je nach Vorfall anpassen.
2. Schiedsrichterbeleidigung: 2 bis 10 Spiele Sperre
3. Schwere Schiedsrichterbeleidigung bzw. Bedrohung 10 bis 20 Spiele Sperre
4. Tätlichkeit gegen den Schiedsrichter: 5 bis 10 Spiele Sperre
5. Schwere Tätlichkeit gegen den Schiedsrichter: 10 bis 40 Spiele Sperre
6. Tätlichkeit von einem Spieler: 3 bis 10 Spiele Sperre 
7. Schwere Tätlichkeit von einem Spieler: 10 bis 20 Spiele Sperre. 
8. Wiederholte schwere Tätlichkeiten eines Spielers nach einer abgesessenen Sperre: lebenslanger Ausschluss aus dem Spielbetrieb.
9. Tätlichkeit von mehr als zwei Spieler einer Mannschaft (Rudelbildung): 3 bis 10 Spiele Sperre der betroffenen Spieler und eine Geldstrafe von 300,00 € an die Mannschaft.
10. Rassistisches Verhalten (Gesten, Ausdrücke, ...): 10 bis 40 Spiele Sperre.
11. Nichtantreten zum Meisterschaftsspiel ohne Absage (oder eine zu kurzfristige am Spieltag getätigte Absage): Geldstrafe von 200,00 € an den Bund. Die in §13, Pkt 5 erläuterten Strafen werden addiert.
12. Nichtabgabe von Onlineblankett: Automatische 0:6 Wertung. Geldstrafe von 100,00 €
13. Einsatz eines nicht Spielberechtigten Spielers (falsche Angaben am Blankett): 0:6 Wertung. Bei einer Niederlage mit einem höheren Ausgang zählt das Ergebnis, es folgt eine Geldstrafe von 50,00 €. Falls der Spieler nicht beim Team gemeldet ist, beträgt die Strafe 200,00 € und einer 0:6 Wertung.
14. Antreten mit falschem Trikot oder falschen Stutzen (gleiche Farbe wie der Gegner): 50,00 € Geldstrafe und 0:6 Wertung.
15. Zahlungsverzug des Ligabeitrages 100,00 € alle zwei Wochen.
16. Neuanmeldung eines bereits im System bestehenden Spielers 50,00 €
17. Anmeldung eines Spielers ohne dessen Zustimmung 500,00 €
18. Blankettfehler wie unter §3 Pkt. 3 beschrieben führen zu einer Geldstrafe von 25,00 €
19. Nicht befugte Personen auf der Ersatzbank. 50,00 €
20. Abwesenheit bei der Ligasitzung. 50,00 €
21. Bundschädigendes Verhalten 200,00 €
22.Nicht an den Schiedsrichter retournierter Spielball 30,00 €
23. Heimteam kann im Bedarfsfall keinen Spielball stellen 30,00 €
24. Mitführen von Speisen und Getränken an Plätzen mit geöffneter Kantine 100,00 €
25. Rauchen auf dem Kunstrasenplatz 50,00 €
26. Unbefugtes Betreten des Spielfeldes durch Ersatzspieler, Fans oder dem Trainer während dem Spiel. Behauptungen wie das Schlichten von Streitereien oder Auseinandersetzungen auf dem Platz während dem laufenden Spiel sind nicht zulässig. Dies ist die Aufgabe des Schiedsrichters und nicht die der Ersatzspieler oder Trainer. 150,00 € Strafe (Bei Rudelbildung kommt §6 Pkt. 5 zu Geltung)
27. Absage nach verbindlicher Anmeldung zu einem Turnier des Bundes 300,00 €
28. Nichterscheinen nach einer verbindlichen Anmeldungen zu einem Turnier des Bundes ohne Absage 1.000,00€`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <StatItem
                    title="§ 17 - Allgemeines"
                    value={`Jede Mannschaft ist selbst verantwortlich die Ligaordnung in der aktuellen Fassung zu kennen und sämtliche Mannschaftsmitglieder darüber zu informieren.
Sollten Teile dieses Regelwerks modifiziert werden, so können diese Änderungen keine rückwirkende Gültigkeit erlangen.
Die letzte Änderung der Ligaordnung steht am Ende.
Alle Mannschaftsleiter und Spieler haben sich dem Bund gegenüber Fair und Loyal zu verhalten.
Jeder Mannschaftsleiter hat bei allen Ligasitzungen Anwesenheitspflicht. Die Ligaabstimmungen werden durch die Mehrheitsentscheidung geregelt. Abwesende Mannschaftsstimmen werden zu der Mehrheit addiert. Mannschaften können sich durch andere Teams vertreten lassen. Eine Mannschaft kann nur eine weitere Mannschaft vertreten.
Bei Abwesenheit des Mannschaftsleiters, hat dieser sich über die Informationen, Abstimmungen und Änderungen der letzten Sitzung am laufenden zu halten.`}
                    statitemFlex="unset"
                    statitemAlignSelf="stretch"
                />

                <a>letzte Änderung: 06.08.2024</a>
            </div>

            <FooterMain/>
        </div>
    );
};

export default Ligaordnung;
