# sudoku
https://main--enchanting-sorbet-a78130.netlify.app/sudoku

\documentclass{article}
\usepackage{graphicx} % Required for inserting images

\title{An Integer Program for Solving Standard Sudokus}
\author{Jaden Noronha}
\date{December 2023}

\begin{document}

\maketitle

\section{Variables}
Let $x_{r,c,v}$ be a binary variable representing if the cell at row r and column c contains the value v. Since this IP intends to solve standard sudokus, we have $1 \leq r, c, v \leq 9$. Some of the cells in a sudoku may be provided, and these variables will be updated accordingly. For example, if the cell in the first row and second column is equal to 9, then $x_{1,1,9} = 1$ and $x_{1,1,v} = 0 \quad \forall v \in \{1,...,8\}$

\section{Objective Function}
The purpose of this integer program is to find the solution for the given sudoku. Thus, we arbitrarily set our objective function as: 

\begin{center}
$\textbf{max } \quad 1$
\end{center}
Then, the optimal solution to the IP will be the solution to the sudoku. If the IP is infeasible, then the provided sudoku is not solvable.

\section{Constraints}
We first ensure that each cell contains exactly one value. This is done using the constraint:

\begin{center}
$\sum_{i=1}^9 x_{r,c,i} = 1 \quad \forall r,c \in \{1, ..., 9\}$ 
\end{center}

We next ensure that each row contains each number exactly once. We do this by checking each column for each row and ensuring that every value from 1 to 9 occurs exactly once. This is done using the constraint 

\begin{center}
$\sum_{i=1}^9 x_{r,i,v} = 1 \quad \forall r,v \in \{1, ..., 9\}$
\end{center}
\newpage
A constraint for ensuring each column contains every value exactly once is formed similarly: 

\begin{center}
$\sum_{i=1}^9 x_{i,c,v} = 1 \quad \forall c,v \in \{1, ..., 9\}$
\end{center}

Finally, we check each 3x3 grid within the 9x9 sudoku grid to ensure it contains every value from 1 to 9 exactly once. Let $a,b \in \{0, 1, 2 \}$. Then, for any combination of a and b, a grid in a sudoku board is defined as: $x_{2a+i, 2b+j, v}$, where $i,j \in \{1,2,3\}$. We use this to formulate our constraint:

\begin{center}
$\sum_{i=1}^3 \sum_{j=1}^3 x_{3a+i,3b+j,v} = 1 \quad \forall v \in \{1, ..., 9\}, a,b \in \{0, 1, 2 \}$
\end{center}


\begin{center}
    \includegraphics[width=0.5\linewidth]{sudokugrid.png}\\
    Figure 1: A sudoku grid with each 3x3 grid highlighted based on the values of a and b.\\
\end{center}

\begin{center}
    \includegraphics[width=0.2\linewidth]{3x3.png}\\
    Figure 2: A 3x3 grid in a sudoku grid, with each cell labeled with its corresponding values of i and j.
\end{center}

\section{IP Formulation}
\begin{center}
$\textbf{max } \quad 1$\\
$\sum_{i=1}^9 x_{r,c,i} = 1 \quad \forall r,c \in \{1, ..., 9\}$ \\
$\sum_{i=1}^9 x_{r,i,v} = 1 \quad \forall r,v \in \{1, ..., 9\}$\\
$\sum_{i=1}^9 x_{i,c,v} = 1 \quad \forall c,v \in \{1, ..., 9\}$\\
$\sum_{i=1}^3 \sum_{j=1}^3 x_{3a+i,3b+j,v} = 1 \quad \forall v \in \{1, ..., 9\}, a,b \in \{0, 1, 2 \}$ \\
$x_{r,c,v} \in \{0,1\} \quad \forall r,c,v \in \{1,...,9\}$
\end{center}
\end{document}
