# 0x04. TypeScript

## Project Overview

This project is focused on learning TypeScript, covering fundamental concepts such as types, interfaces, classes, and advanced types. The goal is to deepen understanding of TypeScript's features and how to effectively use them in JavaScript applications.

**Start Date**: October 9, 2024, 6:00 AM  
**End Date**: October 10, 2024, 6:00 AM  
**Manual QA Review**: Must be requested upon project completion.

## Learning Objectives

At the end of this project, you are expected to be able to explain the following concepts without assistance:

- Basic types in TypeScript
- Interfaces, classes, and functions
- Working with the DOM using TypeScript
- Generic types
- Using namespaces
- Merging declarations
- Using ambient namespaces to import external libraries
- Basic nominal typing with TypeScript

## Resources

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Requirements

- Allowed Editors: vi, vim, emacs, Visual Studio Code
- All files must end with a newline
- All files will be transpiled on Ubuntu 18.04
- TypeScript scripts will be checked with Jest (version 24.9.*)
- A `README.md` file at the root of the project directory is mandatory
- Code should use `.ts` extension where applicable
- The TypeScript compiler should show no warnings or errors during compilation

## Configuration Files

The following configuration files should be included in the project:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

## Project Structure

The project consists of several tasks that build on each other. Below is a brief overview of each task:

### Task 0: Creating an Interface for a Student

- Create an interface `Student` with fields: `firstName`, `lastName`, `age`, and `location`.
- Create two student objects and render their names and locations in a table.

### Task 1: Building a Teacher Interface

- Create a `Teacher` interface with specific attributes and the ability to add additional attributes.
- Extend the `Teacher` interface into a `Directors` interface.

### Task 2: Advanced Class and Functions

- Implement a `StudentClass` and create methods for displaying information.
- Implement interfaces for `Director` and `Teacher` with specific functionalities.

### Task 3: Ambient Namespaces

- Create a structure for handling data with a `RowElement` interface and CRUD operations through an ambient file.

### Task 4: Namespace & Declaration Merging

- Create a namespace for subjects and implement classes for different programming subjects, utilizing declaration merging.

### Task 5: Brand Convention & Nominal Typing

- Create interfaces for `MajorCredits` and `MinorCredits` and implement functions to sum their credits.

## Repository

The project is hosted on GitHub: [alx-backend-javascript](https://github.com/your-repo/alx-backend-javascript)  
The TypeScript tasks are located in the directory `0x04-TypeScript`.

## Installation

To get started with the project, clone the repository and install the necessary packages:

```bash
git clone https://github.com/your-repo/alx-backend-javascript.git
cd alx-backend-javascript/0x04-TypeScript
npm install
to run 
npm run start-dev
