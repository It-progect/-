document.addEventListener('DOMContentLoaded', function () {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const countElement = document.getElementById('count');

    let count = 0;

    decrementButton.addEventListener('click', function () {
        count--;
        updateCount();
    });

    incrementButton.addEventListener('click', function () {
        count++;
        updateCount();
    });

    function updateCount() {
        countElement.textContent = count;
    }
});
