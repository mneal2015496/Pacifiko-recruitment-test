var contend = document.querySelector('#contend');
var contendThreeK = document.querySelector('#contendThreeK');
var search = document.querySelector('#search');
var formA = document.getElementById('formA');

formA.addEventListener('submit', function (e) {
    e.preventDefault();

    var dataF = new FormData(formA);
    var response = document.getElementById('response');
    var firstName = document.getElementsByName('name')[0].value;
    var salaryE = document.getElementsByName('salary')[0].value;
    var ageE = document.getElementsByName('age')[0].value;

    if (firstName === '' || salaryE === '' || ageE === '' || salaryE < 0 || ageE <= 0) {
        response.innerHTML = ''
        response.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Enter all fields!
            </div>
        `
    } else {
        response.innerHTML = ''
        fetch('http://dummy.restapiexample.com/api/v1/create', {
                method: 'POST',
                body: dataF
            }).then(x => x.json())
            .then(y => {
               // console.log(y)
                response.innerHTML = `
                    <div class="alert alert-primary" role="alert">
                        <br>Id: ${y.data.id},</br>
                        <br>Name: ${y.data.name},</br>
                        <br>Salary: ${y.data.salary},</br>
                        <br>Age: ${y.data.age}</br>
                    </div>
                `
            })
    }
})


function list() {
    contend.innerHTML = ''
    fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            card(res);
        });
}

function card(res) {
    contend.innerHTML = ''
    for (let i of res.data) {
        //console.log(i)
        contend.innerHTML += `
        <div class="col">
            <div class="card">
            <img src="${i.profile_image}" class="card-img-top" alt="Image not found.">
                <div class="card-body">
                    <h5 class="card-title">Employee data ${i.id}</h5>
                    <p class="card-text">Name: ${i.employee_name}</p>
                    <p class="card-text">Salary: ${i.employee_salary}</p>
                    <p class="card-text">Age: ${i.employee_age}</p>
                </div>
            </div>
        </div>
        `
    }
}

function listMorethreeK() {
    contendThreeK.innerHTML = ''
    fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(w => w.json())
        .then(h => {
            cardThreeK(h);
        });
}

function cardThreeK(h) {
    contendThreeK.innerHTML = ''
    for (let i of h.data) {
        if (i.employee_salary > 300000) {
            contendThreeK.innerHTML += `
                <div class="col">
                    <div class="card">
                    <img src="${i.profile_image}" class="card-img-top" alt="Image not found.">
                        <div class="card-body">
                            <h5 class="card-title">Employee data ${i.id}</h5>
                            <p class="card-text">Name: ${i.employee_name}</p>
                            <p class="card-text">Salary: ${i.employee_salary}</p>
                            <p class="card-text">Age: ${i.employee_age}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }
}



function searchEmployee() {
    var number = document.getElementsByName('num')[0].value
    var responseSE = document.getElementById('responseSE');
    if (number == '' || number <= 0) {
        responseSE.innerHTML = ''
        responseSE.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Enter the id again!
            </div>
        `
        number = document.getElementsByName('num')[0].value = ''
        search.innerHTML = ''
    } else {
        responseSE.innerHTML = ''
        console.log(number);
        fetch(`http://dummy.restapiexample.com/api/v1/employee/` + number)
            .then(a => a.json())
            .then(b => {
                cardSearch(b);
            });
    }
}

function cardSearch(b) {
    number = document.getElementsByName('num')[0].value = ''
    search.innerHTML = ''
    search.innerHTML = `
            <div class="col">
                <div class="card">
                <img src="${b.data.profile_image}" class="card-img-top" alt="Image not found.">
                    <div class="card-body">
                        <h5 class="card-title">Employee data ${b.data.id}</h5>
                        <p class="card-text">Name: ${b.data.employee_name}</p>
                        <p class="card-text">Salary: ${b.data.employee_salary}</p>
                        <p class="card-text">Age: ${b.data.employee_age}</p>
                    </div>
                </div>
            </div>
        `
}