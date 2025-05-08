$(document).ready(function() {
    // Toggle fun facts visibility
    $('#toggle-facts').click(function() {
        $('#fun-facts').toggle();
    });

    // Contact form validation and success message
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission to server

        // Simple form validation
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name && email && message) {
            // If all fields are valid
            $('#contact-success').show();
            // Clear form after submission
            $('#contact-form')[0].reset();
        } else {
            alert('Please fill all the fields.');
        }
    });

    // Fetch GitHub profile data via AJAX
    $('#fetch-profile').click(function() {
        var username = 'octocat'; // Replace with dynamic user input if needed

        $.ajax({
            url: `https://api.github.com/users/${username}`,
            method: 'GET',
            success: function(data) {
                var profileHTML = `
            <p><strong>Username:</strong> ${data.login}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            <p><strong>Bio:</strong> ${data.bio}</p>
          `;
                $('#github-profile').html(profileHTML);
            },
            error: function() {
                alert('Error fetching GitHub profile.');
            }
        });
    });

    // Apply jQuery UI Datepicker to the email input (optional)
    $('#email').datepicker({
        dateFormat: 'mm/dd/yy'
    });

    // Apply Accordion widget for hobbies
    $('#fun-facts').accordion();
});