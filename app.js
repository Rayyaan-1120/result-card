const logintext = document.querySelector('.logintext')
const loginpass = document.querySelector('.loginpass') 
const loginbtn = document.querySelector('.loginbtn')
const main = document.querySelector('.main')
const selectimage = document.querySelector('.img')
const usernameshow = document.querySelector('.usernameshow')

const mainsubwrapper = document.querySelector('.mainsubswrapper')
const subname = document.querySelector('.subname')
const themarks = document.querySelector('.themarks')
const practmarks = document.querySelector('.practmarks')

const totalmarknum = document.querySelector('.totalmarknum')
const totalpercentage = document.querySelector('.totalpercentage')
const rank = document.querySelector('.rank')

const student1 = {
    name: 'Hasan Iqrar',
    pin: 1234,
    theory:[50,55,60,65,70],
    practical:[8,10,12,13,15],
    subjects:['English','Maths','Urdu','Chemistry','Physics']
}
const student2 = {
    name: 'Shayan Gul',
    pin: 1256,
    theory:[60,50,65,35,40],
    practical:[4,12,12,14,9],
    subjects:['English','Maths','Urdu','Chemistry','Physics']
}
const student3 = {
    name: 'Hussain Saif',
    pin: 1278,
    theory:[60,35,50,65,40],
    practical:[8,5,3,8,11],
    subjects:['English','Maths','Urdu','Chemistry','Physics']
}
const student4 = {
    name: 'Zohaib Faisal',
    pin: 1289,
    theory:[70,25,40,35,30],
    practical:[12,3,4,5,2],
    subjects:['English','Maths','Urdu','Chemistry','Physics']
}
const student5 = {
    name: 'Tufail Naeem',
    pin: 1290,
    theory:[20,33,35,25,15],
    practical:[7,1,4,7,2],
    subjects:['English','Maths','Urdu','Chemistry','Physics']
}

const allStudents = [student1,student2,student3,student4,student5]

const calusrname = function(stu){
    stu.forEach(acc => {
        acc.username = acc.name.
        toLowerCase().split(' ').map(nam => nam[0]).join('')
    })
}

calusrname(allStudents)
console.log(allStudents)

const displayMarks = function(marks){
mainsubwrapper.innerHTML = ' '

marks.theory.forEach((mov,i) => {
    const totalized = mov >= 33 ? 'pass' : 'fail'
    console.log(mov)

    const pract = marks.practical[i]
    const practtotal = pract >= 7 ? 'pass' : 'fail' 

    const subj = marks.subjects[i]
    console.log(subj)

    console.log(pract)
    console.log(i)

    const html = `<div class="alldetails">
    <h1 class="subname">${subj}</h1>
    <h2 class="${totalized}">${mov}</h2>
    <h2 class="${practtotal}">${pract}</h2>
</div>`

mainsubwrapper.insertAdjacentHTML('afterbegin',html)
})


}

// displayMarks(student1)

let currentstudent;

loginbtn.addEventListener('click',(e) => {
    e.preventDefault()

    currentstudent = allStudents.find(stu => stu.username === logintext.value)

    if(currentstudent?.pin === Number(loginpass.value)){

        console.log(currentstudent)
        main.style.opacity = '100'
        usernameshow.style.opacity = '100'
        displayMarks(currentstudent)
        displaytotalnumber(currentstudent)
        displayusername(currentstudent)
    }

})

const displaytotalnumber = function(dis){
    const tnum = dis.theory.reduce((acc,cur) => acc + cur,0)
    const pnum = dis.practical.reduce((acc,cur) => acc + cur,0)

    dis.totalmarks = `${tnum + pnum}`
    const switching = dis.totalpercent = `${Math.trunc((tnum + pnum) / 500 * 100)}`

    totalmarknum.textContent = `${dis.totalmarks}`
    totalpercentage.textContent = `${switching}`

    if(switching >= 70){
        selectimage.src = "images/Group 1.svg"
    }else if(switching >= 60){
        selectimage.src = "images/Group 2.svg"
    }else if(switching >= 55){
        selectimage.src = "images/Group 3.svg"
    }else if(switching >= 45){
        selectimage.src = "images/Group 4.svg"
    }else if(switching >= 33){
        selectimage.src = "images/Group 5.svg"
    }else{
        selectimage.src = "images/Group 6.svg"
    }
}

const displayusername = (nameing) => {
    const showname = nameing.name.split(' ')
    usernameshow.textContent = `${showname[0]}`
    console.log(showname)
}









