$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featureFile/Amazon.feature");
formatter.feature({
  "name": "To check whether add to cart is working properly or not",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Amazon"
    }
  ]
});
formatter.scenario({
  "name": "To validate add to cart button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Amazon"
    }
  ]
});
formatter.step({
  "name": "User have to Enter Amazon Website throughh Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonDef.user_have_to_Enter_Amazon_Website_throughh_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click signin button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.user_have_to_click_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to pass \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.user_have_to_pass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.click_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to send \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.user_have_to_send(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click sigin button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.click_sigin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click in Search tab",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.user_have_to_click_in_Search_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In search tab Enter Mobiles",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.in_search_tab_Enter_Mobiles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.click_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click any product in new page",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDef.click_any_product_in_new_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click add to cart button",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDef.click_add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
});