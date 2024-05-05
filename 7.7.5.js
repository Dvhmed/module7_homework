function uniqueSortedNumbers(arr) {
    // Используем Set для хранения уникальных чисел
    const uniqueNumbers = new Set(arr);
  
    // Преобразуем Set обратно в массив и сортируем его
    const sortedUniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
  
    return sortedUniqueNumbers;
  }
  
  // Пример использования функции
  const numbers = [3, 1, 5, 2, 2, 4, 5, 1];
  const uniqueSorted = uniqueSortedNumbers(numbers);
  console.log(uniqueSorted); // Выведет: [1, 2, 3, 4, 5]