const input = document.querySelectorAll('input');

input[0].addEventListener('click', function() {

    input[1].checked = !input[1].checked;
    input[2].checked = !input[2].checked;
});

input[3].addEventListener('click', function() {

    input[4].checked = !input[4].checked;
    input[5].checked = !input[5].checked;
});
