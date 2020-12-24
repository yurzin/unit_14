import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

    const [T1, setT1] = useState('');
    const [T2, setT2] = useState({num1: 33, num2: 44, random: ''});
    const [T3, setT3] = useState('');

    function task1() {
        fetch('http://test/api.php', {
            method: 'POST',
            header: {'content-type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify({action: 1})
        })
            .then(response => response.text())
            .then(response => {
                setT1(response)
            })
    }

    function task2(event) {
        event.preventDefault();
        fetch('http://test/api.php', {
            method: 'POST',
            header: {'content-type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify({action: 2, num1: T2.num1, num2: T2.num2})
        })
            .then(response => response.text())
            .then(response => {
                setT2({...T2, random: response})
            })
    }

    function task3(event) {
        event.preventDefault();
        fetch('http://test/api.php', {
            method: 'POST',
            header: {'content-type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify({action: 3, filename: event.target[0].value, filedata: event.target[1].value})
        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
            })
    }

    function task4(event) {

    }

    function task5(event) {

    }

    const handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setT2({...T2, [name]: value});
    };

    return (
        <div>
            <h1>ItGid.info</h1>
            <p>Время: {T1}</p>
            <hr/>
            <div>
                <h2>Время сервера</h2>
                <button onClick={task1}>GET</button>
                <p></p>
            </div>
            <hr/>
            <div>
                <h2>Случайное число между</h2>
                <form action="" onSubmit={task2}>
                    <div><input type="number" name="num1" value={T2.num1} onChange={handleInputChange}/></div>
                    <div><input type="number" name="num2" value={T2.num2} onChange={handleInputChange}/></div>
                    <button type="sumbit">Push</button>
                </form>
                <p>Случайное число: {T2.random}</p>
            </div>
            <hr/>
            <div>
                <h2>Создание файла</h2>
                <form action="" onSubmit={task3}>
                    <div><input type="text" name="filename"/></div>
                    <div><input type="text" name="filedata"/></div>
                    <button type="sumbit">Push</button>
                </form>
                <p></p>
            </div>
            <hr/>
            <div>
                <h2>Получение данных компьютера</h2>
                <form action="" onSubmit={task4}>
                    <button type="sumbit">Push</button>
                </form>
                <p>{"t4"}></p>
                <hr/>
                <div>
                    <h2>Получение курса валют</h2>
                    <form action="" onSubmit={task5}>
                        <button type="sumbit">Push</button>
                    </form>
                    <ul>

                    </ul>
                </div>
            </div>
        </div>)
}

export default App;
