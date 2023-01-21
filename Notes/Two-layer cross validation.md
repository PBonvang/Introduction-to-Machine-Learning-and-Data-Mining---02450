---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Cross validation]]
****

<span class="centerImg">![[TwoLayerCrossValidation.png]]</span>

Two layer cross validation tries to solve the problem of underestimating the generalization error, when using simple cross validation (CV) to determine optimal hyperparameters for a model, as illustrated below.
<span class="centerImg">![[2LayerCrossValidationReasoning.png|500]]</span>

By having an inner loop selecting the optimal hyperparameters using one CV and the outer testing using another CV them, we get a more accurate estimation of the generalization error.

The final generalization error of each of the optimally selected hyperparameters are computed as the average of the test errors. **Keep in mind** that different values for the hyperparameters can be selected by the inner loop and thus errors in $\hat{E}^{\text{test}}$ doesn't necessarily belong to the same hyperparameters. So keep track of which errors correspond to which optimally selected hyperparameters

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]