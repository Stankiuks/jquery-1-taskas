$('document').ready(function () {
    var pointer = 10;
    var addedGreenValue = false;
    var addedRedValue = false;

  $('.task1 .red-ball').on('click', function () {
      var value = parseInt ($(this).text());
      var newValue = value * 2;
      $(this).text(newValue);
  });


    $('.task2 .red-ball').on('click', function () {
        var greenBallValue = parseInt($('.task2 .green-ball').text());
        var value = parseInt($(this).text());
        var newValue;

        if (!addedGreenValue){
            newValue = value + greenBallValue + pointer;
            addedGreenValue = true;
        }else{
            newValue = value + pointer;
        }
        $(this).text(newValue);

        addedRedValue = false;
    });

    $('.task2 .green-ball').on('click', function () {
        var redBallValue = parseInt($('.task2 .red-ball').text());
        var value = parseInt($(this).text());
        var newValue;

        if(!addedRedValue){
            newValue = value + redBallValue + pointer;
            addedRedValue = true;
        }else {
            newValue = value + pointer;
        }

        $(this).text(newValue);

        addedGreenValue = false;
    });

    $('.task3 .red-ball').on('click', function () {
        var value = parseInt ($(this).text());
        var newValue = value + 1;
        $(this).text(newValue);
    });

    $('.task3 .green-ball').on('click', function () {
        var value = parseInt ($(this).text());
        var newValue = value + 1;
        $(this).text(newValue);
    });

    $('.task3 .yellow-ball').on('click', function () {
        $('.task3 .red-ball, .task3 .green-ball').text(0);
    });


});

