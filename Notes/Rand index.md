---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Clustering similarity measures]]
****
$$
R(Q, Z)=\frac{S+D}{\frac{1}{2} N(N-1)}
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

A very naive measure of similarity between clusterings $Q,Z$. As it will be very close to 1 if many small clusters exist, thus making $D>>S$.
See [[(Extended) Jaccard Similarity]] instead.

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]