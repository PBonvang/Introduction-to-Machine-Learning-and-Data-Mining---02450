---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Regularization]], [[Linear regression]]
****
$$
E_{\lambda}\left(\boldsymbol{w}, w_{0}\right)=\left\|\boldsymbol{y}-w_{0} \mathbf{1}-\hat{\boldsymbol{X}} \boldsymbol{w}\right\|^{2}+\underbrace{\lambda\|\boldsymbol{w}\|}_{\text{Regularization term}}, \quad \lambda \geq 0
$$
$E_{\lambda}\left(\boldsymbol{w}, w_{0}\right):$ Cost function
$\left\|\boldsymbol{y}-w_{0} \mathbf{1}-\hat{\boldsymbol{X}} \boldsymbol{w}\right\|^{2}:$ Standard [[Residual Sum of Squares - RSS]]
$\lambda\|\boldsymbol{w}\|:$ Regularization term
$\lambda:$ Regularization constant
$\boldsymbol{w}:$ Weight vector

L1 like [[Least squares regularization|L2 norm regularization]] is used to prevent overfitting in [[Linear Regression]] models (called [[Lasso regression]]). The difference being the type of norm used on the regularization term.
For L1 this means it's better at regularizing models with sparse observations.

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]