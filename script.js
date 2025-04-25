function addTask() {
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById('todo-list').appendChild(li);

  input.value = '';
}