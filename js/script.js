// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {
 const firstName = document.getElementById("first-name").value
 const userAge = parseInt(document.getElementById("age-entered").value)
 document.getElementById("answer").innerHTML = "Your info is: " + firstName + ", age " + userAge + "."
}
