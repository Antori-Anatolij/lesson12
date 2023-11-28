window.onload = function () {

    let names = document.getElementById('names');
    let username = document.getElementById('username');
    let useremail = document.getElementById('user-email');
    let pass1 = document.getElementById('user-pass1');
    let pass2 = document.getElementById('user-pass2');
    let checkbox = document.getElementById('checkbox');
    let button = document.getElementById('btn');

    names.onkeydown = function (e) {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            return false;
        }
    }

    username.onkeydown = function (e) {
        if (e.key === '.') {
            return false;
        } else if (e.key === ',') {
            return false;
        }
    }

    checkbox.onchange = function () {
        if (checkbox.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    }

    button.onclick = function () {
        if (!names.value) {
            alert('"Заполните поле full name"');
            return;
        } else if (!username.value) {
            alert('Заполните поле username');
            return;
        } else if (!useremail.value) {
            alert('Заполните поле E-mail');
            return;
        } else if (pass1.value.length < 8) {
            alert('Укажите корректный пароль');
            return;
        } else if (pass2.value.length < 8) {
            alert('Укажите повторно корректный пароль');
            return;
        } else if (pass1.value !== pass2.value) {
            alert('Пароли не совпадают');
            return;
        } else if (!checkbox.checked) {
            alert('Вы должны принять условия');
            return;
        }

        document.getElementById('popup-btn').onclick = function () {
            document.getElementById('popup').style.display = 'none';
            modalform();
        }
        document.getElementById('popup').style.display = 'block';
    }

    document.getElementsByClassName('order__a')[0].onclick = function () {
        console.log("форма теперь открыта");
        modalform();
    }

    let modalform = function () {
        document.getElementsByTagName('h1')[0].innerText = 'Log in to the system';

        let formtext =document.getElementsByClassName('removetext');

        formtext[0].remove();
        formtext[0].remove();
        formtext[0].remove();

        names.remove();
        useremail.remove();
        pass2.remove();

        document.getElementsByClassName('order__a')[0].remove();

        button.value = 'Sign In';
        button.onclick = function () {
            if (!username.value) {
                alert('Заполните поле username');
                return;
            } else if (!pass1.value) {
                alert('Укажите пароль');
                return;
            }
            alert("Добро пожаловать " + username.value);
        }
    }
    console.log("Это сделано новым разработчиком в task13");
}

