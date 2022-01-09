$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];




  
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDay);
    var Time = moment().format("H");


    x.forEach(function (time, index) {
        var start= [];
        start.push(moment().hour(time).format("h A"));
      
   
        var Div = $("<div>");
        var Span = $("<span>");
        var Input = $("<input>");
        var Btn = $("<button>");



        $(".container").append(Div);
        $(".container").addClass("mb-5");

        Div.addClass("time-block input-group input-group-prepend");
        Div.attr("data-val", index);
        Div.append(Span);
        Span.addClass("input-group-text");
        Span.addClass("start-time")
        Span.text(start);
        Div.append(Input);
        Input.attr("type", "text");
        Input.attr("data", "data-input" + index);
        Input.addClass("form-control")
        Input.attr("data", "data-text" + index);
        Div.append(Btn);
        Btn.addClass("btn btn-outline-secondary");

       
    });

  
    $("button").on("click", function (event) {
        event.preventDefault();

        var tInput = $(this).siblings("input").attr("data");
        var tVal = $(this).siblings("input").val();
        localStorage.setItem(tInput, tVal);
        var lsVal = localStorage.getItem(tInput);
        $(this).siblings("input").text(lsVal);
    });

   
    $(".input-group-text").css("width", "100px");
    $("button").text("SAVE"); 


})