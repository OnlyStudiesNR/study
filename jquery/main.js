$(document).ready(function() {

    $('#taskForm').on('submit', function(e) {
        e.preventDefault()

        const newTask = $('#task').val()
        console.log(newTask)
        const listItem = $(`<li>${newTask}</li>`)
        $('#taskList').append(listItem)
        
        $('#task').val('')
    })

    $('#taskList').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through')
    })
})
