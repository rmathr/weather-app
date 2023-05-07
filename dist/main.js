/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/interactDOM.js":
/*!****************************!*\
  !*** ./src/interactDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const interactDOM = function(){

    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    const getInputValue = function(idName){
        return interactDOM().hookDOMelement(idName).value
    }

    const toggleElementDisplay = function(element, displayValue){
        if(arguments.length > 1){
            element.style.display == displayValue ? element.style.display = 'none' : element.style.display = displayValue
        } else if (arguments.length == 1){
            element.style.display == 'flex' ? element.style.display = 'none' : element.style.display = 'flex'
        }
    }

   

    const hide = function(element){
        element.style.display = 'none'
    }

    const show = function(element){
        element.style.display = 'flex'
    }

    const appendElementAndDefineContent = function (container, obj) {
        while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
        }
        let locationElem = interactDOM().createElementWithClassAndId('p', 'location-name', 'locationName')
        let currentTemp = interactDOM().createElementWithClassAndId('p', 'current-temperature', 'currentTemperature')
        let currentFeelsLike = interactDOM().createElementWithClassAndId('p', 'current-feels-like', 'currentFellsLike')
        let currentWind = interactDOM().createElementWithClassAndId('p', 'current-wind', 'currentWind')
        let currentHumidity = interactDOM().createElementWithClassAndId('p', 'current-humidity', 'currentHumidity')
        container.appendChild(locationElem)
        container.appendChild(currentTemp)
        container.appendChild(currentFeelsLike)
        container.appendChild(currentWind)
        container.appendChild(currentHumidity)
        locationElem.textContent = `${obj.location.name}, ${obj.location.country}`
        currentTemp.textContent = `${obj.current.temp_c}`
        currentFeelsLike.textContent = `${obj.current.feelslike_c}`
        currentWind.textContent = `${obj.current.wind_kph}`
        currentHumidity.textContent = `${obj.current.humidity}`
    }


    const formReset = function(formId){
    const form = interactDOM().hookDOMelement(`${formId}`)
    form.reset()    
    }
    
    return { 
        createElementWithClassAndId, 
        hookDOMelement, 
        getInputValue, 
        appendElementAndDefineContent,
        toggleElementDisplay,
        hide,
        show,
        formReset,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactDOM);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interactDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactDOM */ "./src/interactDOM.js");



function handleSearch (){
    const cityInputForm = document.querySelector('form')
    const cityInput = document.getElementById('cityInput')
    let city
    cityInputForm.addEventListener('submit', async (e) =>{
        e.preventDefault()
        city = cityInput.value
        const data = await searchWeather(city)
        handleContentShow(data)
    })
}

handleSearch()

function handleContentShow (obj){
    // const currentWeather = interactDOM().createElementWithClassAndId('section', 'current-weather', 'currentWeather')
    const currentWeather = (0,_interactDOM__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('currentWeather')
    const mainContent = (0,_interactDOM__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('mainContent')
    mainContent.appendChild(currentWeather)
    ;(0,_interactDOM__WEBPACK_IMPORTED_MODULE_1__["default"])().appendElementAndDefineContent(currentWeather, obj)
}




async function searchWeather(searchCity){
            
    // const currentWeather = await fetch(`https://api.weatherapi.com/v1/current.json?key=005512f4aa2f45aab64154049230405&q=${searchCity}`)
    // const currentData = await currentWeather.json()
    // console.log(currentData)
    
    const forecastWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=005512f4aa2f45aab64154049230405&days=3&q=${searchCity}`)
    const forecastData = await forecastWeather.json()
    console.log(forecastData)
    console.log(forecastData.location.name)
    return forecastData
    }

async function stardardLocation(city) {
    const data = await searchWeather(city)
    handleContentShow(data)
}

stardardLocation('toronto')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msa0JBQWtCLElBQUkscUJBQXFCO0FBQ2pGLHFDQUFxQyxtQkFBbUI7QUFDeEQsMENBQTBDLHdCQUF3QjtBQUNsRSxxQ0FBcUMscUJBQXFCO0FBQzFELHlDQUF5QyxxQkFBcUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDM0VmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ21CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3REFBVztBQUN0Qyx3QkFBd0Isd0RBQVc7QUFDbkM7QUFDQSxJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SEFBOEgsV0FBVztBQUN6STtBQUNBO0FBQ0E7QUFDQSxvSUFBb0ksV0FBVztBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/MzU5NyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbnRlcmFjdERPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQgPSBmdW5jdGlvbih0eXBlLCBjbGFzc05hbWUsIGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApXHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGAke2lkTmFtZX1gXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob29rRE9NZWxlbWVudCA9IGZ1bmN0aW9uIChpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZE5hbWV9YClcclxuICAgICAgICByZXR1cm4gZWxlbVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldElucHV0VmFsdWUgPSBmdW5jdGlvbihpZE5hbWUpe1xyXG4gICAgICAgIHJldHVybiBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KGlkTmFtZSkudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVFbGVtZW50RGlzcGxheSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGRpc3BsYXlWYWx1ZSl7XHJcbiAgICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gZGlzcGxheVZhbHVlID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVZhbHVlXHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgY29uc3QgaGlkZSA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3cgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCA9IGZ1bmN0aW9uIChjb250YWluZXIsIG9iaikge1xyXG4gICAgICAgIHdoaWxlIChjb250YWluZXIuaGFzQ2hpbGROb2RlcygpKXtcclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhdGlvbkVsZW0gPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdsb2NhdGlvbi1uYW1lJywgJ2xvY2F0aW9uTmFtZScpXHJcbiAgICAgICAgbGV0IGN1cnJlbnRUZW1wID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY3VycmVudC10ZW1wZXJhdHVyZScsICdjdXJyZW50VGVtcGVyYXR1cmUnKVxyXG4gICAgICAgIGxldCBjdXJyZW50RmVlbHNMaWtlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnY3VycmVudC1mZWVscy1saWtlJywgJ2N1cnJlbnRGZWxsc0xpa2UnKVxyXG4gICAgICAgIGxldCBjdXJyZW50V2luZCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2N1cnJlbnQtd2luZCcsICdjdXJyZW50V2luZCcpXHJcbiAgICAgICAgbGV0IGN1cnJlbnRIdW1pZGl0eSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2N1cnJlbnQtaHVtaWRpdHknLCAnY3VycmVudEh1bWlkaXR5JylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25FbGVtKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZlZWxzTGlrZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdpbmQpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRIdW1pZGl0eSlcclxuICAgICAgICBsb2NhdGlvbkVsZW0udGV4dENvbnRlbnQgPSBgJHtvYmoubG9jYXRpb24ubmFtZX0sICR7b2JqLmxvY2F0aW9uLmNvdW50cnl9YFxyXG4gICAgICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7b2JqLmN1cnJlbnQudGVtcF9jfWBcclxuICAgICAgICBjdXJyZW50RmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7b2JqLmN1cnJlbnQuZmVlbHNsaWtlX2N9YFxyXG4gICAgICAgIGN1cnJlbnRXaW5kLnRleHRDb250ZW50ID0gYCR7b2JqLmN1cnJlbnQud2luZF9rcGh9YFxyXG4gICAgICAgIGN1cnJlbnRIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke29iai5jdXJyZW50Lmh1bWlkaXR5fWBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgZm9ybVJlc2V0ID0gZnVuY3Rpb24oZm9ybUlkKXtcclxuICAgIGNvbnN0IGZvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KGAke2Zvcm1JZH1gKVxyXG4gICAgZm9ybS5yZXNldCgpICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQsIFxyXG4gICAgICAgIGhvb2tET01lbGVtZW50LCBcclxuICAgICAgICBnZXRJbnB1dFZhbHVlLCBcclxuICAgICAgICBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCxcclxuICAgICAgICB0b2dnbGVFbGVtZW50RGlzcGxheSxcclxuICAgICAgICBoaWRlLFxyXG4gICAgICAgIHNob3csXHJcbiAgICAgICAgZm9ybVJlc2V0LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdERPTSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3RET01cIlxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoICgpe1xyXG4gICAgY29uc3QgY2l0eUlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxyXG4gICAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHlJbnB1dCcpXHJcbiAgICBsZXQgY2l0eVxyXG4gICAgY2l0eUlucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY2l0eSA9IGNpdHlJbnB1dC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWFyY2hXZWF0aGVyKGNpdHkpXHJcbiAgICAgICAgaGFuZGxlQ29udGVudFNob3coZGF0YSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmhhbmRsZVNlYXJjaCgpXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDb250ZW50U2hvdyAob2JqKXtcclxuICAgIC8vIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3NlY3Rpb24nLCAnY3VycmVudC13ZWF0aGVyJywgJ2N1cnJlbnRXZWF0aGVyJylcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnY3VycmVudFdlYXRoZXInKVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdtYWluQ29udGVudCcpXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcilcclxuICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY3VycmVudFdlYXRoZXIsIG9iailcclxufVxyXG5cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2VhdGhlcihzZWFyY2hDaXR5KXtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTAwNTUxMmY0YWEyZjQ1YWFiNjQxNTQwNDkyMzA0MDUmcT0ke3NlYXJjaENpdHl9YClcclxuICAgIC8vIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgY3VycmVudFdlYXRoZXIuanNvbigpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSlcclxuICAgIFxyXG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTAwNTUxMmY0YWEyZjQ1YWFiNjQxNTQwNDkyMzA0MDUmZGF5cz0zJnE9JHtzZWFyY2hDaXR5fWApXHJcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCBmb3JlY2FzdFdlYXRoZXIuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEubG9jYXRpb24ubmFtZSlcclxuICAgIHJldHVybiBmb3JlY2FzdERhdGFcclxuICAgIH1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJkYXJkTG9jYXRpb24oY2l0eSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXIoY2l0eSlcclxuICAgIGhhbmRsZUNvbnRlbnRTaG93KGRhdGEpXHJcbn1cclxuXHJcbnN0YXJkYXJkTG9jYXRpb24oJ3Rvcm9udG8nKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==