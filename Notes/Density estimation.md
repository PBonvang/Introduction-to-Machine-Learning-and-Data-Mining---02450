---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Unsupervised machine learning]]
****
Density estimation is essentially fitting a [[Gaussian mixture-model - GMM]], but using a cheaper and more robust estimator to determine the parameters, than the expensive EM algo.

# Kernel density estimator
<span class="centerImg">![[KDEExample.png]]</span>
$$
p_\lambda(\boldsymbol{x})=\frac{1}{N} \sum_{i=1}^N \mathcal{N}\left(\boldsymbol{x} \mid \boldsymbol{x}_i, \lambda^2 \boldsymbol{I}\right)
$$
$$
\begin{aligned}
\mathcal{L}(\lambda) &=\log p\left(\boldsymbol{X}^{\text {test }} \mid \lambda\right) \\
&=\sum_{j=1}^{N^{\text {test }}} \log p\left(\boldsymbol{x}_j^{\text {test }} \mid \lambda\right) \\
&=\sum_{j=1}^{N^{\text {test }}} \log \left[\frac{1}{N} \sum_{i=1}^N \mathcal{N}\left(\boldsymbol{x}_j^{\text {test }} \mid \boldsymbol{x}_i, \lambda^2 \boldsymbol{I}\right)\right]
\end{aligned}
$$

$\lambda:$ Kernel/Band width, selected with [[Cross validation]].
Conversion from GMM to KDE: $\pi_k=\frac{1}{N}, \quad \mu_k=\boldsymbol{x}_k \quad \text { and } \quad \Sigma_k=\lambda^2 \boldsymbol{I}$

**Problems:**
- Due to the same kernel size being used everywhere in the data, all clusters are expected to be of the same density:
  <span class="centerImg">![[KDEClustering.png|300]]</span>
  This can make [[Anomaly detection]] quite hard.

```python
def gausKernelDensity(X,width):
    '''
    GAUSKERNELDENSITY Calculate efficiently leave-one-out Gaussian Kernel Density estimate
    Input: 
      X        N x M data matrix
      width    variance of the Gaussian kernel
    
    Output: 
      density        vector of estimated densities
      log_density    vector of estimated log_densities
    '''
    X = np.mat(np.asarray(X))
    N,M = X.shape

    # Calculate squared euclidean distance between data points
    x2 = np.square(X).sum(axis=1)
    D = x2[:,[0]*N] - 2*X.dot(X.T) + x2[:,[0]*N].T

    # Evaluate densities to each observation
    Q = np.exp(-1/(2.0*width)*D)
    # do not take density generated from the data point itself into account
    Q[np.diag_indices_from(Q)]=0
    sQ = Q.sum(axis=1)
    
    density = 1/((N-1)*np.sqrt(2*np.pi*width)**M+1e-100)*sQ
    log_density = -np.log(N-1)-M/2*np.log(2*np.pi*width)+np.log(sQ)
    return np.asarray(density), np.asarray(log_density)
```
# With KNN
$$\begin{align*}
p_{\lambda}(x_{i})&=\frac{1}{K} \sum_{j\in N_{\boldsymbol{X}_{\backslash i}}\left(\boldsymbol{x}_i, K\right)} \mathcal{N}\left(\boldsymbol{x}_{i} \mid \boldsymbol{x}_j, \lambda^2 \boldsymbol{I}\right)\\
&=\frac{1}{K} \cdot \frac{1}{\sqrt{(2\pi \cdot \lambda^{2})^{M}}} \cdot \sum\limits_{j\in N_{\boldsymbol{X}_{\backslash i}}\left(\boldsymbol{x}_i, K\right)} \operatorname{exp}\left(- \frac{(x_{i}-x_{j})^{2}}{2 \cdot \lambda^{2}}\right)
\end{align*}$$
$M:$ Number of attributes
$K:$ Number of nearest neighbours to use
$N_{\boldsymbol{X}_{\backslash i}}\left(\boldsymbol{x}_i, K\right):$ The set of the K nearest neighbours to $x_{i}$

# Average relative density (ARD)
<span class="centerImg">![[ARDExample.png|300]]</span>
$$
\operatorname{ard}_{\boldsymbol{X}}\left(\boldsymbol{x}_i, K\right)=\frac{\operatorname{density}_{\boldsymbol{X}_{\backslash i}}\left(\boldsymbol{x}_i, K\right)}{\frac{1}{K} \sum_{\boldsymbol{x}_j \in N_{\boldsymbol{X}_{\backslash i}}\left(\boldsymbol{x}_i, K\right)} \operatorname{density}_{\boldsymbol{X}_{\backslash j}}\left(\boldsymbol{x}_j, K\right)}
$$
$K:$ Number of nearest neighbours

A estimator to accommodate clusters of different densities.
Does not rely on probabilities but rather relative distance to the $K$ nearest neighbours.
$$
N_{\boldsymbol{X}}(\boldsymbol{x}, K)=\{\text { The } K \text { observations in } \boldsymbol{X} \text { which are nearest to } \boldsymbol{x}\} \text {. }
$$
Average distance to the K-nearest observations:
$$
\frac{1}{K} \sum_{\boldsymbol{x}^{\prime} \in N_{\boldsymbol{X}}(\boldsymbol{x}, K)} d\left(\boldsymbol{x}, \boldsymbol{x}^{\prime}\right)
$$
$d(x,y):$ Distance measure, typically [[Euclidean distance]]

Density:
$$
\operatorname{density}_{\boldsymbol{X}}(\boldsymbol{x}, K)=\frac{1}{\frac{1}{K} \sum_{\boldsymbol{x}^{\prime} \in N_{\boldsymbol{X}}(\boldsymbol{x}, K)} d\left(\boldsymbol{x}, \boldsymbol{x}^{\prime}\right)}
$$
- If average distance is low, the density is high, and vice versa.





# References
- [[Introduction to Machine Learning and Data Mining - 02450]]