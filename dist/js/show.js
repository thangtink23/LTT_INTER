jQuery(document).ready(function() {
    $('#date').text(localStorage.getItem("date"));
    $('#category').text(localStorage.getItem("category"))
    $('#title').text(localStorage.getItem("title"));
    $('#text_content').text(localStorage.getItem("content"));
});

