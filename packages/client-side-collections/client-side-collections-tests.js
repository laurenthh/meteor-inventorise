// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by client-side-collections.js.
import { name as packageName } from "meteor/lh:client-side-collections";

// Write your tests here!
// Here is an example.
Tinytest.add('client-side-collections - example', function (test) {
  test.equal(packageName, "client-side-collections");
});
