const planets =[{name:"Mercury"},
{name:"Venus",moons:0}, 
{name:"Earth",moons:1},
{name:"Mars", moons:0},
{name:"Jupiter",moons:2},
{name:"Saturn",moons:3},
{name:"Uranus",moons:4},
{name:"Nepturne",moons:0}];
for (const element of planets){
    console.log("planet :", element)
    const planetDiv=document.createElement("div")
  
    planetDiv.classList.add("planet", element.name.toLowerCase());
    for (let i=0; i < element.moons; i++)
    {
        const moonDiv=document.createElement("div")
        moonDiv.classList.add("moon")
      
        moonDiv.style.left=i*10+"px"
        planetDiv.appendChild(moonDiv)
    }
    const section = document.querySelector(".listPlanets");
    section.appendChild(planetDiv);
}