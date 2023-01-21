---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****

Sequential feature selection is a way to determine which features are relevant for the model, or which should be used/are relevant and which aren't.
This approach minimizes the amount of [[Cross validation]] needed to determine if a feature is worth using or not.

**Notes:**
- Forward and backward selection doesn't necessarily give the same selection, it can thus be best to do both and select the selection with lowest generalization error.
- Sequential selection doesn't check every model and thus doesn't guaranty that the selection with lowest generalization is selected 
# Forward selection
Forward selection starts by considering the model with no features
$$
\mathcal{M} .=[\bullet]
$$
it thus predict that $y$ is constant (usually the average). It then considers the models with each of the features using cross validation
$$
\mathcal{M}_1=\left[x_1\right], \quad \mathcal{M}_2=\left[x_2\right], \ldots, \mathcal{M}_K=\left[x_M\right]
$$
If $\mathcal{M} .$ still has the best generalization error the process terminates else the feature $x_{i}$ of the model with the best generalization error, is selected. The selected feature is then paired with every other feature in new models, which are evaluated using cross validation.
$$
\mathcal{M}_{1 i}=\left[\begin{array}{ll}
x_1 & x_i
\end{array}\right], \ldots \mathcal{M}_{i-1, i}=\left[\begin{array}{ll}
x_{i-1} & x_i
\end{array}\right] \ldots \mathcal{M}_{i M}=\left[\begin{array}{ll}
x_i & x_M
\end{array}\right]
$$

Again if the previously chosen optimal model still has the best error, the process stops and the features of the optimal model is selected. Else the pair of features in the new optimal model is paired with every other feature in new models. This process continuous till the optimal solution remains the optimal solution after adding another feature, or all features have been added.

**Example:**
In a dataset with $M=4$ features we wish to determine which features to use. The forward selection proceeds as:
- Start with model $\mathcal{M}_{\bullet}$ with an error of $0.91$.
- Compare models $\mathcal{M}_{\bullet}$ and $\mathcal{M}_1, \mathcal{M}_2, \mathcal{M}_3, \mathcal{M}_4$.
- Optimal model is $\mathcal{M}_4$ with error of $0.83$.
- Compare models $\mathcal{M}_4$ and $\mathcal{M}_{14}, \mathcal{M}_{24}, \mathcal{M}_{34}$.
- Optimal model is $\mathcal{M}_{24}$ with error of $0.72$.
- Compare models $\mathcal{M}_{24}$ and $\mathcal{M}_{124}, \mathcal{M}_{234}$.
- Optimal model is $\mathcal{M}_{124}$ with error of $0.68$.
- Compare models $\mathcal{M}_{124}$ and $\mathcal{M}_{1234}$.
- Since $\mathcal{M}_{124}$ has lowest error, forward selection terminates and select features $1,2,4$.


# Backward selection
Backward selection is essentially the reverse of [[#Forward selection]], where we just start with the full feature set removing features as we go. This can be faster if we know that most of the features should be relevant for the model.


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]