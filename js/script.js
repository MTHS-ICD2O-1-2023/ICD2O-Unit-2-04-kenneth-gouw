// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function findAreaClicked() {
  const baseInput = parseInt(document.getElementById("length-of-rectangle").value)
  const heightInput = parseInt(document.getElementById("width-of-rectangle").value)
  document.getElementById("answer").innerHTML = "The area is: " + (baseInput * heightInput) / 2 + " cm<sup>2"
}
