---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****
$$\begin{align*}
|A|_{F}=||A|| &= \sqrt{\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2}\\
&=\sqrt{\sum_{k=1}^{\min (m, n)} \sigma_k^2}
\end{align*}$$
$n:$ rows
$m:$ columns
$a_{ij}=A[i,j]:$ the element ($i,j$) in the matrix

The Frobenius norm, also known as the Euclidean norm, is a measure of the magnitude of a matrix. It is defined as the square root of the sum of the squares of the elements of the matrix.

Also used as a [[Zettlekasten/Inbox/Regularization]] term in optimization problems to prevent overfitting.

# Properties
**Unitary invariant:** meaning it's uneffected by unitary transformations like rotations, [[Transposing a matrix|transposing]], and generally:
For all scalars $\alpha \in K$ where $K=\C\cup\R$ and matrices $A, B \in K^{m \times n}$,
- $\|A\| \geq 0$ (positive-valued)
- $\|A\|=0 \Longleftrightarrow A=0_{m, n}$ (definite)
- $\|\alpha A\|=|\alpha|\|A\|$ (absolutely homogeneous)
- $\|A+B\| \leq\|A\|+\|B\|$ (sub-additive or satisfying the [[Triangle inequality]])
- $\|A B\| \leq\|A\|\|B\|$ (sub-multiplicative)

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]