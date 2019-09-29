
const showRepoDetails = repo => event => {
  //alert(`Hello ${repo.name}`);
  
  //toDo here function to display sublist for just one object and hide the other  
  const ul = document.getElementById('list');
  
  const li = createNode('li');
  const nameEl = createNode('span');
  const descEl = createNode('span');
  const Namelabel = createNode('b');
  Namelabel.innerHTML = 'Name:';
  const desclabel = createNode('b');
  desclabel.innerHTML = 'Desc:';
  nameEl.innerHTML = repo.name;
  descEl.innerHTML = repo.collaborators_url;
  const nameText = createNode('p');
  const descText = createNode('p');
  append(nameText, Namelabel);
  append(descText, desclabel);
  append(nameText, nameEl);
  append(descText, descEl);
  append(li, nameText);
  append(li, descText);
  append(ul, li);
  document.querySelector('#contributors').classList.add('active');
};

function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
return parent.appendChild(el);
}

const createListItem = repo => {
  const ul = document.getElementById('list');
  
  const li = createNode('li');
  const nameEl = createNode('span');
  const descEl = createNode('span');
  const Namelabel = createNode('b');
  Namelabel.innerHTML = 'Name:';
  const desclabel = createNode('b');
  desclabel.innerHTML = 'Desc:';
  nameEl.innerHTML = repo.name;
  descEl.innerHTML = repo.description;
  const nameText = createNode('p');
  const descText = createNode('p');
  append(nameText, Namelabel);
  append(descText, desclabel);
  append(nameText, nameEl);
  append(descText, descEl);
  append(li, nameText);
  append(li, descText);
  append(ul, li);
  nameEl.addEventListener('click', showRepoDetails(repo));
};

const start = async url => {
  const response = await fetch(url);
  const repoList = await response.json();
  repoList.forEach(createListItem);
};

start('https://api.github.com/orgs/HackYourFuture/repos?per_page=3');




