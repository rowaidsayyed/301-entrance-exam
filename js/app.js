'use strict';
var task = document.getElementById('task');
var datebox = document.getElementById('datebox');
var submitButton = document.getElementById('form');
var mainDiv = document.getElementById('mainDiv');
var removeIcon = document.getElementsByClassName('removespan');


var allTasks = JSON.parse(localStorage.getItem('task')) || [];
displayDom();

submitButton.addEventListener('submit',sub);

function TaskDate(task,datebox){
  this.task =task;
  this.datebox = datebox;
  allTasks.push(this);
}

function sub(e){
  e.preventDefault();
  new TaskDate(task.value,datebox.value);
  localStorage.setItem('task',JSON.stringify(allTasks));
  submitButton.reset();
  displayDom();
}


function displayDom(){
  mainDiv.innerHTML ='';
  var ulEl = document.createElement('ol');
  mainDiv.appendChild(ulEl);
  for(var i = 0 ; i<allTasks.length;i++){
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = allTasks[i].task;
    liEl = document.createElement('div');
    liEl.className ='dateDiv';
    ulEl.appendChild(liEl);
    liEl.textContent = allTasks[i].datebox;
    liEl = document.createElement('div');
    liEl.className ='removespan';
    ulEl.appendChild(liEl);
    liEl.textContent = 'X';
    liEl.id = i;
  }
  for(var j = 0 ; j<removeIcon.length;j++){
    removeIcon[j].addEventListener('click',removeFun);
  }
  dateDisp();
}


function removeFun(e){
  var removeIndex= e.target.id;
  allTasks.splice(removeIndex,1);
  localStorage.setItem('task',JSON.stringify(allTasks));
  displayDom();
}


function dateDisp(){
  var legend = document.getElementById('legend');
  var d = new Date();
  var year = d.getFullYear();
  var day = d.getDate();
  var m = d.getMonth();
  var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  months= months[m];
  var text = `${months} ${day} ${year} `;
  legend.textContent =text;

}
