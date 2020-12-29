    var timer1 = null;
    $(document).ready(function() {
      $("#start_button").click(function() {
        $("#start_button").prop("disabled", true);
        $("#stop_button").prop("disabled", false);
        $("#reset_button").prop("disabled", false);
        var hour_time = Number($("#hour").text());
        var minute_time = Number($("#minute").text());
        var second_time = Number($("#second").text());
        var under_second_time = Number($("#under_second").text());

        function event() {

          if (under_second_time >= 10) {
            second_time += 1;
            under_second_time = 0;
          }
          if (second_time >= 60) {
            minute_time += 1;
            second_time = 0;
          }
          if (minute_time >= 60) {
            hour_time += 1;
            minute_time = 0;
          }
          if (hour_time >= 60) {
            clearInterval(timer1);
          }
          $("#hour").text(hour_time);
          $("#minute").text(minute_time);
          $("#second").text(second_time);
          $("#under_second").text(under_second_time);
          under_second_time++;
        }
        timer1 = setInterval(event, 100);

      });
      $("#stop_button").click(function() {
        $("#start_button").prop("disabled", false);
        $("#stop_button").prop("disabled", true);
        $("#reset_button").prop("disabled", false);
        clearInterval(timer1);
      });
      $("#reset_button").click(function() {
        $("#start_button").prop("disabled", false);
        $("#stop_button").prop("disabled", true);
        $("#reset_button").prop("disabled", true);

        clearInterval(timer1);

        $("#hour").text(0);
        $("#minute").text(0);
        $("#second").text(0);
        $("#under_second").text(0);
      });
    });
    