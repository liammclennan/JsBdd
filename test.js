
story("do a thing", function() {

  scenario("when I do something under certain conditions", function() {

    given("certain conditions", function() {
      write("certain conditions");
    });

    when("I do something", function() {
      write("I do something");
    });

    then("pigs should fly", function() {
      areEqual(1,2, "oh no");
      write("pigs should fly");
    });

    and("some other observation", someOtherObservation);

    function someOtherObservation() {
      write("some other observation");
    }

  });

});



