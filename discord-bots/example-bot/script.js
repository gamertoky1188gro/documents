const { commands } = require('./commands');

function btn1w() {
    const nav1 = document.getElementById('nav1');

    if (nav1.style.display === 'none') {
        nav1.style.display = 'flex';
    } else {
        nav1.style.display = 'none';
    };

};

function btn2() {
    const nav1 = document.getElementById('nav1');

    nav1.style.display = 'none';
};

function btn3() {
    window.close()
};

function btn4() {
    const window = document.getElementById('window');
    const img = document.getElementById('btn4')

    window.style.display = 'flex';

    alert('scroll up');

    img.style.margin = '3px solid black'
}

function closeWindow() {
    const window = document.getElementById('window');

    window.style.display = 'none';
}

function fullscreen() {
    const nav1 = document.getElementById('nav1');
    const nav2 = document.getElementById('nav2');
    
    if (nav1.style.display = 'flex',
        nav2.style.display = 'flex') {
            nav1.style.display = 'none'
            nav2.style.display = 'none'
    } else {
        nav1.style.display = 'flex'
        nav2.style.display = 'flex'
    };
    
    document.getElementById('window').style.height = '100%';
    document.getElementById('window').style.width = '100%';

}




const div1 = document.getElementById('botDetails')