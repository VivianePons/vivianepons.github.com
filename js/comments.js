

// Comment script

$(function() {

    $("#commentForm input,#commentForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            $form.submit()

        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


$(function() {
    var fragment = window.location.hash.substr(1);
    if (fragment=="success") {
        // Success message
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
        $('#success > .alert-success')
        .append("<strong>Your comment has been sent, it will be reviewed shortly! Thank you </strong>");
        $('#success > .alert-success')
        .append('</div>');
    }

});
