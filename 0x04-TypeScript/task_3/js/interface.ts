// interface.ts

// Create a type RowID
export type RowID = number;

// Create an interface RowElement
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;  // Optional property
}
