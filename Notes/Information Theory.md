---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****

```ad-summary
title: Method 5.5.1 <br> Information theory
collapse: open



The information contained in an event which occur with probability $p$ is
$$
I(p)=-\log (p)
$$
Next, consider two random quantities $m$ and $n$, such that $k$ can take values $k=1, \ldots, K$ and $m$ can take values $m=1, \ldots, M$. We assume we know the joint distribution of $n, m$, which is the $K \times M$ matrix:
$$
p_{\mathrm{km}}(k, m), \quad \text { for } k=1, \ldots, K \text { and } m=1, \ldots, M
$$
Based on this matrix, we can define the marginal distributions as the $K$ and $M$-dimensional vectors:
$$
p_{\mathrm{k}}(k)=\sum_{m=1}^M p_{\mathrm{km}}(k, m), \quad p_{\mathrm{m}}(m)=\sum_{k=1}^K p_{\mathrm{km}}(k, m)
$$
The Entropy in the 1 and $2 \mathrm{~d}$-case is then defines as:
$$
H\left[p_{\mathrm{k}}\right]=-\sum_{k=1}^K p_{\mathrm{k}}(k) \log p_{\mathrm{k}}(k) . \quad H\left[p_{\mathrm{km}}\right]=-\sum_{k=1}^K \sum_{m=1}^M p_{\mathrm{km}}(k, m) \log p_{\mathrm{km}}(k, m) .
$$
In both cases, it measures the complexity of $p_{\mathrm{k}}$ and $p_{\mathrm{km}}$ in bits. In addition, the mutual information and normalized mutual information is defined as:
$$
\begin{aligned}
\operatorname{MI}\left[p_{\mathrm{km}}\right] &=H\left[p_{\mathrm{k}}\right]+H\left[p_{\mathrm{m}}\right]-H\left[p_{\mathrm{km}}\right] \\
\operatorname{NMI}\left[p_{\mathrm{km}}\right] &=\frac{\operatorname{MI}\left[p_{\mathrm{km}}\right]}{\sqrt{H\left[p_{\mathrm{k}}\right]} \sqrt{H\left[p_{\mathrm{m}}\right]}} .
\end{aligned}
$$
When we use the natural logarithm $(\log (x))$, The information, entropy, and mutual informasimply divide each quantity by $\log (2)$, the quantities are measured in bits.

```
^method5-5-1

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]