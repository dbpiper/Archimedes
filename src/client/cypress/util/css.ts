import {
  Matrix,
  toCSS,
  translate as _translateMatrix,
} from 'transformation-matrix';

/**
 *
 * Cypress expects that all CSS transforms will be a transformation matrix of
 * the form matrix(a, b, c, d, tx, ty), so I am using transformation-matrix to
 * produce such a matrix. However, the `toCSS` function provided doesn't
 * provide spaces after the commas, which breaks the exact string matching
 * that Cypress .should('have.css', ...) uses. So I use this function to
 * get around that problem.
 *
 * @param matrix the matrix to convert the the Cypress CSS matrix format
 */
export const toCssCypress = (matrix: Matrix) =>
  toCSS(matrix)
    .split(',')
    .join(', ');

export const translate = (tx: number, ty = 0) =>
  toCssCypress(_translateMatrix(tx, ty));

export const translateX = (tx: number) => translate(tx);
export const translateY = (ty: number) => translate(0, ty);
