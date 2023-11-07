function challenge1() {
    console.log(document.querySelector('#subscribe').checked);

    console.log('in the function');
}
document.querySelector('#subscribe').addEventListener('click', challenge1);