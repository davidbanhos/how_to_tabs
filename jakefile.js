/**
 * Created by david on 10/10/15.
 */

(function() {
    "use strick";

    var EXPECTED_NODE_VERSION = "v0.12.4";

    desc("Default build");
    task("default", [ "version" ] , function() {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function() {
        console.log("Checking node version: .");

        var actualVersion = process.version;
        //console.log(actualVersion);

        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail("Incorrect Node version, expected " + EXPECTED_NODE_VERSION + ", but was " + actualVersion);
        }
    });

}());
