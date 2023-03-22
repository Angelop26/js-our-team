const dataTeam = [
    {
        name: "Wayne Barnett",
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name:'Angela Caroll',
        ruolo:'Chief Editor',
        img:'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        ruolo:'Office Manager',
        img:'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        ruolo:'Social Media Manager',
        img:'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        ruolo:'Developer',
        img:'scott-estrada-developer.jpg',
    },
    {
        name:'Barbara Ramos',
        ruolo:'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg',
    }
]

console.log(dataTeam);


const containerString = document.querySelector('.row')

for (let i = 0; i < dataTeam.length; i++) {
    const currentTeam = dataTeam[i];
    containerString.innerHTML += `
                        <div class="col-4 mb-4">
                            <div class="card">
                                <img src="img/${currentTeam.img}" class="card-img-top" alt="...">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${currentTeam.name}</h5>
                                    <p class="card-text">${currentTeam.ruolo}</p>
                                </div>
                            </div>
                        </div>
`
}