const workELement = document.getElementById('activity-work');
const playELement = document.getElementById('activity-play');
const studyELement = document.getElementById('activity-study');
const exerciseELement = document.getElementById('activity-exercise');
const socialELement = document.getElementById('activity-social');
const selfCareELement = document.getElementById('activity-self-care');
const activityName = document.getElementsByClassName('activity-name');
const btnGroup = document.getElementsByClassName('btn');

btnGroup[1].classList.add('active-btn');

const changeBtnColor = (param) => {
    if (param !== 'Weekly') {
        btnGroup[1].classList.remove('active-btn');
    }
    else {
        btnGroup[1].classList.add('active-btn');
    }
}

const calculateCurrentTime = (param, dataObj) => {
    if (param === 'Daily') {
        for (let i = 0; i < activityName.length; i++) {
            if (activityName[i].innerHTML === dataObj[i].title) {
                let parentElement = activityName[i].parentElement;

                let currentTime = parentElement.querySelector('.presentTime');
                currentTime.innerText = `${dataObj[i].timeframes.daily.current}hrs`;
            }
        }
    }
    else if (param === 'Weekly') {
        for (let i = 0; i < activityName.length; i++) {
            if (activityName[i].innerHTML === dataObj[i].title) {
                let parentElement = activityName[i].parentElement;

                let currentTime = parentElement.querySelector('.presentTime');
                currentTime.innerText = `${dataObj[i].timeframes.weekly.current}hrs`;
            }
        }
    }
    else {
        for (let i = 0; i < activityName.length; i++) {
            if (activityName[i].innerHTML === dataObj[i].title) {
                let parentElement = activityName[i].parentElement;

                let currentTime = parentElement.querySelector('.presentTime');
                currentTime.innerText = `${dataObj[i].timeframes.monthly.current}hrs`;
            }
        }
    }
}

const calculatePreviousTime = (param, dataObj) => {
    if (param === 'Daily') {
        for (let i = 0; i < activityName.length; i++) {
            if (activityName[i].innerHTML === dataObj[i].title) {
                let parentElement = activityName[i].parentElement;

                let previousTime = parentElement.querySelector('.previousTime');
                previousTime.innerText = `Yestarday - ${dataObj[i].timeframes.daily.previous}hrs`;
            }
        }
    }
    else if (param === 'Weekly') {
        for (let i = 0; i < activityName.length; i++) {
            if (activityName[i].innerHTML === dataObj[i].title) {
                let parentElement = activityName[i].parentElement;

                let previousTime = parentElement.querySelector('.previousTime');
                previousTime.innerText = `Last Week - ${dataObj[i].timeframes.weekly.previous}hrs`;
            }
        }
    }
    else {
        for (let i = 0; i < activityName.length; i++) {
            if (activityName[i].innerHTML === dataObj[i].title) {
                let parentElement = activityName[i].parentElement;

                let previousTime = parentElement.querySelector('.previousTime');
                previousTime.innerText = `Last Month - ${dataObj[i].timeframes.monthly.previous}hrs`;
            }
        }
    }
}

const changeData = async (param) => {
    try {
        let response = await fetch('data.json');
        let dataObj = await response.json();

        calculateCurrentTime(param, dataObj);
        calculatePreviousTime(param, dataObj);
    }
    catch (error) {
        console.error(`Error processing data: ${error}`);
    }
}


for (let i = 0; i < btnGroup.length; i++) {
    btnGroup[i].addEventListener('click', function () {
        changeBtnColor(this.innerText);
        changeData(this.innerText);
    });
}