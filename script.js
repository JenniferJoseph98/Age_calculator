function age() {
  var userdate = document.getElementById("date").value;
  var usermonth = document.getElementById("month").value;
  var useryear = document.getElementById("year").value;

  var date = new Date();
  var todaydate = date.getDate();
  var todaymonth = 1 + date.getMonth();
  var todayyear = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (userdate > todaydate) {
    todaydate = todaydate + month[todaymonth - 1];
    todaymonth = todaymonth - 1;
  }
  if (usermonth > todaymonth) {
    todaymonth = todaymonth + 12;
    todayyear = todayyear - 1;
  }
  var answerdate = todaydate - userdate;
  var answermonth = todaymonth - usermonth;
  var answeryear = todayyear - useryear;

  document.getElementById("age").innerHTML =
    "Your Age is " +
    answeryear +
    " Years " +
    answermonth +
    " Months " +
    answerdate +
    " Days";
}
