const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const start = document.getElementById('start');
const match = document.querySelector('.match');
const enterNames = document.getElementById('enternames');
const names = [];
const title = document.getElementById('title')
let iterator = 1000;
let pid = 1;
const bottom = document.getElementById('bottom');
const healthBar = document.querySelector('.health');
const healthBar2 = document.querySelector('.health2');
const p1healthname = document.getElementById('player1health')
const p2healthname = document.getElementById('player2health')
const crowd = new Audio('./sounds/crowd.mp3')
const bell = new Audio('./sounds/bell.mp3');
const wild = new Audio('./sounds/wild.mp3')
const austinTheme = new Audio('./sounds/stonecold.mp3');
const woo = new Audio('./sounds/woo.mp3')

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.loading').display = 'none';
    document.querySelector('.therest').display = 'block';
    console.log('Loaded')
  });
start.addEventListener('click', function() {

if(p1.value == '' || p2.value == ''){
    alert('Enter names to wrassle')
} else {
    setTimeout(function() {
        healthBar.style.display = 'block'
        healthBar2.style.display = 'block'
        }, 1000)
    crowd.play()
    setTimeout(function(){
        bell.play();
    }, 700)
    p1.classList.add('left');
    p2.classList.add('right');
    start.classList.add('fadeOut');
    title.classList.add('fadeOut');
    enterNames.classList.add('fadeOut');
    setTimeout(function() {
        p1.style.display = 'none';
        p2.style.display = 'none';
        start.style.display = 'none';
        enterNames.style.display = 'none';
        title.style.display = 'none';
    }, 900)
    const wrestlers = [{
        name: p1.value.toUpperCase(),
        health: 100,
        wins: 0
    },
    
    {
        name: p2.value.toUpperCase(),
        health: 100,
        wins: 0
    }]
    names.push(p1.value);
    names.push(p2.value);

    const verbs = ['hits', 'pummels', 'nails', 'pounds', 'destroys', 'slams', 'smashes', 'bashes', 'busts']
    const wwe = [{
        name: 'Stone Cold',
        pic: './img/steveaustin.jpg',
        theme: './sounds/stonecold.mp3',
        finisher: 'Stone Cold Stunner'
    },
    {
    name: 'HHH',
    pic: './img/hhh.jpg',
    theme: './sounds/hhh.mp3',
    finisher: 'Pedigree'
    },
    {
    name: 'Kane',
    pic: './img/kane.jpg',
    theme: './sounds/kane.mp3',
    finisher: 'Chokeslam from Hell'
    },
    {
    name: 'Undertaker',
    pic: './img/undertaker.jpg',
    theme: './sounds/undertaker.mp3',
    finisher: 'Tombstone Piledriver'
    }]
    const moves = [{
        name: 'suplex', 
        health: 10,
        pic: './img/suplex.jpg'
    },
    {
        name: 'piledriver', 
        health: 12,
        pic: './img/piledriver.jpg'
    },
    {
        name: 'Boston Crab',
        health: 10,
        pic: './img/crab.jpg'
     },
     {
        name: 'Sharpshooter', 
        health: 12,
        pic: './img/sharpshooter.jpg'
     },
     {
         name: 'DDT',
         health: 10,
         pic: './img/ddt.jpg'
      },
      {
          name: 'punch', 
          health: 4,
          pic: './img/punch.jpg'
      },
      {
          name: 'flying elbow drop',
          health: 8,
          pic: './img/elbow.jpg'
      },
      {
        name: 'gorilla press slam',
        health: 10,
        pic: './img/gpslam.jpg'
    },
    {
        name: 'hurricanerana',
        health: 10,
        pic: './img/hurricanerana.jpg'
    },
    {
        name: 'dropkick',
        health: 8,
        pic: './img/dropkick.jpg'
    },
    {
        name: 'German suplex',
        health: 10,
        pic: './img/gsuplex.jpg'
    },
    {
        name: 'powerbomb',
        health: 14,
        pic: './img/powerebomb.jpg'
    },
    {
        name: 'spear',
        health: 12,
        pic: './img/spear.jpg'
    },
    {
        name: 'chokeslam',
        health: 8,
        pic: './img/chokeslam.jpg'
    },
    {
        name: 'facebuster',
        health: 8,
        pic: './img/facebuster.jpg'
    },
    {
        name: 'brainbuster',
        health: 10,
        pic: './img/brainbuster.jpg'
    },
    {
        name: 'neckbreaker',
        health: 10,
        pic: './img/neckbreaker.jpg'
    },
    {
        name: 'backbreaker',
        health: 10,
        pic: './img/backbreaker.jpg'
    },
    {
        name: 'powerslam',
        health: 10,
        pic: './img/powerslam.jpg'
    },
    {
        name: 'figure four',
        health: 8,
        pic: './img/figurefour.jpg'
    },
    {
        name: 'moonsault',
        health: 10,
        pic: './img/moonsault.jpg'
    },
    {
        name: '450 splash',
        health: 12,
        pic: './img/450.jpg'
    }];
    shuffle(moves);
    console.log(moves)
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      p1healthname.innerText = `${p1.value}`
      p2healthname.innerText = `${p2.value}`
    
    var keepScrollin = setInterval(function(){
        bottom.scrollIntoView();
    }, 500)
    var fightMove = document.createElement('P');
    setTimeout(function() {
    match.style.display = 'block';
    match.innerHTML = `<h1>${wrestlers[0].name}   vs.   ${wrestlers[1].name}</h1>
    <br>`
    }, 1000);
    setTimeout(function() {
    var fight = setInterval(function() {
        let randomWWE = Math.floor(Math.random() * 4)
        let randomTheme = new Audio(`${wwe[randomWWE].theme}`);
        let chance = Math.floor(Math.random() * 50 + 1);
        const rand = Math.floor(Math.random() * 6 + 1)
        const punch = new Audio(`./sounds/punch${rand}.mp3`)
    // shuffle(wrestlers);
    shuffle(verbs);
    const random1 = Math.floor(Math.random() * 2);
    let random2 = 0;
    if (random1 == 0){
        random2 = 1;
    }else if (random1 == 1){
        random2 = 0
    }
    console.log(random1)
    console.log(random2)
    let randomMove = moves[Math.floor(Math.random() * 22)]
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<br><br><br>`
    match.appendChild(newDiv);
    setTimeout(function(){
        console.log(chance)
    if(chance === 10 || chance === 20 || chance === 30 || chance === 40 || chance === 50){
        newDiv.innerHTML = `<div id='test'><img src='./img/warrior.jpg' width='300' height='200'><p>${wrestlers[random1].name} gets pumped up!</p><br><br></div>`
        wrestlers[random1].health += 20;
        setTimeout(function() {
            woo.play();
        }, 400)
    } else if(chance === 1) {
        randomTheme.play();
        newDiv.innerHTML = `<div id='test'><img src='${wwe[randomWWE].pic}' width='300' height='200'><p>GOOD GOD ALMIGHTY. IT'S ${wwe[randomWWE].name}! HE HITS ${wrestlers[random1].name} with a ${wwe[randomWWE].finisher}!</p><br><br></div>`
        wrestlers[random1].health -= 40;
    } else {
    newDiv.innerHTML = `<div id='test'><img src='${randomMove.pic}' width='300' height='200'><p>${wrestlers[random1].name} ${verbs[0]} ${wrestlers[random2].name} with a ${randomMove.name}</p><br><br></div>`
    wrestlers[random2].health -= randomMove.health;
    healthBar.style.width = `${wrestlers[0].health}px`;
    healthBar2.style.width = `${wrestlers[1].health}px`;
    console.log(`${wrestlers[0].name}: ${wrestlers[0].health}`)
    console.log(`${wrestlers[1].name}: ${wrestlers[1].health}`)
    setTimeout(function() {
        punch.play();
    }, 200)
    }
}, 300)


    // console.log(document.querySelector(`.id${pid}`).classList)
    // document.querySelector(`.id${pid}`).classList.add(`.upAndOut`)
    console.log(document.getElementById('test'))

    
    // setTimeout(function(){
    //     pid++;
    // }, 1000)
    
    console.log(pid)
    // document.getElementById('match').appendChild(fightMove)
    // insertAfter(match, fightMove)
    // }, 1000);
    if(wrestlers[0].health <= 0 || wrestlers[1].health <= 0){
        console.log('WIN!')
        clearInterval(fight);
        let pin = document.createElement('div');
        let win = document.createElement('div');
        // pin.innerHTML = `<br><br><br>`
        // win.innerHTML = `<br><br><br>`

        if(wrestlers[0].health > wrestlers[1].health){
            match.appendChild(pin)
            pin.innerHTML = `<div id='test'><img src='./img/pin.jpg' width='300' height='200'><p>${wrestlers[0].name} pins ${wrestlers[1].name}</div>`
           setTimeout(function() {
            match.appendChild(win)
            crowd.pause();
            wild.play()
            bell.play()
            win.innerHTML += `<h1 id='fadeIn'>${wrestlers[0].name} WINS!</h1>`

            // window.localStorage.setItem(`${wrestlers[0].name}`, JSON.stringify(wrestlers[0]));
            var log = JSON.parse(window.localStorage.getItem(`${wrestlers[0].name}`))
            log.wins += 1;
            window.localStorage.setItem(`${wrestlers[0].name}`, JSON.stringify(log));
         console.log(log.wins)
            document.querySelector('body').style.overflow = 'visible';

    }, 1000)
        healthBar.style.display = 'none'
        healthBar2.style.display = 'none'
    } else {
        match.appendChild(pin);

        pin.innerHTML = `<div id='test'><img src='./img/pin.jpg' width='300' height='200'><p>${wrestlers[1].name} pins ${wrestlers[0].name}</div>`

        setTimeout(function() {
            match.appendChild(win)
            crowd.pause();
            wild.play()
            bell.play()
        win.innerHTML += `<h1 id='fadeIn'>${wrestlers[1].name} WINS!</h1>`
        // window.localStorage.setItem(`${wrestlers[1].name}`, JSON.stringify(wrestlers[1]));
        var log = JSON.parse(window.localStorage.getItem(`${wrestlers[1].name}`));
        log.wins += 1;
        window.localStorage.setItem(`${wrestlers[1].name}`, JSON.stringify(log));
         console.log(log.wins)

            document.querySelector('body').style.overflow = 'visible';
        }, 1000)
        clearInterval(fight);

        }
            clearInterval(keepScrollin)
            setTimeout(function() {
            bottom.scrollIntoView();
            }, 1000);
            healthBar.style.display = 'none'
            healthBar2.style.display = 'none'
    }
}, 1000)}, 2000);


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}


})
