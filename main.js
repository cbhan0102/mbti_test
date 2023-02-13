const itemEls = document.querySelectorAll('.item')
const btnEl = document.querySelector('.btn')
const colors = ['red','orange','skyblue']

btnEl.addEventListener('click', function() {
    itemEls.forEach(function ( itemEl, index) {
        console.log(index, itemEl)
        itemEl.style.backgroundColor = colors[index]
    })
    btnEl.innerHTML = '<span>클릭 완료했습니다</span>'
})