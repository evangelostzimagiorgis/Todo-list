const add = document.querySelector('.add');
const search = document.querySelector('.search');
const input = document.querySelector('.add-input');
const list = document.querySelector('ul');

newlist = (todo) => {
    let html = `
    <li class="list-group-item">${todo}<i id="trash" class="float-right fas fa-trash-alt"></i></li>
    `;

    list.innerHTML += html;
}

list.addEventListener('click', e => {
    if (e.target.id == 'trash') {
        e.target.parentElement.remove();
    }
})

add.addEventListener('submit', e => {
    e.preventDefault();
    let todo = input.value.trim()

    if (todo.length) {
        newlist(todo);
        add.reset();
    }
})

const filterTodos = term  => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

}

const searchInput =  document.querySelector('.search-input');
search.addEventListener('keyup', () => {
    const term = searchInput.value.trim();
    filterTodos(term)    
})