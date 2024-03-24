new numberRush('modelCnt', {
    speed: 5,
    steps: 100,
    maxNumber: 8479
})

new numberRush('designerCnt', {
    speed: 5,
    steps: 10,
    maxNumber: 1277
})

new numberRush('mouCnt', {
    speed: 5,
    steps: 100,
    maxNumber: 7700
})
new numberRush('userCnt', {
    speed: 5,
    steps: 100,
    maxNumber: 9756
})

const bodyRect = document.body.getBoundingClientRect().top;
let lastKnownScrollPosition = 0;
const sections = document.getElementsByTagName('section')
const navList = document.querySelectorAll('nav ol li')
console.log('nav', navList)
const positionList = !sections ? [] : Array.from(sections).map((item, index)=>{
    return {
        id: item.id,
        positionY: item.getBoundingClientRect().top - bodyRect -120,
        bottomY: item.getBoundingClientRect().bottom - bodyRect-120
    }
}).filter((item)=>item.id !== "");

console.log('positionList', positionList)

document.addEventListener('scroll', e => {
    currScrollY = window.scrollY
    console.log('currScrollY',currScrollY)
    for(let i=0; i<positionList.length; i++) {
        const section = positionList[i]
        if(currScrollY >= section.positionY){
            console.log('매칭', section.id)
            navList[i].classList.add('active')
        }
        if(currScrollY > section.bottomY || currScrollY <= section.positionY) {
            console.log('나감')
            navList[i].classList.remove('active')
        }
    }
})