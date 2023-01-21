---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Regularization]]
****

$$
\mathbb{E}_{\mathcal{D}}\left[E^{\text {gen }}\right]=\mathbb{E}_{\boldsymbol{x}}\left[\operatorname{Var}_{y \mid \boldsymbol{x}}[y]+(\bar{y}(\boldsymbol{x})-\bar{f}(\boldsymbol{x}))^2+\operatorname{Var}_{\mathcal{D}}\left[f_{\mathcal{D}}(\boldsymbol{x})\right]\right]
$$
$\mathbb{E}_{\mathcal{D}}\left[E^{\text {gen }}\right]:$ The [[expectation]] of the generalization error of a model trained on a particular training set $\mathcal{D}$.

The tree components:
- $\operatorname{Var}_{y \mid \boldsymbol{x}}[y]:$ The intrinsic difficulty of the problem. This variance isn't effected by the model choice and is thus a constant.
- $(\bar{y}(\boldsymbol{x})-\bar{f}(\boldsymbol{x}))^{2}:$ The *bias* term. Tells how much the average values of models trained on different training datasets differ compared to the true mean $\hat{y}(x)$.
- $\operatorname{Var}_{\mathcal{D}}\left[f_{\mathcal{D}}(\boldsymbol{x})\right]:$ The *variance* term. Tells how much the models trained on different training data differs from each other. Small if they're similar.

The effect of bias and variance:
<span class="centerImg">![[BiasVarianceDecompositionVarAndBiasIllustration.png]]</span>

In [[Linear Regression]]
<span class="centerImg">![[BiasVarianceDecompositionComponentEffects.png]]</span>

An overly biased model is too inflexible/strict to actually model the data. An overly complex model might fit the data better but also has a tendency to overfit.
Model variance is essentially how different the same model is when trained on different datasets. So if the models vary a lot it probably overfits.

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]