---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[ML performance evaluation]]
****
**Assumptions:**
1. The data is a random sample
2. The samples are paired, meaning the sample must come from the same observation units, e.g. the same person in different points in time or classifications from two classifiers on the same data.
3. Mutually exclusive groups, meaning that one observational unit can only have one class. So the classes are mutually exclusive, e.g. if the class variable is tired (yes/no) people can't be in both at the same time.

```ad-summary
title: Method 11.3.2 <br> The McNemar test for comparing classifiers
collapse: open

**Purpose:** Compare two classifiers $A$ and $B$.

1. Select a form of cross-validation
2. Obtain $n$ predictions $\hat{y}_1^A, \ldots, \hat{y}_n^A$ and $\hat{y}_1^B, \ldots, \hat{y}_n^B$ from the classifiers by evaluating them on the same cross-validation splits.
3. Compute the matrix $\boldsymbol{n}$ where
   $$
	\begin{array}{ll}
	n_{11}=\sum_{i=1}^n c_i^A c_i^B & =\{\text { Both classifiers are correct }\} \\
	n_{12}=\sum_{k=1}^n c_i^A\left(1-c_i^B\right) & =\{A \text { is correct, } B \text { is wrong }\} \\
	n_{21}=\sum_{k=1}^n\left(1-c_i^A\right) c_i^B &=\{A \text { is wrong, } B \text { is correct }\} \\
	n_{22}=\sum_{k=1}^n\left(1-c_i^A\right)\left(1-c_i^B\right)&=\{\text { Both classifiers are wrong }\}
	\end{array}
	$$

	$$
	c_i^A=\left\{\begin{array}{ll}
	1 & \text { if } \hat{y}_i^A=y_i \\
	0 & \text { if otherwise. }
	\end{array} \quad \text { and } \quad c_i^B= \begin{cases}1 & \text { if } \hat{y}_i^B=y_i \\
	0 & \text { if otherwise }\end{cases}\right.
	$$

4. Estimate performance difference:
	1. The estimated difference in accuracy of $A$ and $B,\theta=\theta_A-\theta_B$, is given as
	$$
	\hat{\theta}=\frac{n_{12}-n_{21}}{n}
	$$
	2. An approximate $1-\alpha$ confidence interval $\left[\theta_L, \theta_U\right]$ for $\theta$ can be obtained as
		$$
		\begin{aligned}
		&\theta_L=2 \operatorname{cdf}_B^{-1}\left(\frac{\alpha}{2} \mid \alpha=f, \beta=g\right)-1 \\
		&\theta_U=2 \operatorname{cdf}_B^{-1}\left(1-\frac{\alpha}{2} \mid \alpha=f, \beta=g\right)-1
		\end{aligned}
		$$
		
		$$
		\begin{aligned}
		p(\theta \mid \boldsymbol{n}) &=\frac{1}{2} \operatorname{Beta}\left(\frac{\theta+1}{2} \mid \alpha=f, \beta=g\right) \\
		f &=\frac{E_\theta+1}{2}(Q-1) \\
		g &=\frac{1-E_\theta}{2}(Q-1) \\
		E_\theta &=\frac{n_{12}-n_{21}}{n}=\hat\theta\\
		Q&=\frac{n^2(n+1)\left(E_\theta+1\right)\left(1-E_\theta\right)}{n\left(n_{12}+n_{21}\right)-\left(n_{12}-n_{21}\right)^2} 
		\end{aligned}
		$$
		For this interval to be useful we require $n_{12}+n_{21} \geq 5$.

To test if they have different performance:
- Let $H_0$ be the null hypothesis they have the same performance.
- Compute the $p$-value using the cumulative distribution function of the binomial distribution as:
$$
p=2 \mathrm{cdf}_{\text {binom }}\left(m=\min \left\{n_{12}, n_{21}\right\} \mid \theta=\frac{1}{2}, N=n_{12}+n_{21}\right)
$$
- The interpretation is that the lower $p$ is, the more evidence there is $A$ is better than $B$, but only interpret the $p$-value together with the estimate $\hat{\theta}$ and ideally the confidence interval computed above.


```
^method11-3-2

# Python 

```python
def mcnemar(y_true, yhatA, yhatB, alpha=0.05):
    # perform McNemars test
    nn = np.zeros((2,2))
    c1 = yhatA - y_true == 0
    c2 = yhatB - y_true == 0

    nn[0,0] = sum(c1 & c2)
    nn[0,1] = sum(c1 & ~c2)
    nn[1,0] = sum(~c1 & c2)
    nn[1,1] = sum(~c1 & ~c2)

    n = sum(nn.flat);
    n12 = nn[0,1]
    n21 = nn[1,0]

    thetahat = (n12-n21)/n
    Etheta = thetahat

    Q = n**2 * (n+1) * (Etheta+1) * (1-Etheta) / ( (n*(n12+n21) - (n12-n21)**2) )

    p = (Etheta + 1)*0.5 * (Q-1)
    q = (1-Etheta)*0.5 * (Q-1)

    CI = tuple(lm * 2 - 1 for lm in scipy.stats.beta.interval(1-alpha, a=p, b=q) )

    p = 2*scipy.stats.binom.cdf(min([n12,n21]), n=n12+n21, p=0.5)
    print("Result of McNemars test using alpha=", alpha)
    print("Comparison matrix n")
    print(nn)
    if n12+n21 <= 10:
        print("Warning, n12+n21 is low: n12+n21=",(n12+n21))

    print("Approximate 1-alpha confidence interval of theta: [thetaL,thetaU] = ", CI)
    print("p-value for two-sided test A and B have same accuracy (exact binomial test): p=", p)

    return thetahat, CI, p
```

# R
```R
mcnemar.test(nn)
```
# References
- [[Introduction to Machine Learning and Data Mining - 02450]]