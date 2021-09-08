

let carta = {

    nome : 'All Might, The Greatest Hero',
    costoDiLancio : {
        comune : 6,
        bianco : 0,
        blu: 1,
        rosso: 1,
        verde: 1,
    },

    tipo: 'Legendary Creature',
    sottoTipo: 'Human Hero',
    espansione : {
        nome : 'Espnasione Custom',
        raro : 'Oro'
    },
    abilita : [
        {
            costoMana: 2,
            descrizione: 'All Might, The Greatest Hero costs 2 less for each creature your opponent controls more than you.'
        },
        {
            costoMana: 0,
            descrizione: 'All Might, The Greatest Hero has flying and indestructible when attacking and blocking.'
        }
    ],
    citazione: `it's fine now. Why? Because i am here!`,
    autore: 'My Hero Accademia',
    numeroCollezione: 177,
    collectionsCap: 340,
    bordoCarta: 'nero',
    immagine: 'img/carta.png',
    


    sommaMana(){
        let somma = 0;
        for (let key in this.costoDiLancio){
            somma += this.costoDiLancio[key];
        }
        return somma;
    }
}
let abilitaD= '<ul>';
for (let i = 0; i < carta.abilita.length; i++){
    const abilitAttuale = carta.abilita[i];
    abilitaD+= `<li>Descrizione ${abilitAttuale.descrizione} </li>`;
    abilitaD+= `<li>Costo Mana:  ${abilitAttuale.costoMana} </li>`;
}
abilitaD+= '</ul>';
let display = `<ul> 
                <li><h4>Nome Carta: ${carta.nome} </h4></li>
                <li>Costo di lancio: </li>
                    <ul>
                        <li>Comune: ${carta.costoDiLancio.comune} </li>
                        <li>bianco: ${carta.costoDiLancio.bianco} </li>
                        <li>blu: ${carta.costoDiLancio.blu} </li>
                        <li>rosso: ${carta.costoDiLancio.rosso} </li>
                        <li>verde: ${carta.costoDiLancio.verde} </li>
                    </ul>
                <li>tipo: ${carta.tipo} ${carta.sottoTipo} </li>
                <li>Easpansione: ${carta.espansione.nome} ${carta.espansione.raro} </li>
                <li>Abilita': ${abilitaD}</li>
                <li>Autore: ${carta.autore} , la sua citazione: ${carta.citazione} </li>
                <li>Numero Collezione: ${carta.numeroCollezione}/${carta.collectionsCap} </li>
                <li>Bordo Carta: ${carta.bordoCarta}</li>
                <li class="text-center pt-5"><img id="card-image" src="${carta.immagine}" alt="Carta Di All Might"> </li>
                </ul>`

document.getElementById('card').innerHTML += display;