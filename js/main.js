$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится 
  var counterUp = $(".counter-up"); /*кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /*кнопка уменьшения этажа*/

  //функция при наведении мышью на этаж
  $(".home-image path").on("mouseover", function () {
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
      $(".home-image path").removeClass("current-floor"); //удаляем активный класс у этажей
      $('.counter').text(currentFloor); //записываем значение этажа в счетчик справа
  });

  counterUp.on("click", function () {  // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { //проверяем эначение этажа, оно не должно быть больше 18
      currentFloor++; //прибавляем один этаж
      var usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
            useGrouping: false}); //форматируем переменную с этажом, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor); //записываем значение этажа в счетчик справа
      $(".home-image path").removeClass("current-floor");  //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function () { // отслеживаем клик по кнопке вверх
    if (currentFloor > 2) { //проверяем эначение этажа, оно не должно быть меньше 2 (1; -1; -2)
      currentFloor--; // делаем на этаж меньше
      var usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
            useGrouping: false});
      $('.counter').text(usCurrentFloor); //записываем значение этажа в счетчик справа
      $(".home-image path").removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });
});
