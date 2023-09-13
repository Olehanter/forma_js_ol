window.onload = () => {
    res = document.querySelectorAll('.result span')
    calc.addEventListener('click', fCalc)
    clear.addEventListener('click', fClear)
    function fCalc() {
    if (!edge.value) {
    alert('Введите данные!')
    return
    }
    result = (+dist.value) * 2
    alert(result);
    }
    function fClear() {
    edge.value = ''
    res.forEach((item) => {
    item.innerText = ''
    } )
    }
    }