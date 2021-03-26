[![GitHub last commit](https://img.shields.io/github/last-commit/fandystar/FE-Okadoc-RN?logo=github)](https://github.com/fandystar/)  [![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fandystar/FE-Okadoc-RN?logo=github&color=teal)](https://github.com/fandystar/)

# About Problem

    Sum X & Y, and print the result
        Input : 1, 2
        Output : 3
    Multiply X & Y, and print the result
        Input : 1, 2
        Output : 2
    Find first N prime number, and print the result
        Input : 4
        Output : 2, 3, 5, 7
    Find first N Fibonacci sequence, and print the result
        Input : 4
        Output : 0, 1, 1, 2 

## Basic technical test 

![Screenshot from 2021-03-15 18-43-08](https://user-images.githubusercontent.com/67256405/111148571-5e75f000-85be-11eb-956a-087312eb07b4.png)
![Screenshot from 2021-03-15 18-42-29](https://user-images.githubusercontent.com/67256405/111148749-98df8d00-85be-11eb-9bd9-7030cca0a3ab.png)

To **design a solution** with ability to :

- Sum two numbers

- Multiplly two numbers

- Find first N prime numbers

- Find first N Fibonacci sequence


## Pre requisites

The source code for this project is written using [React Native](https://reactnative.dev/). Make sure you installed on your computer before running this application, **if not please install react native from [here](https://reactnative.dev/docs/environment-setup)**.


## 1. How to run?

An interactive terminal based shell where commands can be typed in to perform different actions.

1. **npm install**

2. **npm start** 

3. **react-native run-android** 


#### Screenshots

Please go to `screenshots/running` folder to find screenshots of running **Basic technical test** 

#### Explained

**STEP 1**: `npm install` or `npm i` will download all the dependencies defined in `package.json` file and generate a `node_modules/` folder with the installed modules. Learn more [here](https://docs.npmjs.com/cli/install).

**STEP 2**: `npm start` or `npm run start` will start the application.

**STEP 3**: `react-native run-android` will start the emulator.



## 2. List of functions

- **sum {input}**: `sum('2,3')` will add up 2 + 3 to be 5

- **multiply {input}**: `multiply('2,3')` will multiply 2 by 3 to be 6.

- **prime {input}**: `prime('6')` will find first 6 prime numbers '2, 3, 5, 7, 11, 13'.

- **fibonacci {input}**: `fibonacci('6')` will find first 6 Fibonacci sequence '0 , 1, 1, 2, 3, 5'.


## 3. Test Scripts

Tests are written using [Jest](https://jestjs.io) and can be run using `npm test`

- `npm test` : Run unit tests 

#### Screenshots

Please go to `screenshots/testing` folder to find screenshots of testing **Basic technical test**  


#### Code Coverage

To see code coverage report, run `npm test`.

The current code coverage for the tests are following:

| Type  | Percentage  |
|---|---|
| Statement  | 88.31  |
| Branch  | 53.19  |
| Function  | 80  |
| Lines  | 88.16  |


 PASS  __tests__/function_test/prime.test.js
 PASS  __tests__/App-test.js
 PASS  function_test/sum.test.js
 PASS  function_test/fibonacci.test.js
 PASS  function_test/prime.test.js
 PASS  function_test/multiply.test.js
-------------------------------|---------|----------|---------|---------|-------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------------|---------|----------|---------|---------|-------------------
All files                      |   88.31 |    53.19 |      80 |   88.16 |                   
 FE_Okadoc_RN                  |   46.15 |    42.42 |      50 |   46.15 |                   
  App.js                       |   46.15 |    42.42 |      50 |   46.15 | 33-47             
 FE_Okadoc_RN/components       |    87.5 |       50 |   83.33 |    87.5 |                   
  FlatListComponent.js         |      75 |       50 |      75 |      75 | 21-22             
  TextInputComponent.js        |     100 |      100 |     100 |     100 |                   
  TouchableOpacityComponent.js |     100 |       50 |     100 |     100 | 7                 
 FE_Okadoc_RN/constans         |     100 |      100 |     100 |     100 |                   
  general.js                   |     100 |      100 |     100 |     100 |                   
 FE_Okadoc_RN/utils            |     100 |       90 |     100 |     100 |                   
  helper.js                    |     100 |       90 |     100 |     100 | 60                
-------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        2.148 s
Ran all test suites.

- **Function coverage:** Has each function (or subroutine) in the program been called?
- **Statement coverage:** Has each statement in the program been executed?
- **Branch coverage:** Has each branch (also called DD-path) of each control structure (such as in if and case statements) been executed?
- **Line coverage:** Has each executable line in the source file been executed?

**NOTE:** Code coverage is added to the jest tests (`npm test`) **((https://jestjs.io/)**.
You can see the code-coverage report in terminal as well as detailed HTML report inside `coverage/` folder.
Go to `coverage/lcov-report` folder and open `index.html`.


## 4. Dependencies Used

- [Jest](https://jestjs.io/): A JavaScript test framework for Node.js programs. Learn more [here](https://jestjs.io/).




## 5. Cheat Sheet 

Navigates to the root folder,

Open terminal

1. `npm install` : Installs all the dependencies.

2. `npm start` : Starts the application.

3. `npm test` : Runs unit tests.

3. `react-native run-android` : Runs emulator.


Feel free to reach out to me via email. Shoot your doubts at [fandyarayalin@gmail.com](mailto:fandyarayalin@gmail.com?Subject=Basic technical test).

> Glad to share it here! **Show some ❤️ by starring [this](https://github.com/fandystar/FE-Okadoc-RN) repository.**

## Author


#### [fandy araya lin](https://github.com/fandystar)

[![GitHub followers](https://img.shields.io/github/followers/fandystar.svg?label=Follow%20@fandystar&style=social)](https://github.com/fandystar/)


