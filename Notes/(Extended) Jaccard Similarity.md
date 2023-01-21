---
aliases: [Jaccard index] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Measures of similarity]]
****

$$\begin{align*}
\mathrm{EJ}(\boldsymbol{x}, \boldsymbol{y})&=\frac{\boldsymbol{x}^T \boldsymbol{y}}{\|\boldsymbol{x}\|^2+\|\boldsymbol{y}\|^2-\boldsymbol{x}^T \boldsymbol{y}}\\
&=\frac{\boldsymbol{x}\cap \boldsymbol{y}}{\boldsymbol{x} \cup \boldsymbol{y}}
\end{align*}$$
Is sensitive to document lengths.
Note that X and Y must be binarized.

**In clustering:**
$$
J(Q, P)=\frac{S}{\frac{1}{2} N(N-1)-D}
$$
$N:$ Number of observations
$S:$ Number of observation pairs placed in the same cluster and has the same label
$D:$ Number of observation pairs placed in different clusters and has different labels
## Binary
$$
\mathrm{J}(\boldsymbol{x}, \boldsymbol{y})=\frac{f_{11}}{f_{11}+f_{10}+f_{01}}
$$
$f_{11}:$ Number of coordinates which are both 1
$f_{10}:$ Number of coordinates where $x=1$ and $y=0$
$f_{01}:$ Number of coordinates where $x=0$ and $y=1$
$f_{00}:$ Number of coordinates where both coordinates are 0

```Python
import numpy as np

def Jaccard(x,y):
    f11 = len(np.where((x==1) & (y==1))[0])
    f11_f10_f01 = len(np.where((x==1) | (y==1))[0])

    return f11/(f11_f10_f01)
```

# In [[Clustering (analysis)]]
$$
J(Q, Z)=\frac{S}{\frac{1}{2} N(N-1)-D}
$$
$N:$ Number of observation in dataset
$Q,Z:$ Clusterings
$\frac{1}{2}n(n-1):$ Number of possible pairs.
$S:$ Number of times the two clusterings agreed on two elements being clustered together
$$
\begin{align*}
S&=\sum_{i=1}^{N-1} \sum_{j=i+1}^{N} S_{i j}\quad,\quad S_{i j} = \delta_{z_i z_j} \delta_{q_i q_j}\\
&=\sum_{k=1}^K \sum_{m=1}^M \frac{n_{k m}\left(n_{k m}-1\right)}{2}
\end{align*}
$$
$D:$ Number of times the two clusterings agreed on two elements **not** being clustered together.
$$
\begin{align*}
D&=\sum_{i=1}^{N-1} \sum_{j=i+1}^N D_{i j}\quad,\quad D_{i j}=\left(1-\delta_{z_i z_j}\right)\left(1-\delta_{q_i q_j}\right)\\
&=\frac{N(N-1)}{2}-\sum_{k=1}^K \frac{n_k^Z\left(n_k^Z-1\right)}{2}-\sum_{m=1}^M \frac{n_m^Q\left(n_m^Q-1\right)}{2}+S
\end{align*}
$$
$$
\delta_{h k}= \begin{cases}1 & \text { if } h=k \\ 0 & \text { otherwise }\end{cases}
$$
# References
- [[Introduction to Machine Learning and Data Mining - 02450]]