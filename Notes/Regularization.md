---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****
$$
\op{L}_{\lambda}(\boldsymbol{x},y)=\op{L}(\boldsymbol{x},y)+\Lambda, \quad \lambda \geq 0
$$
$\op{L}_{\lambda}(\boldsymbol{x},y):$ Regularized cost/loss function
$\op{L}(\boldsymbol{x},y):$ Loss function
$\lambda:$ Regularization constant/strength. The value is chosen as the one which minimizes the generalisation error (on the test set).
$\Lambda:$ Regularization term, which multiply $\lambda$ to the model parameters. The parameters might be squared, scaled or whatever, but they are always multiplied with $\lambda$. It's independent of the input $\boldsymbol{x}$, with the intention of trying to minimize the value of the parameters, so that they don't overfit.

Regularization is a technique to prevent [[overfitting]] in [[Machine learning]] models. By adding a regularization term $\Lambda$ to the loss function, which is ensures that the model parameters (weights in [[Linear Regression]]) doesn't overfit to the training data. As the parameters are multiplied with $\lambda$  they'll be minimized, which possibly prevents overfitting.

Note that bias terms aren't regularized.

# Types
[[Linear regression]]:
- [[Least squares regularization]]
- [[L1 regularization]]

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]