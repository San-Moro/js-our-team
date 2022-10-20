// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
	
let membersArray = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      photo: "angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      photo: "walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      photo: "angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      photo: "scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      photo: "barbara-ramos-graphic-designer.jpg",
    }, 
];
console.log(membersArray);

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
const cardMember = document.getElementById("card");
console.log(cardMember);
// Scorro tutto il contenuto dell'Array con il ciclo for
for(let i = 0; i < membersArray.length; i++) {
    const member = membersArray[i];
    console.log(member);
    // elementi dentro l'array sono object quindi faccio ciclo for in 
    // for(let key in member) {
    //     console.log(key, member[key])

        // MILESTONE 2:
        // Stampare le stesse informazioni su DOM sottoforma di stringhe
        cardMember.innerHTML += `
            <h1>${member["name"]}</h1>
            <h3>${member["role"]}</h3>
            <img>${member["photo"]}
        `
    
}



