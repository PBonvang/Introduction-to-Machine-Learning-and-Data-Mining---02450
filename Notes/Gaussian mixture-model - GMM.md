---
aliases: [Expectation Maximization (EM) Algorithm] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Mixture models]]
****
<span class="centerImg">![[GMMExample.png]]</span>


$$
\begin{aligned}
p(\boldsymbol{x}) &=\sum_{\boldsymbol{z}} p(\boldsymbol{x}, \boldsymbol{z})=\sum_{\boldsymbol{z}} p(\boldsymbol{x} \mid \boldsymbol{z}) p(\boldsymbol{z}) \\
&=\sum_{k=1}^K \pi_k \mathcal{N}\left(\boldsymbol{x} \mid \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k\right)
\end{aligned}
$$
$\boldsymbol{z}:$ Distributions
$k:$ Number of distributions

**Goal:** Learn collection of [[Multivariate Normal Distribution]] which maximizes the probability of seeing the training data $\boldsymbol{x}$.

**Parameters:**
- $k:$ Number of normal distributions in the model (Selected with [[Cross validation]])
- $\boldsymbol{\mu_{k}}=[\mu_{1},\mu_{2},...,\mu_{k}]:$ Location/Mean for the distributions
- $\boldsymbol{\Sigma_{k}}=[\Sigma_{1},\Sigma_{2},...,\Sigma_{k}]:$ Covariance matrices for each distribution.
- $\boldsymbol{\pi_k}=[\pi_{1},\pi_{2},...,\pi_{k}]:$ Probabilities of observing a sample in this distribution
  $$P(x\in \text{ distribtion }k)=\pi_k$$

These parameters are generally determined using the [[#Expectation Maximization (EM) algorithm]].

# Expectation Maximization (EM) algorithm
<span class="centerImg">![[EMAlgo.png]]</span>

**Problems:**
- Can converge on local maximas instead of global due to random initialization.
- Can diverge when a component is fixed on a single observation, but can be compensated for using a regularization term:
  $$
	\Sigma_k=\frac{1}{N_k} \sum_{i=1}^N \gamma_{i k}\left(\boldsymbol{x}_i-\boldsymbol{\mu}_k\right)\left(\boldsymbol{x}_i-\boldsymbol{\mu}_k\right)^T+\lambda \boldsymbol{I}
	$$
- It requires quite a lot of parameters to be fitted, thus is expensive for large datasets.
# References
- [[Introduction to Machine Learning and Data Mining - 02450]]