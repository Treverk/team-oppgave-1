const countView = document.getElementById('count');
let previousElement, previousId, count = 0;

function showImage(element, id) {
    if (previousElement === element) return;
    if (element.classList.contains('done')) return;
    if (previousElement) {
        previousElement.classList.remove('selected');
        if (previousId !== id) {
            element.classList.add('selected');
            previousElement.innerHTML = '';
            previousElement = element;
            previousId = id;
        } else {
            count++;
            countView.innerHTML = count;
            previousElement.classList.add('done');
            element.classList.add('done');
            previousElement = undefined;
            previousId = undefined;
        }
    } else {
        element.classList.add('selected');
        previousElement = element;
        previousId = id;
    }
    element.innerHTML = `<div class="tile i${id}"></div>`;
}