---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Nearest neighbour methods]]
****
$$
f(\boldsymbol{x}, K)=\frac{1}{K} \sum_{i \in N_{\boldsymbol{X}}(\boldsymbol{x}, K)} y_i
$$

K-nearest neighbour regression is simply determining the value as the [[mean]] of the k-nearest neighbours. Say you'd like to determine $f(x)$ for a new $x$. The we'd take the $K$ nearest observations to $x$ in the training set, and compute the mean.

# Higher-order KNN regression
The mean isn't always the best approximation. Imagine a sinus wave, the mean could be very different from the true function. Instead we can fit a polynomial of a higher degree to the K-nearest neighbours, and use it's prediction instead.

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]