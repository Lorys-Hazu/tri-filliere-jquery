let peopleDiv = document.getElementById("people");

for (let i = 0; i <= 29; i++) {
    let newPeople = document.createElement("div");
    newPeople
        .classList
        .add("people");
    newPeople.style.backgroundColor = '#' + (
        Math.random() * 0xFFFFFF << 0
    ).toString(16);

    peopleDiv.appendChild(newPeople);
}

$(".people").contextmenu(function (action) {
    action.preventDefault();

    let form = document.createElement("form");
    let select = document.createElement("select");
    let optionDev = document.createElement("option");
    optionDev.textContent = "Developpement";
    optionDev.value = "dev";
    let optionDesign = document.createElement("option");
    optionDesign.textContent = "Design";
    optionDesign.value = "design";
    let optionMarketing = document.createElement("option");
    optionMarketing.textContent = "Marketing";
    optionMarketing.value = "mkt";
    select.append(optionDev);
    select.append(optionDesign);
    select.append(optionMarketing);
    form.append(select);
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Valider"
    submit.id = "submit"
    form.append(submit)
    this.append(form);
    

    let thisPeople = this;
    submit.addEventListener("click", function (action) {
        action.preventDefault();
        if (select.value == "dev") {
            $("#dev").append(thisPeople);
        }
        if (select.value == "design") {
            $("#design").append(thisPeople);
        }
        if (select.value == "mkt") {
            $("#mkt").append(thisPeople);
        }
        $("form").remove();
    })
})
