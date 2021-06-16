
class Vaccine {
    constructor() {
        this.id = "nguye374",
        this.report_date = "0",
        this.previous_day_doses_administered = 0,
        this.total_doses_administered = 0,
        this.total_doses_in_fully_vaccinated_individuals = 0,
        this.total_individuals_fully_vaccinated = 0
    }
}

let date = new Date();
date = date.toDateString();
    $(document).ready(() => {
        $("#date").html(date);

        $("#load").click(() => {
            $.ajax({
                type: "GET",
                url: "json/vaccine_doses.json",
                dataType: "json",
                error: (e) => { console.log(e); },
                success: parseJSON
            });
            
            localStorage.clear();
            const vaccine = new Vaccine();
            localStorage.setItem(vaccine.report_date,JSON.stringify(vaccine));
            
            function parseJSON(data) {
            $.each(data,(key,val) => {
                    
                    key = val.report_date;
                    localStorage.setItem(key,JSON.stringify(val));
                })
            }

            $("#result").html("Data from JSON file saved to localStorage!")
        });

        const array = [];
        $("#display").click(() => {
            for (i=0;i<localStorage.length;i++){
                array[i] = localStorage.key(i);
            }
            array.sort();
            for (i=0;i<localStorage.length;i++){
                let string = "<li><a class=\"info\" href=\"#\">" + array[i] + "</a></li>";
                $("#list").append(string);
            }
            
        });

        $("ul").on('click','li .info',(key) => {
            $("#detailinfo").html(localStorage.getItem(key));
        })
    });
