$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    var outputName = $("input#fullName").val();
    $("#outputName").text(outputName);

    var shoppingItem = $("#shoppingItem").val();
    var quantity = $("#quantity").val();
    $("#outputItems").text(quantity + " " + shoppingItem);

    var street = $("input#address").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var outputAddress = street + ", " + city + ", " + state + " " + zip;
    $("#outputAddress").text(outputAddress);

    event.preventDefault();
  });

});