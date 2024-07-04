const wish1 = document.createElement('p');
const wish2 = document.createElement('p');
const wish3 = '<p>something3</p>';
const wish4 = document.createElement('p');
const wish5 = document.createElement('p');
const wish6 = document.createElement('p');
const wish7 = document.createElement('p');
const wish8 = document.createElement('p');
wish1.innerText = 'something1';
wish2.innerText = 'something2';
wish4.innerText = 'something4';
wish5.innerText = 'something5';
wish6.innerText = 'something6';
wish7.innerText = 'something7';
wish8.innerText = 'something8';

const list = document.getElementsByClassName('list')[0];

list.appendChild(wish1);
list.insertAdjacentElement('beforeend', wish2);

console.log(list.innerHTML);

// list.innerHTML = wish3;

list.insertAdjacentHTML('beforeend', wish3);

const wishArr = [wish4, wish5, wish6];

for (const wish of wishArr) {
  list.appendChild(wish);
}

console.log(list.children.length);

const owner = document.getElementsByClassName('owner')[0];

owner.innerText = "Max's";

const firstWish = list.firstElementChild;

list.replaceChild(wish7, firstWish);

list.replaceChild(wish8, wish4);

list.removeChild(list.lastElementChild);
