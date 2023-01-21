---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]] 
****
```ad-summary
title: Method 11.3.1 <br> Jeffrey interval
collapse: open

- Select a form of cross-validation
- Obtain $n$ predictions $\hat{y}_1, \ldots, \hat{y}_n$ from the model/classifier
- Let $m=\sum_{i=1}^n c_i$ be the number of times the classifiers prediction is correct
- The $1-\alpha$ confidence interval $\left[\theta_L, \theta_U\right]$ is now obtained by first computing $a=m+\frac{1}{2}$ and $b=N-m+\frac{1}{2}$ and then:
$$
\begin{aligned}
\theta_L &=\operatorname{cdf}_B^{-1}\left(\frac{\alpha}{2} \mid a, b\right) \text { if } m>0 \text { otherwise } \theta_L=0 \\
\theta_U &=\operatorname{cdf}_B^{-1}\left(1-\frac{\alpha}{2} \mid a, b\right) \text { if } m<n \text { otherwise } \theta_U=1
\end{aligned}
$$

Report results as follows: A point estimate of the accuracy of the classifier is $\hat{\theta}=\frac{a}{a+b}$, and an $\alpha=0.95$ Jeffreys interval is given as $\left[\theta_L, \theta_U\right]$.

```
^method11-3-1

# Python 
```Python
def jeffrey_interval(y, yhat, alpha=0.05):
    m = sum(y - yhat == 0)
    n = y.size
    a = m+.5
    b = n-m + .5
    CI = scipy.stats.beta.interval(1-alpha, a=a, b=b)
    thetahat = a/(a+b)
    
    return thetahat, CI
```


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]