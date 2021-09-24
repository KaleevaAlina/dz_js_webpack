"use strict"
//Задание 1
async function getTasks(){
	let arr;	
    let result = await fetch('https://test-todoist.herokuapp.com/api/tasks').then(response =>response.json()).then(commits => {arr = commits}); 
    for (const x in arr) {
        let myJSON1 = JSON.stringify(arr);
        document.getElementById("demo").innerHTML = myJSON1;
   }  
}
getTasks(); 

//Задание 2
async function getUsers(name){ 
    let result = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()) 
    console.log("Задача 2а",result); 
	for (let x1 in result) {
        // console.log('Задача 2 ', result);

		if (name == result[x1].name) {
            let parent = document.querySelector('#demo2 ');
            let div = document.createElement('div');
            parent.appendChild(div);
           document.getElementById("demo2").innerHTML += result[x1].id+' '+result[x1].name +'; ';
		}
   }  
    // result.forEach(element => { 
    //     console.log("Задача 2б",element); 
 
   // }) 
} 
//Вывод на страницу сайта пользователей с username test
 getUsers('string'); 
//Вывод на страницу сайта пользователей с username Friends
 getUsers('Friends');
//Вывод на страницу сайта пользователей с username hello
 getUsers('hello');

//Задание 3a
async function zadanie3(){ 
    let result = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()) 
    console.log("Задача 3а",result); 
	for (const x3 in result) {
        let parent3 = document.querySelector('#demo3 ');
        let div = document.createElement('div');
        parent3.appendChild(div); 

           document.getElementById("demo3").innerHTML += 'id: ' + result[x3].id +  ', '   +  'name: ' +  result[x3].name +'; ';		
   }  
    result.forEach(element => { 
        console.log("Задача 3a",element); 
 
    }) 
} 
zadanie3();




async function z3() {
    // alert('test');
     let result3 = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()).then(commits => commits);	
            let myJSON3 = JSON.stringify(result3);
           document.getElementById("demo3b").innerHTML = myJSON3;
   }
