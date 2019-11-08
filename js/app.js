const cards=[{name:"diamond",class:"fa fa-diamond"},{name:"plane-o",class:"fa fa-paper-plane-o"},{name:"anchor",class:"fa fa-anchor"},{name:"bolt",class:"fa fa-bolt"},{name:"cube",class:"fa fa-cube"},{name:"anchor2",class:"fa fa-anchor"},{name:"leaf",class:"fa fa-leaf"},{name:"bicycle",class:"fa fa-bicycle"},{name:"diamond2",class:"fa fa-diamond"},{name:"bomb",class:"fa fa-bomb"},{name:"leaf2",class:"fa fa-leaf"},{name:"bomb2",class:"fa fa-bomb"},{name:"bolt2",class:"fa fa-bolt"},{name:"bicycle2",class:"fa fa-bicycle"},{name:"plane-o2",class:"fa fa-paper-plane-o"},{name:"cube2",class:"fa fa-cube"},];let openCards=[],checkCardMax=0,matchedCards=0,moves=0,starsCount=3,timeSwitch=!1,startTime,endTime,finalTime;document.querySelector(".restart").addEventListener('click',restartGame,!1);function startGame(){shuffle(cards);buildCards()};function shuffle(array){var currentIndex=array.length,temporaryValue,randomIndex;while(currentIndex!==0){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue}
return array};function buildCards(){let ulDeck=document.querySelector(".deck");for(let i=0;i<cards.length;i++){let li=document.createElement("li");li.classList.add("card");li.addEventListener('click',showCard,!1);li.innerHTML=`

    <i class="${cards[i].class}">
    
    `;ulDeck.append(li)}};function showCard(event){let targetCard=event.target,targetMove=document.getElementsByClassName("moves");if(timeSwitch==!1){timerStart();timeSwitch=!0}
targetCard.removeEventListener('click',showCard,!1);targetCard.classList.add("open","show");addCardToCheck(targetCard);moves++;targetMove[0].innerHTML=moves;if(moves==20){removeStar();return}else if(moves==30){removeStar();return}else if(moves==40){removeStar();return}};function addCardToCheck(target){let match=target;openCards.push(match);checkCardMax++;if(checkCardMax==2){doesCardMatch()}};function clicksOff(){document.body.style.pointerEvents="none"};function clicksOn(){document.body.style.pointerEvents="auto"};function doesCardMatch(){clicksOff();if(openCards[0].innerHTML===openCards[1].innerHTML){openCards[0].classList.add('match')
openCards[1].classList.add('match')
CardMatchYes()}else{openCards[0].classList.add('fault')
openCards[1].classList.add('fault')
cardMatchNo()}};function CardMatchYes(){checkCardMax=0;matchedCards++;if(matchedCards==8){winGame()}
openCards[0].classList.add('anim')
openCards[1].classList.add('anim')
animateCSS('.anim','heartBeat',function(){openCards[0].classList.remove("anim");openCards[1].classList.remove("anim");openCards=[];clicksOn()})};function cardMatchNo(){checkCardMax=0;openCards[0].classList.add('anim')
openCards[1].classList.add('anim')
openCards[0].addEventListener('click',showCard,!1);openCards[1].addEventListener('click',showCard,!1);animateCSS('.anim','wobble',function(){openCards[0].classList.remove('fault')
openCards[1].classList.remove('fault')
openCards[0].classList.remove("open","show","anim");openCards[1].classList.remove("open","show","anim");openCards=[];clicksOn()})};function removeStar(){let stars=document.getElementsByClassName("stars");for(i=0;i<stars[0].children.length;i++){if(stars[0].children[i].innerHTML==='<i class="fa fa-star"></i>'){stars[0].children[i].innerHTML='<i class="fa fa-star-o"></i>';starsCount--;return}}};function restartGame(){window.location.reload(!1)};function timerStart(){startTime=new Date()};function timerEnds(){endTime=new Date();var timeDiff=endTime-startTime;timeDiff/=1000;var seconds=Math.round(timeDiff);finalTime=seconds}
function winGame(){timerEnds();Swal.fire({type:'success',title:'Congratulations! You Won!',text:`With ${moves} moves and ${starsCount} star(s) with ${finalTime} secs`,allowOutsideClick:!1,backdrop:`
    rgba(255,255,255, 1)
    center left
    no-repeat
  `,confirmButtonText:'<i class="fa fa-thumbs-up"></i> Play Again'}).then(function(){restartGame()})};function animateCSS(element,animationName,callback){const node=document.querySelectorAll(element);node[0].classList.add('animated',animationName)
node[1].classList.add('animated',animationName)
function handleAnimationEnd(){node[0].classList.remove('animated',animationName)
node[1].classList.remove('animated',animationName)
node[0].removeEventListener('animationend',handleAnimationEnd)
node[1].removeEventListener('animationend',handleAnimationEnd)
if(typeof callback==='function')callback()};node[0].addEventListener('animationend',handleAnimationEnd);node[1].addEventListener('animationend',handleAnimationEnd)}