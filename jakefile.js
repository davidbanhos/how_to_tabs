/**
 * Created by david on 10/10/15.
 */

(function() {
    "use strick";

    desc("Default build");

    task("default", [ "version" ] , function() {
        console.log("\n\nBUILD OK");
    });
    desc("Check Node version");

    task("version", function() {
        console.log("Checking node version: .");
        var actualVersion = process.version;

        var packageJson = require("./package.json");
        var expectedVersion = "v" + packageJson.engines.node;

        if (actualVersion !== expectedVersion) {
            fail("Incorrect Node version, expected " + expectedVersion + ", but was " + actualVersion);
        }
    });
}());
