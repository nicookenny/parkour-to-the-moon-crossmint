export class Coordinates {
  row: number;
  column: number;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  get position(): {
    row: number;
    column: number;
  } {
    return {
      row: this.row,
      column: this.column,
    };
  }
}
