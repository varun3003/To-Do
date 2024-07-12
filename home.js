$(document).ready(function () {
    // Function to add a new task
    $('#addButton').click(function () {
        let taskText = $('#taskInput').val().trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        let taskItem = `
            <li class="task-item">
                <input type="checkbox" class="task-checkbox" />
                <span class="task-text">${taskText}</span>
                <button class="btn btn-danger btn-sm remove-button" title="Remove Task">
                    <i class="bi bi-trash"></i>
                </button>
            </li>
        `;

        $('#taskList').append(taskItem);
        $('#taskInput').val('');
    });

    // Function to mark a task as completed
    $(document).on('change', '.task-checkbox', function () {
        $(this).next('.task-text').toggleClass('completed-task');
    });

    // Function to remove a task
    $(document).on('click', '.remove-button', function () {
        $(this).closest('li').remove();
    });

    // Function to add a task on Enter key press
    $('#taskInput').keypress(function (e) {
        if (e.which === 13) {
            $('#addButton').click();
        }
    });
});