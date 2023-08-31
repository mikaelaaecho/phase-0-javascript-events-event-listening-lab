function addingEventListener() {
    const input = document.getElementById('button');
const targetElement = document.getElementById('target');

input.addEventListener('click', function() {
  alert('I was clicked!');
  targetElement.textContent = 'Button clicked!';
});
}
