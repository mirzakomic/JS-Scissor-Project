function satzErkennen() {
    // wert vom Satz auslesen
    let inputSentence = document.querySelector("#input-satz").value;
    // wert vom Wort auslesen == das Wort an sich
    let inputWort = document.querySelector("#input-trennwort").value;

    let leftBox = document.querySelector("#left");
    let rightBox = document.querySelector("#right");

    let radioButtonDavor = document.querySelector("#davor");
    let radioButtonDanach = document.querySelector("#danach");

    // für mich nur, output des Ganzen
    console.log(inputSentence, inputWort);

    // provisorische Funktion, schaut, ob das Wort im Satz vorkommt, wenn ja, gibt es in der Konsole aus

    if (inputSentence.includes(inputWort)) {
        console.log("Ja, Teil des Satzes");
        console.log(inputSentence.indexOf(inputWort));
        let index = inputSentence.indexOf(inputWort);
        rightBox.innerHTML = inputSentence.slice(index);
        leftBox.innerHTML = inputSentence.slice( 0, index);
            if (radioButtonDanach.checked) {
            rightBox.innerHTML = inputSentence.slice(index + inputWort.length);
            //rausfinden wieso length hier die lösung war
            leftBox.innerHTML = inputSentence.slice(0, index) + inputWort;
        } else {
            rightBox.innerHTML = inputSentence.slice(index);
            leftBox.innerHTML = inputSentence.slice(0, index);
        }   

    } else {
        console.log("Nein, nicht Teil des Satzes");
        leftBox.innerHTML = "Ist gar nicht im Satz vorhanden. Versuche ein anderes Wort.";
        rightBox.innerHTML = "";
    }
}
