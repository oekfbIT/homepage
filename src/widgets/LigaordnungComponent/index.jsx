import React, { useState, useEffect } from 'react';
import Spring from '@components/Spring';
import styles from './styles.module.scss';

const LigaordnungComponent = () => {
    return (
        <Spring className={`card d-flex flex-column card-padded ${styles.container}`} style={{ padding: '10px' }} >

        <h1 style={{ marginBottom: '20px' }}>Ligaordnung</h1>
            <div>
                <h2 className={styles.section}>Inhalt:</h2>
                <ol className={styles.section}>
                    <li>§ 1 – Ligarhythmus und Wertung</li>
                    <li>§ 2 – Termine</li>
                    <li>§ 3 – Allgemeine Vorgaben</li>
                    <li>§ 4 – zweite Mannschaften</li>
                    <li>§ 5 – Blankett</li>
                    <li>§ 6 – Spielball</li>
                    <li>§ 7 - Trikots</li>
                    <li>§ 8 - Sportplätze</li>
                    <li>§ 9 – Spielberechtigung</li>
                    <li>§ 10 - Finanzen</li>
                    <li>§ 11 - Ausstieg und Kündigung</li>
                    <li>§ 12 – Kontaktdaten</li>
                    <li>§ 13 - Spielabsagen</li>
                    <li>§ 14 - Spielverschiebungen</li>
                    <li>§ 15 - Transfer</li>
                    <li>§ 16 - Strafen</li>
                    <li>§ 17 - Allgemeines</li>
                </ol>
                {/* § 1 - § 17 Content */}
                <section className={styles.section}>
                    <h2 style={{ marginBottom: '20px' }}> § 1 – Ligarhythmus und Wertung</h2>
                    <p>1. Der Ligabetrieb findet von September bis Juni, mit einer Winterpause von Anfang November bis
                        Ende Februar, statt.</p>
                    <p>2. Die Spiele finden im Wochenrhythmus statt. Ausweichtermine werden vom Bund festgelegt.</p>
                    <p>3. Die Spiele werden an Sonn- und Feiertagen ausgetragen.</p>
                    <p>4. Es gibt für Hin- und Rückrunde je einen Termin für die Nachtragsspiele. Dieser wird vor
                        Saisonbeginn bekannt gegeben.</p>
                    <p>5. Es gibt für Hin- und Rückrunde je einen Termin für die Nachtragsspiele. Dieser wird vor
                        Saisonbeginn bekannt gegeben.</p>
                    <p>6. Bei Punktegleichheit gilt das direkte Duell der beiden Mannschaften (ohne Auswärtstorregel).
                        Danach die Tordifferenz und die Anzahl der geschossenen Tore. Falls sich alle Faktoren die Waage
                        halten, wird ein Entscheidungsspiel angesetzt.</p>
                </section>
                <section className={styles.section}>
                    <h2 style={{marginBottom: '20px'}}> § 2 – Termine</h2>
                        <p>1. Zahlungsfristen:</p>
                        <ul>
                            <li>5. August für die Hinrunde (Herbstsaison)</li>
                            <li>5. Februar für die Rückrunde (Frühjahrssaison)</li>
                        </ul>
                        <p>2. Eine Abmeldung für die kommende Saison ist bis spätestens 5. Mai durchzuführen.</p>
                        <p>3. Abgabe der Wunschzeiten:</p>
                        <ul>
                            <li>10. August für die Hinrunde (Herbstsaison)</li>
                            <li>10. Februar für die Rückrunde (Frühjahrssaison)</li>
                        </ul>
                </section>
                <section className={styles.section}>
                    <h2 style={{marginBottom: '20px'}}>§ 3 – Allgemeine Vorgaben</h2>
                    <p>1. Der Spielort wird vom Bund festgelegt.</p>
                    <p>2. Die Anstoßzeiten können bis 3 Tage vor dem Spiel zur Stichzeit 12:00 Uhr angepasst werden.
                        Diese beinhalten in der Regel eine maximale Verschiebung um 2 Stunden.</p>
                    <p>3. Die Anstoßzeiten werden spätestens ein Monat vor dem Ligaspiel festgesetzt und werden nicht
                        mehr geändert. Wunschzeiten können abgegeben werden (sh. §2, Pkt.3)</p>
                    <p>4. In der laufenden Saison können Spielzeitänderungen nur durch Spieltausch vorgenommen werden.
                        Dafür müssen alle betroffenen Mannschaften einem Spieltausch zustimmen. Die Organisation eines
                        Spieltauschs obliegt den betreffenden Teams. Bei Zustimmung aller Mannschaften ist der Bund zu
                        informieren. Alle betroffenen Mannschaften haben dem Bund eine Homepage Nachricht mit der
                        Zustimmung zu senden.</p>
                    <p>5. Heim- und Auswärtsrecht bezieht sich lediglich auf die Trikotwahl und die Zuständigkeit der
                        Spielbälle.</p>
                    <p>6. Jede Mannschaft muss 15 Minuten vor jedem Spiel am Spielort anwesend sein.</p>
                    <p>7. Die Mannschaft muss zu Spielbeginn aus mindestens 3 Feldspieler und einem Tormann bestehen,
                        ansonsten gilt das Spiel als 0:6 verloren. Es entsteht eine Geldstrafe aufgrund Nicht Antretens
                        laut Ligaordnung (sh. §16, Pkt.7) Bei Verletzungen oder Sperren während dem Spiel entfällt die
                        Geldstrafe.</p>
                    <p>8. Der Trainer kann online angemeldet werden (Funktion auf der Homepage) um einen Trainerausweis
                        zu erhalten. Der Trainerausweis muss während des Spieltages sichtbar am Körper getragen werden.
                        Während eine Ligaspiels darf sich nur eine Person mit Trainerausweis im Bereich der Ersatzbank
                        befinden. Wird der Trainerausweis an nichtberechtige Personen weitergegeben folgt eine
                        Geldstrafe (sh. §16, Pkt. 18)</p>
                    <p>9. Auf der Ersatzbank dürfen sich nur auf dem Blankett stehende Spieler und eine Person mit
                        Trainerausweis befinden. Jede Mannschaft hat dafür zu sorgen, dass diese Regel eingehalten wird.
                        Falls sich, nach mehrmaliger Ermahnung des Schiedsrichters, noch unerlaubte Personen im Bereich
                        der Ersatzbank befinden folgt eine Geldstrafe (sh. §16, Pkt. 15) Der Schiedsrichter ist ebenso
                        berechtigt, das Spiel zu unterbrechen oder gegebenenfalls abzubrechen.</p>
                    <p>10. Wechselspielern und Trainern ist es untersagt den Bereich der Ersatzbank zu verlassen.</p>
                    <p>11. Wechselspieler müssen jederzeit die vom Bund bereitgestellten Überziehleibchen tragen. Es
                        sind nur Überziehleibchen des Bundes gestattet.</p>
                </section>
                <section className={styles.section}>
                    <h2 style={{marginBottom: '20px'}}>§ 4 – zweite Mannschaften</h2>
                    <p>1. Es ist möglich bis zu zwei Mannschaften pro Vertrag anzumelden. Diese unterliegen besonderen
                        Vorgaben. Die zweite Mannschaft darf nicht in der gleichen oder einer höheren Liga wie die erste
                        Mannschaft spielen.</p>
                    <p>2. Alle Spieler können am Wochenende bei beiden Mannschaften eingesetzt werden.</p>
                    <p>3. Der Bund ist bemüht, den Spielplan so einzuteilen, dass beide Mannschaften hintereinander
                        spielen.</p>
                    <p>4. Sollte sich das Finanzkonto von einer der beiden Mannschaften mehr als 100€ im Minus befinden,
                        so sind beide Teams von einer Sperre betroffen.</p>
                    <p>5. Beide Mannschaften müssen mit dem gleichen Namen und Logo antreten und müssen klar als Team 1
                        und Team 2 erkennbar sein.</p>
                    <p>6. Die zweite Mannschaft unterliegt ebenso der Ligaordnung. Insbesondere auch betreffend
                        Kündigung und Vertragssituation.</p>
                </section>
                <section className={styles.section}>
                    <h2 style={{marginBottom: '20px'}}>§ 5 – Blankett</h2>
                    <p>1. Jede Mannschaft muss selbstständig ein online Blankett für das jeweilige Meisterschaftsspiel
                        eingeben. Für die Kontrolle des eingetragenen Blanketts ist das jeweilige Team
                        verantwortlich.</p>
                    <p>2. Die Blanketts können vor dem Spiel mit dem Schiedsrichter kontrolliert werden. Die
                        Aufstellungen liegen dem Schiedsrichter vor.</p>
                    <p>3. Ein Blankettfehler liegt vor wenn:</p>
                    <ul>
                        <li>Bei einem oder mehreren Spielern keine Rückennummer eingetragen wurde.</li>
                        <li>Ein oder mehrere Spieler mit einer anderen Nummer auflaufen als auf dem Blankett angegeben.
                            (Ausnahme: Der Schiedsrichter wird vor dem Anpfiff darüber informiert)
                        </li>
                        <li>Der Tormann nicht mit der Trikotnummer 1 eingetragen ist. Ersatztormann muss mit einer
                            anderen Nummer eingetragen und der Schiedsrichter vor dem Spiel darüber informiert werden.
                        </li>
                    </ul>
                    <p>In den obigen Fällen führt eines der Fehler zu einer Geldstrafe (sh. §16, Pkt.14)</p>
                    <ul>
                        <li>Ein oder mehrere Spieler, welche zum Einsatz kommen, sind auf dem Blankett nicht
                            angeführt.
                        </li>
                    </ul>
                    <p>Im obigen Fall führt der Fehler zu einer automatischen Strafverifizierung und gegebenfalls zu
                        einer Geldstrafe. (Ausnahme: Die Mannschaft, welche den Fehler begangen hat verliert das Spiel.
                        In diesem Fall bleibt das Ergebnis bei einem höheren Ausgang bestehen.)</p>
                    <p>4. Bei einem Fehlen des Blanketts wird das Spiel als 0:6 verloren gewertet.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 6 – Spielball</h3>
                    <p>1. Die Spielbälle werden von der Liga gestellt. Jede Heimmannschaft muss jedoch zwei Matchbälle
                        mitführen (ausreichend mit Luft versorgt) falls die Bälle der Liga während des Spieltags
                        verloren gehen.</p>
                    <p>2. Jede Heimmannschaft erhält am Anfang des Spiels vom Schiedsrichter zwei Spielbälle und ist bis
                        zum Ende des Spiels für diese verantwortlich. Sollten die Bälle unauffindbar, verschossen werden
                        oder verloren gehen, werden diese der Heimmannschaft in Rechnung gestellt. (sh. §16, Pkt.19)</p>
                    <p>2.a. Ausnahme: Wenn der Ball von der Auswärtsmannschaft absichtlich weggeschossen wird. Dieser
                        Fall muss vom Schiedsrichter bestätigt werden.</p>
                    <p>2.b. Ausnahme: Der Spielball geht kaputt.</p>
                    <p>3. In Situationen, in denen die Spielbälle nicht erreichbar sind, ist das weiterspielen mit den
                        Bällen der Heimmannschaft erlaubt. Die Heimmannschaft ist jedoch angehalten, den Spielball
                        sofort wieder zu beschaffen.</p>
                    <p>4. Sollte die Heimmannschaft keine Bälle mitführen und diese werden benötigt, folgt eine
                        Geldstrafe (sh. §16, Pkt. 20).</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 7 - Trikots</h3>
                    <p>1. Die Heimmannschaft kann bis Donnerstag 12:00 die Garnitur für das Wochenende auswählen
                        (Tauschfunktion auf der Homepage). Die Heimmannschaft muss in den ausgewählten Farben spielen.
                        Die Farben der Trikots und Stutzen der Auswärtsmannschaft können sich von den Farben auf der
                        Homepage unterscheiden. Sie dürfen nur nicht dieselbe Farbe wie die Heimmannschaft haben.</p>
                    <p>2. Sollte die Auswärtsmannschaft mit gleichen Trikots oder Stutzenfarben zum Meisterschaftsspiel
                        antreten als die Heimmannschaft (vorausgesetzt diese hat die Vorgaben auf der Homepage
                        eingehalten), wird das Spiel strafverifiziert und es findet ein Spiel ohne Wertung statt. Die
                        Wertung und die Strafen werden vom Strafsenat festgelegt.</p>
                    <p>3. Falls der Torwart während des Spiels mit einem Feldspieler getauscht wird, muss der ehemalige
                        Torwart das gleiche Trikot inkl. Hosen und Stutzen wie die restlichen Feldspieler tragen.</p>
                    <p>4. Die Mannschaften sind selbst dafür verantwortlich, dass die dargestellten Trikotgarnituren auf
                        der Homepage aktuell sind. Ansonsten ist dem Bund ein Bild der neuen Trikotgarnitur zu
                        senden.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 8 - Sportplätze</h3>
                    <p>1. Schuhwerk: Da der Bund den Meisterschaftsbetrieb im Regelfall auf Kunstrasenplätze austrägt,
                        ist es lediglich erlaubt mit dafür zugelassenen Schuhen zu Spielen. Diese sind: Flache Sohle, IN
                        Schuhe, MG Schuhe, SG Schuhe, TF Schuhe, AG Schuhe, FG Schuhe. Eisenstollen oder 6er sind nicht
                        erlaubt.</p>
                    <p>2. Die Kabinen sind immer sauber und frei von Müll zu hinterlassen. Reste und Abfall werden
                        sanktioniert. Der Sportplatz ist stets frei von Müll (Plastikflaschen, Obstreste, Tapes und
                        ähnlichem) zu verlassen.</p>
                    <p>3. An Sportplätzen, welche eine geöffnete Kantine führen, ist das Mitnehmen von Speisen und
                        Getränken strengstens untersagt, bei Zuwiderhandlungen folgt eine Strafe laut (sh. §16, Pkt.
                        21).</p>
                    <p>4. Es ist strengstens verboten auf einem Kunstrasenplatz zu rauchen. Mannschaften tragen die
                        Verantwortung für Zuschauer und Betreuer, welche unmissverständlich der Mannschaft zugeordnet
                        werden können. Das Rauchen auf dem Kunstrasenplatz ist ausnahmslos mit einer Geldstrafe
                        verbunden (sh. §16, Pkt. 22)</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 9 – Spielberechtigung</h3>
                    <p>1. Die Spielberechtigungen jedes Spielers sind auf der Homepage des Bundes, unter dem
                        Mannschaftsprofil ersichtlich.</p>
                    <p>2. Jeder Spieler muss mit den vom Bund geforderten Daten, auf der Homepage des Bundes angemeldet
                        und spielberechtigt sein. Spieler, welche bereits beim Bund gespielt haben und ein Profil haben,
                        dürfen nicht neu angemeldet werden. Eine Neuanmeldung eines solchen Spielers führt zu einer
                        Geldstrafe (sh. §16, Pkt.12)</p>
                    <p>2.a. Nach der Online-Anmeldung des Spielers, kann der Mannschaftsleiter über die Homepage,
                        Freischaltungsemails an alle Spieler senden. Mit dieser Email kann sich der Spieler
                        freischalten. Erst nach Eingang der geforderten Unterlagen seitens des Bundes, ist der Spieler
                        spielberechtigt.</p>
                    <p>3. Sollten Spieler ohne ihr ausdrücklicher Zustimmung angemeldet werden, folgt eine Geldstrafe
                        (sh. §16, Pkt. 13)</p>
                    <p>4. Spieler jeder Spielklasse des ÖFB sind zugelassen. Für internationale Bewerbe sind Spieler der
                        ersten und zweiten Bundesliga ausgeschlossen (Europa- und Weltmeisterschaft sowie
                        Championsleague und Eurocup)</p>
                    <p>5. Jede Spieleranmeldung muss bis Donnerstag 12:00 Uhr, vom Mannschaftsleiter abgeschickt werden.
                        Der Spieler hat bis Freitag 23:56 Uhr Zeit die geforderten Unterlagen hochzuladen. Danach ist
                        eine Spielberechtigung für den Sonntag sichergestellt.</p>
                    <p>6. Meistercup und Playoff: Es können für den Meistercup und Playoff lediglich Spieler eingesetzt
                        werden, welche in der Meisterschaft bereits zum Einsatz gekommen sind. Neu angemeldete Spieler
                        haben keine Spielberechtigung.</p>
                    <p>7. Beim Einsatz eines Spielers ohne Spielberechtigung oder Sperre wird das Spiel als 0:6 verloren
                        gewertet. Weitere Strafen werden vom Strafsenat festgelegt.</p>
                    <p>8. Sperren:</p>
                    <ul>
                        <li>8.a. Rote Karte: automatische Sperre von -mindestens- einem Spiel. Weitere Strafen werden
                            vom Strafsenat festgelegt.
                        </li>
                        <li>8.b. Gelb-Rote Karte: automatische Sperre von einem Spiel</li>
                        <li>8.c. Vierte gelbe Karte in der Meisterschaft: automatische Sperre von einem Spiel</li>
                        <li>8.d. Erhält ein Spieler in einem Spiel zwei gelbe Karten (gelbrot) dann wird die erste gelbe
                            Karte nicht gezählt. Die gelbrote Karte egalisiert beide gelben Karten im Spiel.
                        </li>
                        <li>8.e. Die Karten sind Wettbewerbsübergreifend - die Sperren gelten immer für das nächste
                            stattfindende Spiel. Besitzt der Verein mehrere Mannschaften im Ligabetrieb des ÖKFB gelten
                            die Strafen nur für das Team in dem die Strafe erhalten wurde. Ausnahme: langfristige
                            Sperren über ein Spiel hinaus.
                        </li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h3>§ 10 - Finanzen</h3>
                    <p>1. Die Kosten der Liga betragen ab der Herbstsaison 2023 €70,- pro Spiel. Diese werden pro
                        Halbjahr im Voraus verrechnet (sh. §2, Pkt.1). Bei Neuanmeldungen wird eine einmalige
                        Anmeldegebühr in Höhe von € 300,- erhoben, die nach Abschluss der ersten Saison wieder
                        gutgeschrieben wird.</p>
                    <p>1.a. Es ist möglich die komplette Saison im Voraus zu bezahlen. Zahlungsverzug ist ohne die
                        Zustimmung des Bundes nicht gestattet.</p>
                    <p>2. Die Ligagebühr wird jährlich auf Basis der Inflationsrate angepasst. Die genaue Höhe der
                        Anpassung wird den Mannschaften rechtzeitig mitgeteilt.</p>
                    <p>3. Die Spieleranmeldungen sind mit einer einmaligen Gebühr von €5,- pro Spieler verbunden.
                        Spieleranmeldungen können nur mit genügend Guthaben am Mannschaftskonto durchgeführt werden.</p>
                    <p>4. Der Bund ist berechtigt, Mannschaften welche die Saisongebühr verspätet bezahlen aus der Liga
                        bis zur Begleichung, zu suspendieren. Sollten Mannschaften, bis zum Start der Hin- bzw.
                        Rückrunde die Zahlungen nicht getätigt haben, können diese aus der Liga suspendiert werden. Der
                        Ligabeitrag bleibt weiterhin als Pönale offen.</p>
                    <p>5. Die Finanzen sind unter dem Controlpanel Punkt „Finanzen“ auf der Homepage ersichtlich.</p>
                    <p>6. Falls das Guthaben der Mannschaft unter € 0,00 sinkt, wird der Account automatisch vom System
                        gesperrt und bleibt bis das Konto wieder positiv ist geschlossen. Dadurch kann die Mannschaft
                        kein Online-Blankett für den Spieltag eintragen und das Meisterschaftsspiel wird aufgrund von
                        fehlendem Blankett strafverifiziert.</p>
                    <p>6.a. Sollte eine Mannschaft zwei Teams stellen, wird ein Rückstand von über €100,- eines der
                        beiden Teams zu einer Sperre beider Mannschaften führen.</p>
                    <p>6.b. Die Mannschaft hat die Möglichkeit sich am Spieltag selbst freizuschalten.</p>
                    <p>Bei offenen Gebühren unter/über €100,- entstehen folgende Strafen:</p>
                    <ul>
                        <li>1. Mal – €20,00 / 100,00</li>
                        <li>2. Mal – €40,00 / 200,00</li>
                        <li>3. Mal – €60,00 / 400,00</li>
                    </ul>
                    <p>Danach folgt eine Suspendierung</p>
                    <p>7. Mannschaften haften selbst dafür, dass offene Beträge rechtzeitig am Konto vom ÖKFB einlangen.
                        Zahlungsbestätigungen können nicht verbucht werden.</p>
                    <p>8. Die Gebühren der Mannschaften müssen mit einer Überweisung erfolgen. Einzelne Zahlungen von
                        Spielern sind nicht zugelassen.</p>
                    <p>9. Falls die Mannschaften eine Rechnung benötigen ist diese als Homepagenachricht anzufordern.
                        Die Mannschaften sind selbst dafür verantwortlich rechtzeitig eine Rechnung anzufordern. Die
                        Zahlungsfristen lt. Ligaordnung bleiben unabhängig der Rechnung bestehen.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 11 - Ausstieg und Kündigung</h3>
                    <p>1. Der Vertrag wird auf unbestimmte Zeit abgeschlossen. Der Vertrag beinhaltet eine
                        Kündigungsfrist von 7 Werktagen nach Unterzeichnung. Sollte der Vertrag kurz vor dem
                        Meisterschaftsbeginn abgeschlossen sein, ist aufgrund des Aufwandes für den Bund, betreffend
                        Profilbearbeitung der Mannschaft, im Falle eines Ausstiegs eine Pönale von €200,- fällig. Das
                        Betrifft lediglich Ausstieg innerhalb der 7 Tage nach der Unterzeichnung.</p>
                    <p>2. Ein ordnungsgemäßer Ausstieg aus dem Bund ist immer nur zu Saisonende möglich. Die Mannschaft
                        muss fristgerecht (sh. §2, Pkt.2) durch eine schriftliche Kündigung via E-Mail "info@oekfb.com",
                        aus dem Bund austreten. Es fallen keine weiteren Kosten für die Folgesaison an, der Verein ist
                        damit kein Mitglied des ÖKFB mehr. Dies ist möglich, wenn die Mannschaft zum Zeitpunkt der
                        Kündigung kein negatives Mannschaftsguthaben besitzt. Ein Guthaben wird nach einer Kündigung in
                        der Sommerpause zurückerstatten.</p>
                    <p>3. Kommt die Kündigung nicht fristgerecht ist die Mannschaft für eine weitere Saison gebunden.
                        Die Saisongebühren der folgenden Saison bleiben aufrecht. Nur durch die Nennung eines
                        Ersatzteams, welche die Position der bestehenden Mannschaft übernimmt, ist ein Ausstieg am Ende
                        der Saison, ohne Einhaltung einer Frist möglich. In diesem Fall wird ein etwaiges Guthaben aus
                        der Liga zurückerstattet und alle Verpflichtungen der Mannschaft an die neue Mannschaft
                        übergegeben. Der Bund entscheidet, ob die neue Mannschaft die Vorgaben erfüllt. Eine Übernahme
                        ist erst nach Unterzeichnung eines Vertrages vollständig.</p>
                    <p>4. Eine Übernahme während der Saison ist immer zwischen Hin- und Rückrunde möglich. Die
                        übernehmende Mannschaft steigt mit 0 Punkten in die Saison ein.</p>
                    <p>5. Anmeldungen zu Turnieren des ÖKFB wie Meistercup, Playoff oder dergleichen, sind immer
                        verbindlich und können nach einer Anmeldung nicht abgesagt werden. Bei einer Absage folgt eine
                        Geldstrafe, die vom Strafsenat festgelegt wird.</p>
                    <p>6. Eine Mannschaft, die für die kommende Saison gekündigt hat, verliert das Recht am Ende der
                        Saison am Meistercup oder dem Playoff für eine höhere Liga teilzunehmen.</p>
                    <p>7. Sollte eine Mannschaft, welche zu Saisonende gekündigt hat, vor Start der neuen Saison
                        umentscheiden, kommt dies einer Neuanmeldung gleich. Die Mannschaft muss in der untersten Liga
                        anfangen.</p>
                    <p>8. Sollte eine Mannschaft den Spielbetrieb während der Saison oder kurz vor Saisonbeginn
                        einstellen, ist eine Strafe von €70,- für die restlichen Spiele, pro Spiel, an die jeweiligen
                        Gegner zu bezahlen. Dies betrifft immer nur die Hin- bzw. Rückrunde und nicht die gesamte
                        Saison. Die Ligagebühren für die jeweilige Hin- und Rückrunde bleiben additional aufrecht.</p>
                    <p>9. Stellt eine Mannschaft während der Saison der Spielbetrieb ein, werden alle Spiele der Hin-
                        oder Rückrunde mit 0:6 gewertet. Falls die Hinrunde komplett gespielt wurde bleiben diese
                        Ergebnisse bestehen.</p>
                    <p>10. Nach der Kündigung erhaltene Strafen oder sonstige Zahlungen sind innerhalb einer Frist von
                        14 Tagen zu leisten.</p>
                    <p>11. Die Haftung für den Vertrag übernehmen beide unterschreibenden Personen im vollen Umfang.
                        Sollte es zu einem Rechtstreit kommen, haften beide Parteien für den Vertrag. Obgleich der
                        Vertrag gegenüber einem Verein oder einer Firma abgeschlossen wurde.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 12 – Kontaktdaten</h3>
                    <p>1. Jeder Mannschaftsleiter ist verantwortlich, jegliche Änderungen bezüglich der Kontaktdaten,
                        auf der Homepage des Bundes zu ändern. Die Mannschaft haftet selbst für nicht erhaltene
                        Nachrichten aufgrund veralteter Daten.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 13 - Spielabsagen</h3>
                    <p>1. Eine Spielabsage seitens des Bundes kann jederzeit aus bekanntzugebenden Gründen folgen. Dies
                        kann auf zwei Arten erfolgen:</p>
                    <ul>
                        <li>1.a. Der Komplette Spieltag wird abgesagt. In diesem Fall obliegt es dem Bund wann der
                            Spieltag nachgeholt wird.
                        </li>
                        <li>1.b. Ein Spiel wird abgesagt: Nachholtermin wird vom Bund festgelegt.</li>
                    </ul>
                    <p>2. Erscheint eine Mannschaft nicht zu einem Spiel, wird dieses mit einer 0:6 Niederlage gewertet.
                        Weitere Strafen werden von Strafsenat festgelegt.</p>
                    <p>3. Erscheint eine Mannschaft zu spät zur angegebenen Spielzeit, wird das Spiel ebenfalls mit 0:6
                        Toren gewertet.</p>
                    <p>4. Entspricht eine 0:6 Niederlage (Spielabsage) als Wettbewerbsverzerrung, muss das Spiel auf
                        jeden Fall nachgeholt werden. Ist ein Nachholtermin nicht möglich, entscheidet der Bund über das
                        weitere Vorgehen.</p>
                    <p>5. Spielabsagen müssen auf der Homepage online bekannt gegeben werden. Bei einer Spielabsage
                        werden folgende Strafen verhängt:</p>
                    <ul>
                        <li>1. Spielabsage der Saison – €170,00</li>
                        <li>2. Spielabsage der Saison – €270,00</li>
                        <li>3. Spielabsage der Saison – €470,00</li>
                        <li>4. Spielabsage der Saison – €670,00</li>
                        <li>5. Spielabsage der Saison – €1.000,00</li>
                    </ul>
                    <p>Danach folgt eine Suspendierung.</p>
                    <p>6. Erscheint eine Mannschaft nicht zum Meisterschaftsspiel ohne das Spiel online mindestens 6
                        Stunden vor Anpfiff abzusagen, wird eine zusätzliche Strafe (sh. §16, Pkt.7) verhängt.</p>
                    <p>7. Dem Gegner der Mannschaft, der das Spiel abgesagt hat, werden automatisch €70,-
                        gutgeschrieben.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 14 - Spielverschiebungen</h3>
                    <p>1. Jede Mannschaft hat einmal im Herbst und einmal im Frühjahr die Möglichkeit 1 Spiel zu
                        verschieben. Die Termine für die Nachtragsspiele werden vor Saisonbeginn bekannt gegeben.
                        Folgende Punkte sind für eine erfolgreiche Spielverschiebung erforderlich,</p>
                    <ul>
                        <li>Zustimmung beider Mannschaften</li>
                        <li>Zustimmung des Bundes</li>
                        <li>Terminliche Möglichkeit eines Nachtragspiels am vom Bund angegebenen Spieltag für
                            Nachtragsspiele, nach Ende der Hinrunde bzw. zum Ende der Rückrunde.
                        </li>
                        <li>Nicht-Betroffenheit von Absprachen oder Wettbewerbsverzerrung.</li>
                    </ul>
                    <p>2. Eine Verschiebung ist nur dann erlaubt, wenn beide Mannschaften noch kein Spiel am
                        Nachtragstermin haben. Die Mannschaft, welche das Spiel verschiebt, bezahlt die Kosten des
                        neuerlich angesetzten Spiels von €70,00,- Spielverschiebungen sind per Homepage Nachricht von
                        beiden Teams zu beantragen.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 15 - Transfer</h3>
                    <p>1. Es ist möglich einen Spieler eines anderen Teams zu verpflichten. Dazu muss man einen Transfer
                        beantragen. Beim ÖKFB entscheidet einzig und alleine der Spieler bei welchem Verein er spielen
                        möchte. Der aktuelle Verein darf einen Wechsel nicht verweigern. Ausnahme: Der Spieler hat
                        offene Gebühren oder Zahlungen an seinen abgebenden Verein. Dies muss vom abgebenden Verein
                        belegt werden.</p>
                    <p>2. Ein Transfer ist immer nur innerhalb der spielfreien Zeit (Sommer- bzw. Winterpause)
                        durchzuführen. Das Transferfenster wird auf den Social-Media Plattformen, sowie auf der Homepage
                        bekannt gegeben. Transfers während des Transferfensters sind kostenlos.</p>
                    <p>3. Ein Spieler darf nur einmal pro Wechselperiode seinen Verein wechseln. Hat er vor einer
                        Wechselperiode bereits seinen Verein gewechselt, wird dieser in der nächstmöglichen Periode
                        durchgeführt. Der Spieler kann nur mehr den Wechsel kündigen. Damit ist er jedoch nicht
                        berechtigt in dieser Periode einen weiteren Wechsel zu tätigen.</p>
                    <p>4. Ein Transfer kann gegen eine Gebühr von €200,- während der Meisterschaft durchgeführt werden.
                        Dies ist einmal pro Saison möglich.</p>
                    <p>5. Hat ein Spieler mindestens eine Halbsaison bei keinem Verein gespielt, kann er jederzeit als
                        Transferspieler eingesetzt werden. Ein Spieler, der bereits 6 Monate kein Meisterschaftsspiel
                        oder Pokalspiel bestritten hat, ist ein freier Spieler und kann sofort zu einem neuen Verein
                        wechseln und ab sofort auch für diese Spielen.</p>
                    <p>6. Ausschlaggebend für die Durchführung eines Transfers ist die Transferanfrage an den Bund und
                        die E-Mail Bestätigung durch den Gegner.</p>
                    <p>7. Falls ein Spieler keine Bestätigungsmail für den Transfer bekommt, muss der Spieler eine Mail
                        an den Bund senden, in der er den Transfer bestätigt. Der Transfer ist jedoch vorher von der
                        Mannschaft zu beantragen.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 16 - Strafen</h3>
                    <p>1. Die Strafen werden vom Strafsenat festgelegt. Folgende Strafen sind als Richtlinie anzusehen.
                        Der Strafsenat kann die hier stehenden Strafen je nach Vorfall anpassen.</p>
                    <p>2. Schiedsrichterbeleidigung: 2 bis 10 Spiele Sperre</p>
                    <p>3. Tätlichkeit gegen den Schiedsrichter: 6 Monate bis 2 Jahre.</p>
                    <p>4. Tätlichkeit von einem Spieler: 3 bis 8 Spiele Sperre (Schwerer Tätlichkeit wird vom Strafsenat
                        je nach Fall entschieden. Hier können auch Geldstrafen gegen den Spieler folgen)</p>
                    <p>4.a. Wiederholte Tätlichkeit eines Spielers nach einer abgesessenen Sperre: lebenslanger
                        Ausschluss aus dem Spielbetrieb.</p>
                    <p>5. Tätlichkeit von mehr als einem Spieler einer Mannschaft (Rudelbildung): 3 bis 10 Spiele Sperre
                        der betroffenen Spieler und eine Geldstrafe von 1.000,00 € an die Mannschaft.</p>
                    <p>6. Rassistisches Verhalten (Gesten, Ausdrücke, ...): 6 Monate bis 2 Jahre Sperre.</p>
                    <p>7. Nichtantreten zum Meisterschaftsspiel ohne Absage (oder eine zu kurzfristige am Spieltag
                        getätigte Absage): möglicher Punkteabzug und eine Geldstrafe von 300,00 € an den Bund. Die in
                        §13, Pkt 5 erläuterten Strafen werden addiert.</p>
                    <p>8. Nichtabgabe von Onlineblankett: Automatische 0:6 Wertung. Geldstrafe von 100,00 €</p>
                    <p>9. Einsatz eines nicht Spielberechtigten Spielers (falsche Angaben am Blankett): 0:6 Wertung. Bei
                        einer Niederlage mit einem höheren Ausgang zählt das Ergebnis, es folgt eine Geldstrafe von bis
                        zu 100,00 € oder Punkteabzug von bis zu 3 Punkten.</p>
                    <p>10. Antreten mit falschem Trikot oder falschen Stutzen (gleiche Farbe wie der Gegner): 70,00 €
                        Geldstrafe und 0:6 Wertung.</p>
                    <p>11. Zahlungsverzug des Ligabeitrages 100,00 € alle zwei Wochen.</p>
                    <p>12. Neuanmeldung eines bereits im System bestehenden Spielers 50,00 €</p>
                    <p>13. Anmeldung einer Spielers ohne dessen Zustimmung 500,00 €</p>
                    <p>14. Blankettfehler wie unter §3 Pkt. 3 beschrieben führen zu einer Geldstrafe von 25,00 €</p>
                    <p>15. Nicht befugte Personen auf der Ersatzbank. 100,00 €</p>
                    <p>16. Abwesenheit bei der Ligasitzung. 50,00 €</p>
                    <p>17. Bundschädigendes Verhalten 200,00 €</p>
                    <p>18. Weitergabe vom Trainerausweis 50,00 €</p>
                    <p>19.Nicht an den Schiedsrichter retournierter Spielball 30,00 €</p>
                    <p>20. Heimteam kann im Bedarfsfall keinen Spielball stellen 30,00 €</p>
                    <p>21. Mitführen von Speisen und Getränken an Plätzen mit geöffneter Kantine 100,00 €</p>
                    <p>22. Rauchen auf dem Kunstrasenplatz 100,00 €</p>
                    <p>23. Unbefugtes Betreten des Spielfeldes durch den Ersatzspielern oder dem Trainer während dem
                        Spiel (Beispiel: Rudel Bildung). Behauptungen wie das Schlichten von Streitereien oder
                        Auseinandersetzungen auf dem Platz während dem laufenden Spiel sind nicht zulässig. Dies ist die
                        Aufgabe des Schiedsrichters und nicht die der Ersatzspieler oder Trainer. Die Strafen werden je
                        nach Situation vom Strafsenat festgelegt.</p>
                </section>
                <section className={styles.section}>
                    <h3>§ 17 - Allgemeines</h3>
                    <p>Jede Mannschaft ist selbst verantwortlich die Ligaordnung in der aktuellen Fassung zu kennen und
                        sämtliche Mannschaftsmitglieder darüber zu informieren.</p>
                    <p>Sollten Teile dieses Regelwerks modifiziert werden, so können diese Änderungen keine rückwirkende
                        Gültigkeit erlangen.</p>
                    <p>Die letzte Änderung der Ligaordnung steht am Ende.</p>
                    <p>Die vorliegende Version des Regelwerks hat bis auf weiteres Gültigkeit.</p>
                    <p>Alle Mannschaftsleiter und Spieler haben sich dem Bund gegenüber Fair und Loyal zu verhalten.</p>
                    <p>Jeder Mannschaftsleiter hat bei allen Ligasitzungen Anwesenheitspflicht. Die Ligaabstimmungen
                        werden durch die Mehrheitsentscheidung geregelt. Abwesende Mannschaftsstimmen werden zu der
                        Mehrheit addiert. Mannschaften können sich durch andere Teams vertreten lassen. Eine Mannschaft
                        kann nur eine weitere Mannschaft vertreten.</p>
                    <p>Bei Abwesenheit des Mannschaftsleiters, hat dieser sich über die Informationen, Abstimmungen und
                        Änderungen der letzten Sitzung am laufenden zu halten.</p>
                    <p>letzte Änderung: 07.12.2023</p>
                </section>
            </div>
        </Spring>
    );
}

export default LigaordnungComponent;
