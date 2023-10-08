$(document).ready(function() {
    $('#adicionar').click(function() {
        const tarefa = $('#tarefa').val();
        if (tarefa !== '') {
            $('#lista-tarefas').append(`<li><span class="texto">${tarefa}</span></li>`);
            $('#tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});
