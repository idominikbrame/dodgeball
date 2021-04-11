const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  


  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(name, age, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.name = name;
        this.age = age
        this.canThrowBall = true;
        this.canDodgeBall = true;
        this.hasPaid = true;
        this.isHealthy = true;
        this.yearsExperience = yearsExperience
    }
  }

  



  class blueTeammate {
    constructor(name, mascot, color){
      this.name = name;
      this.mascot = mascot;
      this.teamColor = color;
    }
  }
  class redTeammate {
    constructor(name, mascot, color){
      this.name = name;
      this.mascot = mascot;
      this.color = color
    }
  }
  


  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    let ul = document.getElementById("players")
    arrOfPeople.forEach(person => {
      if (person.id == id) {
        let newPlayer = new Player(person.name, person.age, true, true, true, true, 0)
        
        //Create player list item
        let li = document.createElement("li")
        li.setAttribute("class", "player" + person.id)
        li.innerText = person.name
        
        //Create Button
        let buttonBlue = document.createElement("button")
        buttonBlue.innerText = "Join Blue Team"
        buttonBlue.setAttribute("class", "player" + person.id)
        buttonBlue.addEventListener("click", joinBlueTeam)

        let buttonRed = document.createElement("button")
        buttonRed.innerText = "Join Red Team"
        buttonRed.setAttribute("class", "player" + person.id)
        buttonRed.addEventListener("click", joinRedTeam)


        //Add player and buttons to DOM
        ul.appendChild(li)      
        ul.appendChild(buttonBlue)
        ul.appendChild(buttonRed)
        console.log(newPlayer)
        console.log(person)
        
      }
    })   
  }

  const joinBlueTeam = (event) => {
    let ul = document.getElementById("blue")
    console.log(event.target.id)
    arrOfPeople.forEach(person => {
      if (person.id == event.target.className[event.target.className.length -1]) {
        let li = document.createElement("li")
        li.innerText = person.name
        ul.appendChild(li)
        let newBlueTeammate = new blueTeammate(person.name, "blue Lagoon", "blue")
        blueTeam.push(newBlueTeammate)
      }
     
    })
   
    removePlayer(event.target.className)
    console.log(blueTeam)
  }

  const joinRedTeam = (event) => {
    let ul = document.getElementById("red")
    console.log(event.target)
    arrOfPeople.forEach(person => {
      if (person.id == event.target.className[event.target.className.length -1]) {
        let li = document.createElement("li")
        li.innerText = person.name
        ul.appendChild(li)
        let newRedTeammate = new redTeammate(person.name, "red Reaper", "red")
        redTeam.push(newRedTeammate)
        console.log(redTeam)
      }
      

    })
    
    removePlayer(event.target.className)
  }

  const removePlayer = (chosenPlayer) => {
    document.querySelectorAll("." + chosenPlayer).forEach(element => element.remove())
  }


// let assert = require("assert")

// describe('New Teammate', function(){
//   it(`push new player into redteam`, function(){
      
//     let newPlayer = new Player("Dick Balls", "person.age", true, true, true, true, 0)
//     redTeam.push(newPlayer)
//     assert.equal(redTeam[0].name, 'Dick Balls');
//   });
// })
  
