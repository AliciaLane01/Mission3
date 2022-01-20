//Build a JavaScript program that calculates and displays both a final percentage and a letter grade
//using the "Grade Calculator" form entries based on the weights listed in the syllabus.Use
//jQuery selectors(i.e.the “$”) in your program.

//document.getElementById("calculate").addEventListener("click", function () {
//    alert("hello1!");
//})

$("#calculate").click(function () {
    var final_perc = 0;
    var final_grade = '';

    //weight of categories in percent (i.e. 50 is 50%):
    let assignments = 55;
    let group_project = 5;
    let quizzes = 10;
    let exams = 20;
    let intex = 10;


    final_perc = (($("#assigns").val() / 100) * assignments)
        + (($("#grp_proj").val() / 100) * group_project)
        + (($("#quizzes").val() / 100) * quizzes)
        + (($("#exams").val() / 100) * exams)
        + (($("#intex").val() / 100) * intex);

//        Letter Grade conversions
//    Total >= 94% ... A
//    90% <= Total < 94% ... A-
//    84% <= Total < 87% ... B
//    87% <= Total < 90% ... B+
//    80% <= Total < 84% ... B-
//    60% <= Total < 64% ... D
//    77% <= Total < 80% ... C+
//    74% <= Total < 77% ... C
//    70% <= Total < 74% ... C
//    67% <= Total < 70% ... D+
//    64% <= Total < 67% ... D
//    Total < 60% ... E

    if (final_perc >= 94) {
        final_grade = "A";
    }
    else if (final_perc >= 90) {
        final_grade = "A-";
    }
    else if (final_perc >= 87) {
        final_grade = "B+";
    }
    else if (final_perc >= 84) {
        final_grade = "B";
    }
    else if (final_perc >= 80) {
        final_grade = "B-";
    }
    else if (final_perc >= 77) {
        final_grade = "C+";
    }
    else if (final_perc >= 74) {
        final_grade = "C";
    }
    else if (final_perc >= 70) {
        final_grade = "C-";
    }
    else if (final_perc >= 67) {
        final_grade = "D+";
    }
    else if (final_perc >= 64) {
        final_grade = "D";
    }
    else if (final_perc >= 60) {
        final_grade = "D-";
    }
    else {
        final_grade = "E";
    }

    alert("Final grade: " + final_perc + "% " + final_grade);
})

