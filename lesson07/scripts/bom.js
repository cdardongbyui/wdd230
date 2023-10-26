const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

input.addEventListener('focus', () => {
  // Check if the input value is "Alma 5" and update the placeholder text accordingly
  if (input.value === 'Alma 5') {
    input.placeholder = 'Please Enter a Chapter';
  }
});

input.addEventListener('blur', () => {
  // Reset the placeholder when the input loses focus
  input.placeholder = 'Enter a Book and Chapter';
});

button.addEventListener('click', () => {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
