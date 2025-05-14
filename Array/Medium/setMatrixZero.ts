// problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.



// Examples
// Examples 1:

// Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

// Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0



const setMatrixZero = (matrix: number[][]): number[][] => {
    const rows = new Set<number>();
    const cols = new Set<number>();

    // Step 1: Find all zero positions
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    // Step 2: Set entire row to 0
    for (let row of rows) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    // Step 3: Set entire column to 0
    for (let col of cols) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }

    return matrix;
};

// ✅ Example Usage:
console.log(setMatrixZero([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
// Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]


// Test Case 1: Basic 3x3 matrix with one zero
console.log(setMatrixZero([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
// Expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// Test Case 2: 3x4 matrix with multiple zeros
console.log(setMatrixZero([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
// Expected: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]

// Test Case 3: No zero in the matrix
// console.log(setMatrixZero([[1, 2], [3, 4]]));
// Expected: [[1, 2], [3, 4]]

// Test Case 4: All zeros
// console.log(setMatrixZero([[0, 0], [0, 0]]));
// Expected: [[0, 0], [0, 0]]

// Test Case 5: Single row
// console.log(setMatrixZero([[1, 0, 3]]));
// Expected: [[0, 0, 0]]

// Test Case 6: Single column
// console.log(setMatrixZero([[1], [0], [3]]));
// Expected: [[0], [0], [0]]

// Test Case 7: Zero in corner
// console.log(setMatrixZero([[0, 2], [3, 4]]));
// Expected: [[0, 0], [0, 4]]
