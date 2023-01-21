---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Distance based clustering]]
****


$$
d_M(\boldsymbol{x}, \boldsymbol{y})=\sqrt{(\boldsymbol{x}-\boldsymbol{y})^T \boldsymbol{\Sigma}^{-1}(\boldsymbol{x}-\boldsymbol{y})}
$$

$\Sigma:$ [[Covariance matrix]]

A distance measure between two vectors $x,y$ weighted by the covariance between them.
<span class="centerImg">![[MahalanobisDistanceExample.png|200]]</span>
So in the example above the Mahalanobis distance between the blue dots are 13, but the red has 5.65, where as the euclidean distance between the pairs are both 5.65.

Notes:
- If $\Sigma=I$ the expression reduces to the [[Euclidean distance]]

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]