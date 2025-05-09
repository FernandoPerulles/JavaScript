const album = {
    artista: "Klaus Schulze",
    album: "Are you sequenced?",
    compactDisc1: {
        track1: "Welcome To The Moog Brothers",
        track2: "Vocs In The Dark I",
        track3: "Vocs In The Dark II",
        track4: "No Frets - No Bass",
        track5: "Valle De La Luna",
        track6: "Are You Sequenced?",
        track7: "Moogie Baby Goes Solo",
        track8: "Moldanya",
        track9: "Vidanya",
        track10: "The Wizard Of Doz",
        track11: "Are We Getting Lost?"
    },
    compactDisc2: {
        track1: "SQ 1 (Essentials)",
        track2: "Voices In The Dark I (Lite Mix)",
        track3: "SQ 2 (Extended Mix)",
        track4: "Flutish Baby (Humate Mix)",
        track5: "SQ 3 (Subsonic Affair Mix)",
        track6: "Voices In The Dark II (Chill Mix)",
        track7: "SQ 4 (Short Cut)"
    }
}
console.log(album.artista + " - " + album.album )
console.log("Mi track favorito: " + album.compactDisc1.track5);

// Generar un listado por medio de un ciclo for.
let tracksCD1 = "";
    for(let x in album.compactDisc1){
        tracksCD1 += album.compactDisc1[x] + " \n";
    };
console.log("Listado 'for' de tracks del CD1: \n" + tracksCD1);

// Generar el listado por medio de un arreglo.
const tracksCD2 = Object.values(album.compactDisc2);
console.log("Listado 'array' de tracks del CD2: \n" + tracksCD2);

// Generar el listado por medio de Object.entries.
const tracksCD2V2 = album.compactDisc2;
let tracksCD2Entries = "";
for (let [track, value] of Object.entries(tracksCD2V2)){
    tracksCD2Entries +=  value + "\n"; //track + ": " +
}
console.log("Listado 'object entries' de tracks del CD2: \n" + tracksCD2Entries);

// Generar el listado por medio JSON
const tracksCD2V3 = JSON.stringify(album.compactDisc2);
console.log("Listado 'JSON' de tracks del CD2: \n" + tracksCD2V3);
