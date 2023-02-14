(() => {
  let studentsArr = [{
      name: 'Татьяна',
      surname: 'Женина',
      lastname: 'Вальеревна',
      birthDate: new Date(2000, 10, 19),
      studyYear: 2019,
      faculty: 'Web-разработка',
    },
    {
      name: 'Алексей',
      surname: 'Тимофеев',
      lastname: 'Сергеевич',
      birthDate: new Date(2004, 11, 05),
      studyYear: 2021,
      faculty: 'Менежмент',
    },
    {
      name: 'Владимир',
      surname: 'Дмитриев',
      lastname: 'Сергеевич',
      birthDate: new Date(1998, 01, 01),
      studyYear: 2017,
      faculty: 'Физика',
    },
  ];

  const createTitle = () => {
    const title = document.createElement('h1');
    title.textContent = 'Система управление студентами'
    return title;
  };

  const createTable = () => {
    // Создание и обработка элементов таблицы
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const theadTr = document.createElement('tr');
    const th = document.createElement('th');
    const theadTd = document.createElement('td');
    const tbodyTr = document.createElement('tr');
    const tbodyTd = document.createElement('td');
    const fullNameTh = document.createElement('th');
    const facultyTh = document.createElement('th');
    const bitrthDateTh = document.createElement('th');
    const studyYearTh = document.createElement('th');
    const addStudentTh = document.createElement('th');

    table.classList.add('students__table');
    thead.classList.add('students__table-header');
    tbody.classList.add('students__table-content');
    fullNameTh.classList.add('student__fullName');
    facultyTh.classList.add('student__faculty');
    bitrthDateTh.classList.add('student__date');
    studyYearTh.classList.add('student__studyYear');
    addStudentTh.classList.add('student__add-btn');

    fullNameTh.textContent = 'ФИО студента';
    facultyTh.textContent = 'Факультет';
    bitrthDateTh.textContent = 'Дата рождения и возраст';
    studyYearTh.textContent = 'Годы обучения и номер курса';

    fullNameTh.style = 'width: 350px';
    facultyTh.style = 'width: 200px';
    bitrthDateTh.style = 'width: 250px';

    return {
      table,
      thead,
      tbody,
      theadTr,
      th,
      theadTd,
      tbodyTr,
      tbodyTd,
      fullNameTh,
      facultyTh,
      bitrthDateTh,
      studyYearTh,
      addStudentTh,
    };
  };

  const createFilter = () => {
    const filterContainer = document.createElement('div');
    const filterContent = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = 'Фильтрация студентов по:'
    title.style = 'display: block;'

    const containerFio = document.createElement('div');
    const containerFaculty = document.createElement('div');
    const containerStartYear = document.createElement('div');
    const containerStudyYear = document.createElement('div');

    const labelFio = document.createElement('label');
    const labelFaculty = document.createElement('label');
    const labelStartYear = document.createElement('label');
    const labelStudyYear = document.createElement('label');

    const filterFio = document.createElement('input');
    const filterFaculty = document.createElement('input');
    const filterStartYear = document.createElement('input');
    const filterEndingYear = document.createElement('input');

    labelFio.textContent = 'ФИО:';
    labelFaculty.textContent = 'Названии факультета:';
    labelStartYear.textContent = 'Год начала обучения:';
    labelStudyYear.textContent = 'Год окончания обучения:';

    filterContainer.classList.add('filter-container');
    filterContent.classList.add('filter-content');

    containerFio.classList.add('filter-content__item');
    containerFaculty.classList.add('filter-content__item');
    containerStartYear.classList.add('filter-content__item');
    containerStudyYear.classList.add('filter-content__item');

    filterFio.classList.add('filter-input');
    filterFaculty.classList.add('filter-input');
    filterStartYear.classList.add('filter-input');
    filterEndingYear.classList.add('filter-input');

    filterFio.style = 'width: 350px'
    filterFaculty.style = 'width: 200px'
    filterStartYear.style = 'width: 250px'
    filterEndingYear.style = 'width: 250px'

    containerFio.append(labelFio);
    containerFio.append(filterFio);
    containerFaculty.append(labelFaculty);
    containerFaculty.append(filterFaculty);
    containerStartYear.append(labelStartYear);
    containerStartYear.append(filterStartYear);
    containerStudyYear.append(labelStudyYear);
    containerStudyYear.append(filterEndingYear);

    filterContent.append(containerFio);
    filterContent.append(containerFaculty);
    filterContent.append(containerStartYear);
    filterContent.append(containerStudyYear);

    filterContainer.append(title);
    filterContainer.append(filterContent);

    return {
      filterContainer,
      filterFio,
      filterFaculty,
      filterStartYear,
      filterEndingYear,
    };
  };

  const createForm = () => {
    // Создаем необходимые элементы для формы
    const formWrapper = document.createElement('div');
    const form = document.createElement('form');
    const title = document.createElement('h2');
    const list = document.createElement('ul');

    const listElFullName = document.createElement('li');
    const listElFaculty = document.createElement('li');
    const bDateAndStudyYear = document.createElement('li');

    const nameBlock = document.createElement('div');
    const surameBlock = document.createElement('div');
    const lastNameBlock = document.createElement('div');
    const dBirthBlock = document.createElement('div');
    const studyYearBlock = document.createElement('div');

    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const inputLastName = document.createElement('input');
    const inputFaculty = document.createElement('input');
    const inputBirthDate = document.createElement('input');
    const inputStudyYear = document.createElement('input');

    inputName.setAttribute('required', 'true');
    inputSurname.setAttribute('required', 'true');
    inputLastName.setAttribute('required', 'true');
    inputFaculty.setAttribute('required', 'true');
    inputBirthDate.setAttribute('required', 'true');
    inputStudyYear.setAttribute('required', 'true');
    inputBirthDate.setAttribute('type', 'date');
    inputBirthDate.setAttribute('value', '1900-01-01');

    const labelName = document.createElement('label');
    const labelSurname = document.createElement('label');
    const labelLastName = document.createElement('label');
    const labelFaculty = document.createElement('label');
    const labelBirthDate = document.createElement('label');
    const labelStudyYear = document.createElement('label');

    const addBtn = document.createElement('button');
    const closeBtn = document.createElement('button');

    // Присваиваем текст (контент) для элементов
    title.textContent = 'Добавить нового студента';
    labelSurname.textContent = 'Фаимилия:';
    labelName.textContent = 'Имя:';
    labelLastName.textContent = 'Отчество:';
    labelFaculty.textContent = 'Факультет:';
    labelBirthDate.textContent = 'Дата рождения:';
    labelStudyYear.textContent = 'Год начало обучения:';
    addBtn.textContent = 'Добавить';
    closeBtn.textContent = 'x';

    addBtn.setAttribute('type', 'submit');
    closeBtn.setAttribute('type', 'button');

    // Добавляем классы
    formWrapper.classList.add('form-wrapper');
    form.classList.add('form');
    list.classList.add('form-list');
    listElFullName.classList.add('form-list__item');
    listElFaculty.classList.add('form-list__item');
    bDateAndStudyYear.classList.add('form-list__item');

    addBtn.classList.add('form__add-btn');
    closeBtn.classList.add('form__close-btn');

    // Добавляем их в DOM

    nameBlock.append(labelName);
    nameBlock.append(inputName);
    surameBlock.append(labelSurname);
    surameBlock.append(inputSurname);
    lastNameBlock.append(labelLastName);
    lastNameBlock.append(inputLastName);

    listElFullName.append(nameBlock);
    listElFullName.append(surameBlock);
    listElFullName.append(lastNameBlock);

    listElFaculty.append(labelFaculty);
    listElFaculty.append(inputFaculty);

    dBirthBlock.append(labelBirthDate);
    dBirthBlock.append(inputBirthDate);
    studyYearBlock.append(labelStudyYear);
    studyYearBlock.append(inputStudyYear);

    bDateAndStudyYear.append(dBirthBlock);
    bDateAndStudyYear.append(studyYearBlock);

    list.append(listElFullName);
    list.append(listElFaculty);
    list.append(bDateAndStudyYear);

    // form.append(closeBtn);
    form.append(title);
    form.append(list);
    form.append(addBtn);

    // Возврат готовой формы
    return {
      formWrapper,
      form,
      inputName,
      inputSurname,
      inputLastName,
      inputFaculty,
      inputBirthDate,
      inputStudyYear,
      closeBtn,
    }
  };

  function createStudentsForm(container) {
    // создание самой таблицы
    const table = createTable().table;
    const thead = createTable().thead;
    const formWrapper = createForm().formWrapper;
    const formItems = createForm();
    const title = createTitle();
    const filter = createFilter();

    container.append(title);
    container.append(filter.filterContainer);
    container.append(formWrapper);
    container.append(table);
    table.append(thead);
    formWrapper.append(formItems.form);

    // создаем шапку таблицы (т.е заголовок)
    const theadTr = createTable().theadTr;
    thead.append(theadTr);

    const fullNameTh = createTable().fullNameTh;
    const facultyTh = createTable().facultyTh;
    const bitrthDateTh = createTable().bitrthDateTh;
    const studyYearTh = createTable().studyYearTh;
    const addStudentTh = createTable().addStudentTh;

    theadTr.append(fullNameTh);
    theadTr.append(facultyTh);
    theadTr.append(bitrthDateTh);
    theadTr.append(studyYearTh);
    theadTr.append(addStudentTh);

    const createDeleteBtn = () => {
      const btn = document.createElement('button');
      btn.classList.add('student__delete-btn');
      btn.textContent = 'Удалить'
      return btn;
    };

    const tbody = createTable().tbody;
    table.append(tbody);

    // Обработка данных студентов из массива
    (() => {
      const studentsDataBase = getStudent(studentsArr);
      Array.from(studentsDataBase);
      createStudent(studentsDataBase, tbody);
    })()

    // Получаю данные массива и обрабатываю их для отрисовки
    function getStudent(arr) {
      return arr
        .map(student => {
          const fullName = `${student.surname} ${student.name} ${student.lastname}`;
          const faculty = student.faculty;
          // получаем дата рождения и возраст
          const getAgePeriod = () => {
            const studentYyyy = student.birthDate.getFullYear();
            let studentMm = student.birthDate.getMonth() * 1;
            let studentDd = student.birthDate.getDate();

            const today = new Date();
            const yyyy = today.getFullYear();

            if (studentDd < 10) studentDd = '0' + studentDd;
            if (studentMm < 10) studentMm = '0' + studentMm;

            return `${studentDd + '.' + studentMm + '.' + studentYyyy} (${yyyy - studentYyyy} лет)`
          };

          // получаем период учёбы в формате дд.мм.гггг (номер курса)
          const getStudyPeriod = () => {
            const startYear = Number(student.studyYear);
            const endingYear = Number(student.studyYear) + 4;

            const today = new Date();
            const yyyy = today.getFullYear();

            let studyPeriod = yyyy - startYear;

            if (studyPeriod > 4) studyPeriod = 'Закончил'
            else studyPeriod = `${studyPeriod} курс`;

            const studyYear = `${startYear} - ${endingYear} (${studyPeriod})`
            return studyYear;
          };

          return {
            fullName,
            faculty,
            getAgePeriod,
            getStudyPeriod,
          }
        });
    };

    // Отрисовка массива со студентами
    function createStudent(arr, container) {

      arr.forEach(item => {
        const studentDataBase = item;
        const studentTr = createTable().tbodyTr;
        container.append(studentTr);
        const btn = createDeleteBtn();

        const fullName = createTable().tbodyTd;
        const faculty = createTable().tbodyTd;
        const date = createTable().tbodyTd;
        const studyYear = createTable().tbodyTd;
        const deleteBtn = createTable().tbodyTd;

        studentTr.append(fullName);
        studentTr.append(faculty);
        studentTr.append(date);
        studentTr.append(studyYear);
        studentTr.append(deleteBtn);

        fullName.textContent = studentDataBase.fullName;
        faculty.textContent = studentDataBase.faculty;
        date.textContent = studentDataBase.getAgePeriod();
        studyYear.textContent = studentDataBase.getStudyPeriod();
        deleteBtn.append(btn);
      });
    };

    const createAddBtn = () => {
      const btn = document.createElement('button');
      btn.classList.add('add-btn');
      btn.textContent = '+';
      return btn;
    };

    const createCloseBtn = () => {
      const btn = createForm().closeBtn;
      return btn;
    }

    const addBtn = createAddBtn();
    const closeBtn = createCloseBtn();
    addStudentTh.append(addBtn);
    formItems.form.append(closeBtn);

    addBtn.addEventListener('click', () => {
      formWrapper.classList.add('active');
    });

    // Валидация формы
    function checkValidation(item) {
      let name = item.name.trim();
      let surname = item.surname.trim();
      let lastname = item.lastname.trim();
      let birthDate = item.birthDate;
      let studyYear = item.studyYear.trim();
      let faculty = item.faculty.trim();

      return {
        name,
        surname,
        lastname,
        birthDate,
        studyYear,
        faculty
      };
    }

    formItems.form.addEventListener('submit', e => {
      e.preventDefault();

      const createArrObj = (arr) => {
        let obj = {
          name: formItems.inputName.value,
          surname: formItems.inputSurname.value,
          lastname: formItems.inputLastName.value,
          birthDate: formItems.inputBirthDate.valueAsDate,
          studyYear: formItems.inputStudyYear.value,
          faculty: formItems.inputFaculty.value,
        };

        let checkedItem = checkValidation(obj);

        arr.push(checkedItem);
      };

      createArrObj(studentsArr);

      const studentsDB = getStudent(studentsArr)
      Array.from(studentsDB)
      const lastItem = studentsDB.slice(-1);

      formItems.form.reset()
      createStudent(lastItem, tbody)
      if (formWrapper.classList.contains('active')) {
        formWrapper.classList.remove('active')
      }
    });

    closeBtn.addEventListener('click', () => {
      formWrapper.classList.remove('active');
    });


    let newStudents = [];

    filter.filterFio.addEventListener('input', () => {
      let newArr = [...studentsArr];
      const fioVal = filter.filterFio.value;

      function filterFio(item) {
        if (`${item.name} ${item.surname} ${item.lastname}`.toLowerCase().includes(fioVal.toLowerCase())) {
          return item;
        } else {
          return;
        };
      };

      let filteredArrByFio = newArr.filter(filterFio);
      newStudents = [...filteredArrByFio];

      tbody.innerHTML = '';
      const studentsDB = getStudent(filteredArrByFio);
      createStudent(studentsDB, tbody)
    });

    filter.filterFaculty.addEventListener('input', () => {
      const facultyVal = filter.filterFaculty.value;
      let newArr = [...studentsArr];

      function filterFaculty(item) {
        if (item.faculty.toLowerCase().includes(facultyVal.toLowerCase())) {
          return item;
        } else {
          return;
        };
      };

      if (newStudents.length > 0) {
        let filteredArrByFaculty = newStudents.filter(filterFaculty);
        newStudents = [...filteredArrByFaculty];

        tbody.innerHTML = '';
        const studentsDB = getStudent(filteredArrByFaculty);
        createStudent(studentsDB, tbody);
      } else {
        let filteredArrByFaculty = newArr.filter(filterFaculty);
        newStudents = [...filteredArrByFaculty];

        tbody.innerHTML = '';
        const studentsDB = getStudent(filteredArrByFaculty);
        createStudent(studentsDB, tbody);
      }
    });

    filter.filterStartYear.addEventListener('input', () => {
      const startYearVal = filter.filterStartYear.value;
      let newArr = [...studentsArr];

      function filterStartYear(item) {
        if (item.studyYear === Number(startYearVal)) {
          return item;
        } else {
          return;
        };
      };

      if (newStudents.length > 0) {
        let filteredArrByStartYear = newStudents.filter(filterStartYear);
        newStudents = [...filteredArrByStartYear];

        tbody.innerHTML = '';
        const studentsDB = getStudent(filteredArrByStartYear);
        createStudent(studentsDB, tbody)
      } else {
        let filteredArrByStartYear = newArr.filter(filterStartYear);
        newStudents = [...filteredArrByStartYear];

        tbody.innerHTML = '';
        const studentsDB = getStudent(filteredArrByStartYear);
        createStudent(studentsDB, tbody)
      }
    });

    filter.filterEndingYear.addEventListener('input', () => {
      const endingYearVal = filter.filterEndingYear.value;
      let newArr = [...studentsArr];

      function filterEndingYear(item) {
        if (Number(item.studyYear) + 4 === Number(endingYearVal)) {
          return item;
        } else {
          return;
        };
      };

      if (newStudents.length > 0) {
        let filteredByEndingYear = newStudents.filter(filterEndingYear);
        newStudents = [...filteredByEndingYear];

        tbody.innerHTML = '';
        const studentsDB = getStudent(filteredByEndingYear);
        createStudent(studentsDB, tbody);
      } else {
        let filteredByEndingYear = newArr.filter(filterEndingYear);
        newStudents = [...filteredByEndingYear];

        tbody.innerHTML = '';
        const studentsDB = getStudent(filteredByEndingYear);
        createStudent(studentsDB, tbody)
      }
    });

    function sortFio (arr) {
      let newStudentsArr = [];
      let newArr = arr.map(item => item.surname);
      newArr.sort()

      for (const item of newArr) {
        let surname = item
        for (const item of arr) {
          if(surname === item.surname) {
            newStudentsArr.push(item);
          }
        }
      };

      tbody.innerHTML = '';
      const studentsDB = getStudent(newStudentsArr);
      createStudent(studentsDB, tbody);
    };

    function sortFaculty (arr) {
      let newStudentsArr = [];
      let newArr = arr.map(item => item.faculty);
      newArr.sort();

      for (const item of newArr) {
        let faculty = item
        for (const item of arr) {
          if(faculty === item.faculty) {
            newStudentsArr.push(item);
          };
        };
      };

      tbody.innerHTML = '';
      const studentsDB = getStudent(newStudentsArr);
      createStudent(studentsDB, tbody);
    };

    function sortBirthDate (arr) {
      let newStudentsArr = [];
      let newArr = arr.map(item => item.birthDate.getFullYear());
      newArr.sort();
      console.log(newArr);

      for (const item of newArr) {
        let birthDate = item;
        for (const item of arr) {
          if(birthDate === item.birthDate.getFullYear()) {
            newStudentsArr.push(item);
          }
        }
      };

      tbody.innerHTML = '';
      const studentsDB = getStudent(newStudentsArr);
      createStudent(studentsDB, tbody);
    };

    function sortStartYear (arr) {
      let newStudentsArr = [];
      let newArr = arr.map(item => item.studyYear);
      newArr.sort();

      for (const item of newArr) {
        let birthDate = item;
        for (const item of arr) {
          if(birthDate === item.studyYear) {
            newStudentsArr.push(item);
          }
        }
      };

      tbody.innerHTML = '';
      const studentsDB = getStudent(newStudentsArr);
      createStudent(studentsDB, tbody);
    };

    fullNameTh.addEventListener('click', () => {
      if (newStudents.length !== 0) {
        sortFio(newStudents);
      } else {
        sortFio(studentsArr);
      };
    });

    facultyTh.addEventListener('click', () => {
      if (newStudents.length !== 0) {
        sortFaculty(newStudents);
      } else {
        sortFaculty(studentsArr);
      };
    });

    bitrthDateTh.addEventListener('click', () => {
      if (newStudents.length !== 0) {
        sortBirthDate(newStudents);
      } else {
        sortBirthDate(studentsArr);
      }
    });

    studyYearTh.addEventListener('click', () => {
      if (newStudents.length !== 0) {
        sortStartYear(newStudents);
      } else {
        sortStartYear(studentsArr);
      };
    })




  };

  document.addEventListener('DOMContentLoaded', () => {
    createStudentsForm(document.querySelector('.container'));
  });
})();
