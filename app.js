// 1. Declare 3 variables in one statement.
var variable1, variable2, variable3;

// 2. Declare 5 legal & 5 illegal variable names.
// Legal variable names:
var legalVariable;
var $money;
var _underscore;
var camelCaseVariable;
var myVar123;

// Illegal variable names:
// var 123illegal; // Starts with a number
// var my-variable; // Contains a hyphen
// var space Variable; // Contains a space
// var alert; // Reserved keyword
// var my variable; // Contains a space

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
document.write("<h1>Rules for naming JS variables</h1>");

// b) Variable names can only contain ______, ______, ______, and ______.
document.write(" Variable names can only contain letters, numbers, underscores, and dollar signs.<br/>");

// c) Variables must begin with a ______, ______ or ______. For example $name, _name or name
document.write(" Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name<br/>");

// d) Variable names are case _________
document.write(" Variable names are case-sensitive.<br/>");

// e) Variable names should not be JS _________
document.write(" Variable names should not be JS reserved keywords.<br/>");
