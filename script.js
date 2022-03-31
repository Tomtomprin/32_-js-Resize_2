const ClassTest = document.querySelector('.test');

let backColorStyle = getComputedStyle(ClassTest).backgroundColor;
console.log(backColorStyle);

window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 1000) {
        // ↓もし、黄色か水色であったら、backgroundColorで背景色をピンクに変え、また、js上のbackColorStyleの値もピンクに上書きする。
        if (backColorStyle === 'rgb(255, 255, 0)' || backColorStyle === 'rgb(224, 255, 252)') {
            console.log('script11行目の記述のconsole');
            console.log(windowWidth);
            ClassTest.style.backgroundColor = 'rgb(255, 224, 224)';
            backColorStyle = 'rgb(255, 224, 224)';
        }
    }
    if (windowWidth > 1000) {
        // ↓もし、黄色かピンクであったら、backgroundColorで背景色を水色に変え、また、js上のbackColorStyleの値も水色に上書きする。

        if (backColorStyle === 'rgb(255, 224, 224)' || backColorStyle === 'rgb(255, 255, 0)') {
            console.log('script21行目の記述のconsole');
            console.log(windowWidth);
            ClassTest.style.backgroundColor = 'rgb(224, 255, 252)';
            backColorStyle = 'rgb(224, 255, 252)';
        }
    }
})
