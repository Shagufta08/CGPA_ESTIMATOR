var expected_cg;
window.onload = () => {

    document.PresentCG.current_cg.value = "";
    document.PresentCG.tpastcredits.value = "";
    const formData = document.Expected;
    for (data of formData) {
        if (data.name != "Submit") {
            data.value = "0";
        }
    }
}



function cg(e) {

    e.preventDefault();

    var currentCG = document.PresentCG.current_cg.value;
    var tcredits = document.PresentCG.tpastcredits.value;
    var sub1grade = document.Expected.sub1grade.value;
    var sub1credits = document.Expected.sub1credits.value;
    var sub2grade = document.Expected.sub2grade.value;
    var sub2credits = document.Expected.sub2credits.value;
    var sub3grade = document.Expected.sub3grade.value;
    var sub3credits = document.Expected.sub3credits.value;
    var sub4grade = document.Expected.sub4grade.value;
    var sub4credits = document.Expected.sub4credits.value;
    var sub5grade = document.Expected.sub5grade.value;
    var sub5credits = document.Expected.sub5credits.value;
    var sub6grade = document.Expected.sub6grade.value;
    var sub6credits = document.Expected.sub6credits.value;
    var sub7grade = document.Expected.sub7grade.value;
    var sub7credits = document.Expected.sub7credits.value;
    var sub8grade = document.Expected.sub8grade.value;
    var sub8credits = document.Expected.sub8credits.value;
    var sub9grade = document.Expected.sub9grade.value;
    var sub9credits = document.Expected.sub9credits.value;
    var sub10grade = document.Expected.sub10grade.value;
    var sub10credits = document.Expected.sub10credits.value;
    var sub11grade = document.Expected.sub11grade.value;
    var sub11credits = document.Expected.sub11credits.value;
    var sub12grade = document.Expected.sub12grade.value;
    var sub12credits = document.Expected.sub12credits.value;
    var totalcred = Number(tcredits) + Number(sub1credits) + Number(sub2credits) + Number(sub3credits) + Number(sub4credits) + Number(sub5credits) + Number(sub6credits) + Number(sub7credits) + Number(sub8credits) + Number(sub9credits) + Number(sub10credits) + Number(sub11credits) + Number(sub12credits);
    var weightedcredits = (currentCG * tcredits) + (sub1grade * sub1credits) + (sub2grade * sub2credits) + (sub3grade * sub3credits) + (sub4grade * sub4credits) + (sub5grade * sub5credits) + (sub6grade * sub6credits) + sub7grade * sub7credits + sub8grade * sub8credits + sub9grade * sub9credits + sub10grade * sub10credits + sub11grade * sub11credits + sub12grade * sub12credits;
    expected_cg = weightedcredits / totalcred;
    expected_cg = expected_cg.toFixed(2);
    console.log(expected_cg);
    // alert('Your Expected CGPA is ' + expected_cg.toFixed(2));
    document.querySelector('.CgpaValue').innerHTML = `<h2>Your Expected CGPA is ${expected_cg}</h2>`;
    expected_cg = '';

}