---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Boosting]]
****

$$
f^*(\boldsymbol{x})=\underset{y=1,2}{\arg \max } \sum_{t=1}^T \alpha_t \delta_{f_t(\boldsymbol{x}), y}
$$

$T:$ Number of iterations and models
$f_1(\boldsymbol{x}), \cdots, f_T(\boldsymbol{x}):$ Models
$\alpha_t:$ Importance weights, weighting the prediction of each model
$\delta_{a, b}= \begin{cases}1 & \text { if } a=b \\ 0 & \text { if } a \neq b\end{cases}$
$\boldsymbol{w}(t):$ The weights for model $f_{t}(x)$

AdaBoost is a boosting method which uses a weighted majority vote of the trained classifiers as prediction.

# Updating weights
AdaBoost updates $\boldsymbol{w}(t)$ and $\alpha_{t}$ in the following steps:
1. Computing the weighted error:
	$$
	\epsilon_t=\sum_{i=1}^N w_i(t)\left(1-\delta_{f_t\left(\boldsymbol{x}_i\right), y_i}\right)
	$$
2. Compute importance:
   $$
	\alpha_t=\frac{1}{2} \log \frac{1-\epsilon_t}{\epsilon_t}
	$$
3. Creating new weights $\boldsymbol{w}(t+1)$:
$$
\begin{aligned}
w_i(t+1) &=\frac{\tilde{w}_i(t+1)}{\sum_{j=1}^N \tilde{w}_j(t+1)} \\
\\
\text { where } \tilde{w}_j(t+1) &= \begin{cases}w_j(t) e^{-\alpha_t} & \text { if } f_t\left(\boldsymbol{x}_j\right)=y_j \\
w_j(t) e^{\alpha_t} & \text { if } f_t\left(\boldsymbol{x}_j\right) \neq y_j .\end{cases}
\end{aligned}
$$

````ad-example
title: Example <br> Simple iteration
collapse: open

```Python
import math

x = [1,1,0,0]
y = [1,0,0,0]
N = len(x)
w = [1/N]*N

e = sum([w[i]*(1-int(x[i]==y[i])) for i in range(N)])
print("e:",e)

a = 1/2*math.log((1-e)/e)
print("a:", a)

w_tilde = [w[i]*math.exp((-1 if x[i]==y[i] else 1)*a) for i in range(N)]
print(w_tilde)

w_new = [w_tilde[i]/sum(w_tilde) for i in range(N)]
print(w_new)
```

````
^example

# Algorithm
<span class="centerImg">![[adaboostAlgo.png]]</span>

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]