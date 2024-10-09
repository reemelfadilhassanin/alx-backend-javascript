// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Call insertRow and store the result in newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
