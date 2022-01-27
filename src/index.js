let current = 'red';

function changeColor(button) {    
    if (current == 'red') {
        button.style.setProperty('background-color', 'orange');
        current = 'orange'
    } else if (current == 'orange') {
        button.style.setProperty('background-color', 'yellow');
        current = 'yellow';
    }
}
