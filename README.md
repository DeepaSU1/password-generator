# password-generator

<picture>
<img src="Capture.PNG">
</picture>

## Description

This is an application that an user can use to generate a random password based on criteria selected for password option.  
Application will prompt for password length, if length less than 10 digits, it will send message to reenter length >=10 and less than 64.
Application will also prompt for password character options 1 for special characters, 2 for numbers, 3 for lower case and 4 for upper case characters.
After choosing valid options, click password generate button.
Output password generated will be displayed on the html screen as shown above.

## Installation

N/A, Run application github url mentioned below from default browser preferably chrome.

## Usage

To use this web page, navigate to the above site using chrome browser.

https://deepasu1.github.io/password-generator/

https://github.com/DeepaSU1/password-generator/blob/main/script.js

https://github.com/DeepaSU1/password-generator


### User Story

The above image shows the web application's password output generated and functionality as requested in user story points below:


* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page


