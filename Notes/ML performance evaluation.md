---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****

# Setup 1
This setup compares models on the same dataset, thus any conclusions about difference in performance will only be based on this set.

The difference in generalization error is computed as:
$$
\hat{\theta}=\hat{z}_{\mathcal{D}}=\frac{1}{N^{\text {test }}} \sum_{i=1}^{N^{\text {test }}} z_i, \quad \text { where: } \quad z_i=L\left(f_{\mathcal{D}, A}\left(\boldsymbol{x}_i\right), y_i\right)-L\left(f_{\mathcal{D}, B}\left(\boldsymbol{x}_i\right), y_i\right)
$$
$L:$ Loss function, typically MSE
$f_{\mathcal{D},A}:$ Learned function on the training dataset using model $A$.
$f_{\mathcal{D},B}:$ Learned function using model $B$

**When to use:**
- If the dataset is fixed, meaning other researchers are using the exact same dataset.
- There's not enough data to use setup 2
- If a company only cares about the performance on their dataset
- It's too computationally expensive to train multiple models.


# Setup 2
This setup is a more general statistical test of performance, which generalize better across datasets.

The two ways:
- [[Hypothesis testing]], [[p-value]]
- **Estimation:** [[Confidence interval]]

Recommended to discuss confidence intervals in a results section and [[p-value]] are used secondarily.
# References
- [[Introduction to Machine Learning and Data Mining - 02450]]