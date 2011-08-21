JsBdd
=====
ahem

JsBdd is a JavaScript BDD DSL. 

To use, write scenarios like this:


    story("do a thing", function() {

      scenario("when I do something under certain conditions", function() {

        given("certain conditions", function() {
          
        });

        when("I do something", function() {
          
        });

        then("pigs should fly", function() {
          areEqual(1,2, "oh no");
          
        });

        and("some other observation", someOtherObservation);

        function someOtherObservation() {
          
        }

      });

    });



