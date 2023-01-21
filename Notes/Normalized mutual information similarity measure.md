---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Clustering similarity measures]]
****

```ad-summary
title: Method 18.4.1 <br> Information theory
collapse: open

We wish to compare the mutual information of two cluster assignments $Z$ and $Q$. To do this, we define the probability that an observation is assigned cluster $k$ (in $Z$) and cluster $m$ (in $Q$) as:
$$
p_{\mathrm{km}}(k, m)=\frac{n_{k m}}{N}, \quad \text { for } k=1, \ldots, K \text { and } m=1, \ldots, M
$$
$n_{k m}=\sum_{i=1}^N \delta_{z_i, k} \delta_{q_i, m}:$ Number of observations assigned to cluster $k$ in $Z$ and $m$ in $Q$.
$n:$ The joint count matrix, containing a cell for every pair of clusters between the clusters of $Q$ and $Z$.

Based on this matrix, we can define the marginal distributions as the $K$ and $M$-dimensional vectors:
$$
p_{\mathrm{k}}(k)=\sum_{m=1}^M p_{\mathrm{km}}(k, m), \quad p_{\mathrm{m}}(m)=\sum_{k=1}^K p_{\mathrm{km}}(k, m)
$$
The Entropy in the 1 and $2 \mathrm{~d}$-case is then defines as:
$$
H[Z] \equiv H\left[p_{\mathrm{k}}\right]=-\sum_{k=1}^K p_{\mathrm{k}}(k) \log p_{\mathrm{k}}(k) . \quad H[Z Q] \equiv H\left[p_{\mathrm{km}}\right]=-\sum_{k=1}^K \sum_{m=1}^M p_{\mathrm{km}}(k, m) \log p_{\mathrm{km}}(k, m) .
$$
In both cases, it measures the complexity of $p_{\mathrm{k}}$ and $p_{\mathrm{km}}$ in bits. In addition, the mutual information and normalized mutual information is defined as:
$$\operatorname{MI}[Z, Q]=\operatorname{MI}\left[p_{\mathrm{km}}\right]=H[Z]+H[Q]-H[Z Q]$$
$$\operatorname{NMI}[Z, Q]=\operatorname{NMI}\left[p_{\mathrm{km}}\right]=\frac{\operatorname{MI}[Z, Q]}{\sqrt{H[Z]} \sqrt{H[Q]}}$$
Where the $\operatorname{NMI}[Z, Q]$ is understood as measuring the overlap of the two partitions.

```
^method18-4-1

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]