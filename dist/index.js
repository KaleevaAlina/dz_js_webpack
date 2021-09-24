/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//Задание 1\r\nasync function getTasks(){\r\n\tlet arr;\t\r\n    let result = await fetch('https://test-todoist.herokuapp.com/api/tasks').then(response =>response.json()).then(commits => {arr = commits}); \r\n    for (const x in arr) {\r\n        let myJSON1 = JSON.stringify(arr);\r\n        document.getElementById(\"demo\").innerHTML = myJSON1;\r\n   }  \r\n}\r\ngetTasks(); \r\n\r\n//Задание 2\r\nasync function getUsers(name){ \r\n    let result = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()) \r\n    console.log(\"Задача 2а\",result); \r\n\tfor (let x1 in result) {\r\n        // console.log('Задача 2 ', result);\r\n\r\n\t\tif (name == result[x1].name) {\r\n            let parent = document.querySelector('#demo2 ');\r\n            let div = document.createElement('div');\r\n            parent.appendChild(div);\r\n           document.getElementById(\"demo2\").innerHTML += result[x1].id+' '+result[x1].name +'; ';\r\n\t\t}\r\n   }  \r\n    // result.forEach(element => { \r\n    //     console.log(\"Задача 2б\",element); \r\n \r\n   // }) \r\n} \r\n//Вывод на страницу сайта пользователей с username test\r\n getUsers('string'); \r\n//Вывод на страницу сайта пользователей с username Friends\r\n getUsers('Friends');\r\n//Вывод на страницу сайта пользователей с username hello\r\n getUsers('hello');\r\n\r\n//Задание 3a\r\nasync function zadanie3(){ \r\n    let result = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()) \r\n    console.log(\"Задача 3а\",result); \r\n\tfor (const x3 in result) {\r\n        let parent3 = document.querySelector('#demo3 ');\r\n        let div = document.createElement('div');\r\n        parent3.appendChild(div); \r\n\r\n           document.getElementById(\"demo3\").innerHTML += 'id: ' + result[x3].id +  ', '   +  'name: ' +  result[x3].name +'; ';\t\t\r\n   }  \r\n    result.forEach(element => { \r\n        console.log(\"Задача 3a\",element); \r\n \r\n    }) \r\n} \r\nzadanie3();\r\n\r\n\r\n\r\n\r\nasync function z3() {\r\n    // alert('test');\r\n     let result3 = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>response.json()).then(commits => commits);\t\r\n            let myJSON3 = JSON.stringify(result3);\r\n           document.getElementById(\"demo3b\").innerHTML = myJSON3;\r\n   }\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });