---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Nearest neighbour methods]]
****
<span class="centerImg">![[KNNExample.png]]</span>

K-nearest neighbour classification is as the name suggests, classifying new observations based on the nearest already classified observations. K is usually user defined, and the class is selected as the class with most observations out of the K nearest.
In the case where there's an equal amount of multiple classes, we select the class with the nearest observation to the new obs. Alternatively a random can be selected.

# Bayesian interpretation
Let $K_{c}$ denote the number of elements in the K nearest neighbours $N_{X}(x,K)$ which belong to class $c$ and $N_{c}$ the number of class observations in the entire dataset.
$K_c=$ Number of observations $\boldsymbol{x}_i \in N_{\boldsymbol{X}}(\boldsymbol{x}, K)$ where $y_i=c$.
$N_c=$ Number of observations $\boldsymbol{x}_i$ where $y_i=c$.

Then the probability of a random observation belonging to class $c$ is:
$$
p(y=c)=\frac{N_c}{N}
$$
And the probability (using [[Bayes theorem]]) of a observation is:
$$
p(y=c \mid \boldsymbol{x})=\frac{p(\boldsymbol{x} \mid y=c) p(y=c)}{\sum_{c^{\prime}=1}^C p\left(\boldsymbol{x} \mid y=c^{\prime}\right) p\left(y=c^{\prime}\right)}=\frac{K_c}{K}
$$

KNN then selects the class with the highest probability.
# References
- [[Introduction to Machine Learning and Data Mining - 02450]]