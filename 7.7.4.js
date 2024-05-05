function setFullName(fullName) {
    this.fullName = fullName
    }
    
    // Объект person
    const person = {
        fullName: "John Doe"
    };
    
    // Используем метод bind для создания новой функции setPersonFullName
    const setPersonFullName = setFullName.bind(person);
    
    // Вызываем созданную функцию setPersonFullName с параметром "John Smith"
    setPersonFullName("John Smith");

    
    // Проверяем, что свойство fullName объекта person изменилось
    console.log(person.fullName); // Выведет "John Smith"