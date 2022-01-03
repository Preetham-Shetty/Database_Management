'use script'

const viewAll = document.querySelector('.addcareers');

function toggle(){
    const blur = document.querySelector('.blurr')
    blur.classList.toggle('active')
    const popup = document.querySelector('.employeeTable');
    popup.classList.toggle('active');
}

function toggle_dep(){
    const blur = document.querySelector('.blurr')
    blur.classList.toggle('active')
    const popup = document.querySelector('.departmentTable');
    popup.classList.toggle('active');
}

function toggle_loc(){
    const blur = document.querySelector('.blurr')
    blur.classList.toggle('active')
    const popup = document.querySelector('.locationTable');
    popup.classList.toggle('active');
}

function toggle_work(){
    const blur = document.querySelector('.blurr')
    blur.classList.toggle('active')
    const popup = document.querySelector('.worksTable');
    popup.classList.toggle('active');
}

function toggle_proj(){
    const blur = document.querySelector('.blurr')
    blur.classList.toggle('active')
    const popup = document.querySelector('.projectTable');
    popup.classList.toggle('active');
}

function toggle_depen(){
    const blur = document.querySelector('.blurr')
    blur.classList.toggle('active')
    const popup = document.querySelector('.dependentTable');
    popup.classList.toggle('active');
}