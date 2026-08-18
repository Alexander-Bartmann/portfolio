export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalDoc {
  title: string;
  sections: LegalSection[];
}

export const impressum: LegalDoc = {
  title: "Impressum",
  sections: [
    {
      heading: "Angaben gemäß § 5 DDG",
      body:
        "Alexander Bartmann\n" +
        "Dorfplatz 3\n" +
        "84175 Schalkham\n" +
        "Deutschland\n\n" +
        "E-Mail: alexander-bartmann@outlook.de\n" +
        "Website: https://alexander-bartmann.de",
    },
    {
      heading: "Verantwortlich für den Inhalt",
      body: "Alexander Bartmann, Anschrift wie oben.",
    },
    {
      heading: "Haftungsausschluss",
      body:
        "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die " +
        "Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine " +
        "Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG " +
        "für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen " +
        "verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht verpflichtet, " +
        "übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach " +
        "Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
    },
    {
      heading: "Haftung für Links",
      body:
        "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte " +
        "ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der " +
        "jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung " +
        "waren keine rechtswidrigen Inhalte erkennbar. Bei Bekanntwerden von " +
        "Rechtsverletzungen werden entsprechende Links umgehend entfernt.",
    },
    {
      heading: "Urheberrecht",
      body:
        "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website " +
        "unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche " +
        "gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der " +
        "Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen " +
        "Zustimmung des jeweiligen Autors bzw. Erstellers.",
    },
  ],
};

export const datenschutz: LegalDoc = {
  title: "Datenschutzerklärung",
  sections: [
    {
      heading: "Verantwortlicher",
      body:
        "Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n\n" +
        "Alexander Bartmann\n" +
        "Dorfplatz 3\n" +
        "84175 Schalkham\n" +
        "alexander-bartmann@outlook.de",
    },
    {
      heading: "Allgemeines",
      body:
        "Ich nehme den Schutz deiner persönlichen Daten ernst. Deine Daten werden " +
        "vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie " +
        "dieser Datenschutzerklärung behandelt. Diese Website verwendet keine Cookies, " +
        "keine Analysewerkzeuge und keine Werbenetzwerke.",
    },
    {
      heading: "Hosting",
      body:
        "Diese Website wird gehostet bei Netlify, Inc., 512 2nd Street, Suite 200, " +
        "San Francisco, CA 94107, USA. Beim Aufruf der Seite verarbeitet Netlify " +
        "technisch notwendige Verbindungsdaten. Dabei können Daten in die USA " +
        "übermittelt werden. Netlify ist unter dem EU-U.S. Data Privacy Framework " +
        "zertifiziert, sodass ein angemessenes Datenschutzniveau gewährleistet ist. " +
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO — mein berechtigtes Interesse " +
        "an einer sicheren und zuverlässigen Bereitstellung dieser Website.\n\n" +
        "Weitere Informationen: https://www.netlify.com/privacy/",
    },
    {
      heading: "Server-Log-Dateien",
      body:
        "Der Hosting-Anbieter erhebt und speichert automatisch Informationen in " +
        "sogenannten Server-Log-Dateien, die dein Browser übermittelt. Dazu gehören: " +
        "Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname " +
        "des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese " +
        "Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen " +
        "ausschließlich dem technischen Betrieb und der Sicherheit der Website. " +
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
    },
    {
      heading: "Kontaktformular",
      body:
        "Wenn du mir über das Kontaktformular schreibst, werden die von dir " +
        "angegebenen Daten (Name, E-Mail-Adresse und Nachricht) an Netlify übermittelt " +
        "und dort gespeichert, damit ich sie abrufen kann. Die Daten werden " +
        "ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht ohne deine " +
        "Einwilligung weitergegeben.\n\n" +
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO — deine Einwilligung durch das " +
        "Absenden des Formulars. Du kannst diese jederzeit widerrufen. Die Daten " +
        "verbleiben bei mir, bis du die Löschung verlangst oder der Zweck entfällt. " +
        "Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.\n\n" +
        "Alternativ kannst du mich jederzeit direkt per E-Mail erreichen.",
    },
    {
      heading: "Schriftarten",
      body:
        "Die verwendeten Schriftarten werden lokal von diesem Server ausgeliefert. " +
        "Es besteht keine Verbindung zu Servern Dritter, es werden keine Daten an " +
        "externe Anbieter übertragen.",
    },
    {
      heading: "Deine Rechte",
      body:
        "Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine " +
        "gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den " +
        "Zweck der Datenverarbeitung (Art. 15 DSGVO). Außerdem hast du ein Recht auf " +
        "Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung " +
        "(Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21).\n\n" +
        "Für alle Anliegen erreichst du mich unter der im Impressum angegebenen " +
        "E-Mail-Adresse.",
    },
    {
      heading: "Beschwerderecht",
      body:
        "Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren, wenn du der " +
        "Ansicht bist, dass die Verarbeitung deiner Daten gegen die DSGVO verstößt " +
        "(Art. 77 DSGVO). Zuständig ist das Bayerische Landesamt für Datenschutz­" +
        "aufsicht, Promenade 18, 91522 Ansbach.",
    },
    {
      heading: "Datensicherheit",
      body:
        "Diese Website nutzt eine SSL/TLS-Verschlüsselung. Zusätzlich werden technische " +
        "und organisatorische Sicherheitsmaßnahmen eingesetzt, um Daten gegen " +
        "Manipulation, Verlust, Zerstörung und unbefugten Zugriff zu schützen. Diese " +
        "Maßnahmen werden regelmäßig überprüft.",
    },
  ],
};
