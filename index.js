// fa-check-circle-o [&#xf05d;]

const output = document.getElementById('output');
let convertedTemp;

const conversion = (number, unit) => {
    output.innerHTML=`🤔🤔🤔`
    if (unit === 'cel') {
        convertedTemp = (number * 1.8) + 32;
        setTimeout(() => {
            output.innerHTML = `${number} &deg;Celcius = ${convertedTemp.toFixed(2)} &deg;Farenhit`;
        }, 1000);

    } else if(unit === 'far') {
        convertedTemp = (number - 32) * (5 / 9);
        setTimeout(() => {
            output.innerHTML = `${number} &deg;Farenhit = ${convertedTemp.toFixed(2)} &deg;Celcius`;
        }, 1000);
    }
}


const calculateTemp = (event) => {
    event.preventDefault();
    const number = document.getElementById('temp').value;
    //const unit = document.getElementById('unit').value;

    const unitSelected = document.getElementById('unit');
    const unit = unitSelected.options[unitSelected.selectedIndex].value;

    conversion(number, unit);
}

document.getElementById('convert-form').addEventListener('submit', calculateTemp);


