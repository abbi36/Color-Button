let current = 'red';

function changeColor(button) {    
    if (current == 'red') {
        button.style.setProperty('background-color', 'orange');
        current = 'orange'
    } else if (current == 'orange') {
        button.style.setProperty('background-color', 'yellow');
        current = 'yellow';
    } else if (current == 'yellow') {
        button.style.setProperty('background-color', 'green');
        current = 'green'
    } else if (current == 'green') {
        button.style.setProperty('background-color', 'blue');
        current = 'blue'
    } else if (current == 'blue') {
        button.style.setProperty('background-color', 'indigo');
        current = 'indigo'
    } else if (current == 'indigo') {
        button.style.setProperty('background-color', 'violet')
        current = 'violet'
    } else if (current == 'violet') {
        button.style.setProperty('background-color', 'red')
        current = 'red'
    }
}


