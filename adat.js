// 1. "Tábla": Zeneszerzők részletes adatai
const zeneszerzok = [
    { id: 101, nev: "Én (AI)", elet: "1900 – ?" },
    { id: 102, nev: "Te vagy", elet: "1980 – napjainkig" },
    { id: 103, nev: "Sóska", elet: "1950 – 2020" }
];

// 2. "Tábla": Zeneművek (itt csak a zeneszerző ID-jára hivatkozunk!)
const zeneiAdatok = [
    { 
        cim: "1. Zenemű", 
        zeneszerzoId: 101,  // Ez összeköti az "Én (AI)" nevű zeneszerzővel!
        szovegiro: "Versek Vica" 
    },
    { 
        cim: "2.3 Zenemű", 
        zeneszerzoId: 103,  // Ez összeköti "Sóska"-val, így a kód azonnal tudni fogja a születési/halálozási évét is!
        szovegiro: "De van szöveg" 
    }
];
