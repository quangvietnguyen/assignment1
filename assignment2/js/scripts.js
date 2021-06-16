let date = new Date();
date = date.toDateString();
    $(document).ready(() => {
        $("#date").html(date);
        $.ajax({
            type: "GET",
            url: "json/vaccine_doses.json",
            dataType: "json",
            error: (e) => { console.log(e); },
            success: parseJSON,
        });
    });

function parseJSON(data) {
    $.each(data,(key,val) => {
        JSON.parse(data)
        localStorage.setItem(key,val);
    })
}
            