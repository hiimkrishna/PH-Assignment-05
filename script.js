document.addEventListener("DOMContentLoaded", function() {
    

    const heartButton = document.querySelectorAll('.heart');
    const coinButton = document.getElementById('coin');
    const copyButton = document.getElementById('copy');
    const cardContainer = document.getElementById('cardContainer');
    const historyContainer = document.getElementById('historyContainer');
const btn =document.querySelectorAll('.btn');

let coins = Number(coinButton.children[1].textContent);
btn.forEach(b => {
  b.addEventListener('click', () => {
    if (b.value === 'call') {
      if(coins === 0){
        alert('Not sufficient coin.')
      }
      else{
        const card = b.closest('.emergency-card');
      const title = card.querySelector('h3').textContent;
      const number = card.querySelector('p.font-bold.text-xl').textContent;

      alert(`Calling ${title} ${number}`);

      const now = new Date();
     
     const time = now.toLocaleTimeString();

      const entry = document.createElement('div');
      entry.className = 'flex justify-between bg-white rounded-lg px-3 py-2 shadow m-1 entry';
      entry.innerHTML = `
      <div class="info flex flex-col h-[50px]">
        <span class="call-number font-semibold">${title} </span>
        <span class="call-number font-semibold">${number} </span>
      </div>
      <span class="call-time text-gray-500 text-sm">${time}</span>
      `;


      historyContainer.appendChild(entry);
      coins-=20;
      coinButton.children[1].textContent = coins;

      }

    } else {
              const card = b.closest('.emergency-card');
              const number = card.querySelector('p.font-bold.text-xl').textContent;
            navigator.clipboard.writeText(number)
    }
  });
});


const favouriteButtons = document.querySelectorAll('.favourite');
  const navbarHeart = document.querySelector('#heart');

favouriteButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navbarHeart.textContent = Number(navbarHeart.textContent) + 1;
    });
  });
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', ()=>{
 const entries = historyContainer.querySelectorAll('.entry');
    entries.forEach(e => e.remove());
})
  });

 
  