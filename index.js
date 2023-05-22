hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
correctRainbow = ['Richard','Of','York','Gave','Battle','In','Vain'];
colorsAndWords = [];

rainbow = destination.concat(native, hero);
rainbow.reverse()

if (hero.length < 1) {
    rainbow.unshift('Richard');
}

if (native.length < 2) {
    rainbow = rainbow.slice(0, rainbow.length - native.length - destination.length).concat(Array(2 - native.length), rainbow.slice(rainbow.length - native.length - destination.length));
}

if (destination.length < 4) {
    rainbow = rainbow.slice(0, rainbow.length - destination.length).concat(Array(4 - destination.length), rainbow.slice(rainbow.length - destination.length));
}

for (i = 0; i < 7; i++) {
    if (rainbow[i] !== correctRainbow[i]) {
        rainbow[i] = correctRainbow[i];
    }
}

for (i in rainbow) {
    color = null;
    // Maybe i should have used red, orange, yellow, green, blue, indigo, violet colors but these colors look so terrible in html
    switch (rainbow[i]) {
        case 'Richard':
            color = '#f54336';
            break;
        case 'Of':
            color = '#ff9901';
            break;
        case 'York':
            color = '#ffec3b';
            break;
        case 'Gave':
            color = '#8cc44a';
            break;
        case 'Battle':
            color = '#03aaf4';
            break;
        case 'In':
            color = '#4051b6';
            break;
        case 'Vain':
            color = '#9c27b0';
            break;
    }
    colorsAndWords.push(`<div style="display: flex; flex-direction: column; align-items: center;">
    <div style="background: ${color};height: 50px; width: 50px; border-radius: 50%;"></div>
    <div style="font-family: 'Quicksand', sans-serif;">${rainbow[i]}</div></div>`);
}

document.write(`<div style="display: flex; justify-content: space-evenly; align-items: center;">${colorsAndWords.join('')}</div>`)