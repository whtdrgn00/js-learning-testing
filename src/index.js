/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i], i, array);
  }

  return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let i = 0,
    prevValue = initial;
    
  if (prevValue === undefined) {
    i = 1;
    prevValue = array[0];
  } 

  for (i; i < array.length; i++) {
    prevValue = fn(prevValue, array[i], i, array);
  }

  return prevValue;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let result = [];
  for (let key in obj) {
    result.push(key.toUpperCase());
  }
  
  return result;
}
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  let start,
    end,
    result = [];

  if (from == undefined) {
    start = 0;
  } else if (from < 0) {
    start = array.length + from;
    if (start < 0) start = 0;
  } else {
    start = from;
  }

  if (to == undefined) {
    end = array.length
  } else if (to < 0) {
    end = array.length + to;
  } else {
    end = to;
    if (end > array.length) end = array.length;
  }

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(target, key, value) {
      target[key] = value*value
      return true;
    }
  });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
