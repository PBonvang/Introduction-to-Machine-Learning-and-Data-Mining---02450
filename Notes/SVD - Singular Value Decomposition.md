Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Matrices]], [[Linear algebra]]
****

The basis of the SVD is the theorem of how to solve [[Linear system of equations]] for non-square matrices.
Which makes it possible to do [[PCA - Principle Component Analysis]] on non-square matrices.

$$\large \begin{align*}
\underbrace{\mathrm{A}}_{N \times M}&=\underbrace{\mathrm{U}}_{M \times M}\* \underbrace{\Sigma}_{M \times N}\* \underbrace{\mathrm{V}^{\top}}_{N \times N}\\
&=
\begin{bmatrix}|&&| \\ u_1&\dots&u_m \\ |&&| \end{bmatrix}
\begin{bmatrix}
\sigma_1&0&\dots&0 \\
0&\sigma_2&&\vdots \\ 
\vdots & &\ddots&0 \\ 
0&\dots &0&\sigma_m \\ 
0&\dots&&0 \\ 
\vdots&\vdots&\vdots&\vdots
\end{bmatrix}
\begin{bmatrix}
-&v_{1}^{\top}&- \\ 
&\vdots& \\ 
-&v_{n}^{\top}&-
\end{bmatrix}
\end{align*}$$
$N:$ Length of the vector presentation of one sample
$M:$ The number of samples
$\Sigma:$ Is a diagonal matrix with a max of $M$ [[Eigenvalues]] and the rest being 0, as $A$ will max have $M$ non-zero eigenvalues. The eigenvalues will be non-negative and in descending order of magnitude. 
- **Note** that these values aren't variances but standard deviations

$U:$ Consist of the eigenvectors of $A$ corresponding to the eigenvectors in $\Sigma$, also in descending order.
$V^{\top}:$ Describes how much of each vector in $U$ multiplied by the corresponding eigenvalue, is needed to reconstruct the original sample. It's essentially coordinates in the new basis created by $U$.

Both $U$ and $V$ are unitary, meaning they are both [[Orthonormal matrices]]:
$$\begin{align*}
UU^{\top}&=U^{\top}U=\underbrace{\mathbb{I}}_{M\times M}\ (\text{Identity matrix})\\
VV^{\top}&=V^{\top}V=\underbrace{\mathbb{I}}_{N\times N}\ (\text{Identity matrix})
\end{align*}$$

# Projecting into the subspace
$$z_{i}=Vx_{i}$$

# Python

```Python
from scipy.linalg import svd

U,S,V = svd(Y,full_matrices=False)
```

# References
- [Singular Value Decomposition (SVD): Overview](https://www.youtube.com/watch?v=gXbThCXjZFM)
- [Singular Value Decomposition (SVD): Matrix Approximation](https://www.youtube.com/watch?v=xy3QyyhiuY4)
- [[LSA - Latent semantic analysis]]
- [[Signals and data - 02462]] Week 9
- [[Introduction to Machine Learning and Data Mining - 02450]]