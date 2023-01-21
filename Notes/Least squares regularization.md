---
aliases: [L2 norm regularization, Ridge regression] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Regularization]], [[Linear Regression]]
****
$$
E_{\lambda}\left(\boldsymbol{w}, w_{0}\right)=\left\|\boldsymbol{y}-w_{0} \mathbf{1}-\hat{\boldsymbol{X}} \boldsymbol{w}\right\|^{2}+\underbrace{\lambda\|\boldsymbol{w}\|^{2}}_{\text{Regularization term}}, \quad \lambda \geq 0
$$
$E_{\lambda}\left(\boldsymbol{w}, w_{0}\right):$ Cost function
$\left\|\boldsymbol{y}-w_{0} \mathbf{1}-\hat{\boldsymbol{X}} \boldsymbol{w}\right\|^{2}:$ Standard [[Residual Sum of Squares - RSS]]
$\lambda\|\boldsymbol{w}\|^{2}:$ Regularization term
$\lambda:$ Regularization constant
$\boldsymbol{w}:$ Weight vector

Least squares regularization is [[Regularization]] of [[Linear Regression]] models (called [[Ridge regression]]), which uses the L2 norm of the weight vector, which provides its alias L2 regularization.

The regularization is done by adding a regularization term to the cost function, which is a regularization constant $\lambda$ multiplied the L2 norm of the weight vector $\boldsymbol{w}$. 

Note:
- Increasing $\lambda$ will degrease the weights $\boldsymbol{w}$ to minimize the cost.
- $w_{0}$ is the mean of y

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]