# Exercise Instructions

Packaged/included files for this exercise

* options.js (a)
* option_prices.js (b)
* UI Mockup

## The Goal.
Write an app/module using Javascript, CSS and HTML. Please use as much native Javascript as possible, or, if you are up for the task, write out
your solution in not only native JS but with React. 

This is more of a test of your front-end expertise, but not without dismissing the importance of the markup and presentation layers; in addition, to cleverness, extensibility and re-usability of your code.

Please consider libraries other than jQuery.

Your solution should:

* Combine the relevant data from data file (b) into data file (a)
* Display all of the "options" key data objects in the consolidated data file in the UI, keeping in mind the following criteria:
    * an option has to have a non-zero price value associated with it, or,
have a property of "is_default":true, and
    * cannot have the "no_ui" property
    * List the eligible options from step 2 onto the UI
    * sorted by price (highest-to-lowest),
    * including the option's name
    * including the option's price next to the name and using the currency_code for localizing/formatted the price value
    * if an option has a price value of 0, use "-" instead of the 0
    * display the total value of the visible options, which should also take into account the base price, inspect_prep_price and personal_delivery_price values
    * The UI should have a DOM element that allows the user to toggle – on/off – the visibility of all the option price values.

## When You Are Done.
Zip up your solution – what you feel would be a production-ready solution to this exercise – and send it back for review.

Bonus points if you can show evidence of a test-driven approach to your dev workflow.
