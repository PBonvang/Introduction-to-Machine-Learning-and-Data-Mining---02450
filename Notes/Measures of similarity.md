---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****

There's many ways to measure similarity, the most obvious being the Euclidean distance between two vectors, but this might not always be the best choice.

For the binary measures:
$f_{11}:$ Number of coordinates which are both 1
$f_{10}:$ Number of coordinates where $x=1$ and $y=0$
$f_{01}:$ Number of coordinates where $x=0$ and $y=1$
$f_{00}:$ Number of coordinates where both coordinates are 0
$M=f_{11}+f_{10}+f_{01}+f_{00}$

# Index
- [[(Extended) Jaccard Similarity]]

# Simple Matching Coefficient (SMC)
\* Binary

$$
\operatorname{SMC}(\boldsymbol{x}, \boldsymbol{y})=\frac{f_{11}+f_{00}}{M}
$$

```Python
import numpy as np

def SMC(x,y):
    f11 = len(np.where((x==1) & (y==1))[0])
    f10 = len(np.where((x==1) & (y==0))[0])
    f01 = len(np.where((x==0) & (y==1))[0])
    f00 = len(np.where((x==0) & (y==0))[0])
    M = f11+f10+f01+f00

    return (f11+f00)/M
```


# Cosine similarity
$$
\cos (\boldsymbol{x}, \boldsymbol{y})=\frac{\boldsymbol{x}^T \boldsymbol{y}}{\|\boldsymbol{x}\|\|\boldsymbol{y}\|}=\frac{\boldsymbol{x}\dotprod \boldsymbol{y}}{\|\boldsymbol{x}\|\|\boldsymbol{y}\|}
$$

Normalizes with regards to document length.

```Python
import numpy as np
from numpy.linalg import norm

def Cosine_sim(x,y):
    return np.dot(x,y)/(norm(x)*norm(y))
```

## Binary
$$
\cos (\boldsymbol{x}, \boldsymbol{y})=\frac{f_{11}}{\|\boldsymbol{x}\|\|\boldsymbol{y}\|}
$$

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]