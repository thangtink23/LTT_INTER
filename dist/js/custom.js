jQuery(document).ready(function() {
    $('#btn-confirm').click(function() {
        localStorage.setItem("date",$('#date_input').val());
        localStorage.setItem("category",$('#category').val());
        localStorage.setItem("title",$('#title').val());
        localStorage.setItem("content",$('#text_content').val());
        localStorage.setItem("content",$('#text_content').val());
        window.location.replace("show.html");
    });
});