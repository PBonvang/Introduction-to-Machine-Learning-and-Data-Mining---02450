---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Ensemble methods]]
****

<span class="centerImg">![[boostingExample.png|400]]</span>

An ensemble method which seeking hard to classify observations and making specialist models. Just like in the medical world where specialists are trained to solve a specific problem.

It does so by iteratively increasing the probability $w_{i}$ of sampling hard-to-classify observations and decrease the probability $w_{i}$ for easily classifiable observations. Making a new classifier in each iteration.
$w_{i}=\frac{1}{N}$ initially. 
Note $\sum\limits_{i=1}^{N}w_{i}=1$

The general boosting framework works in 4 steps:
1. Sample $N$ observations with replacement with the probabilities $w_{i}$ of selecting each observation, provided by the previous iteration. Giving $\mathcal{D}_{\text{\# iteration}}$
2. Determine which are classified incorrectly
3. Update the weights, increasing $w_{i}$ for wrongly classified and decreasing rightly classified observations. Keeping the sum property $\sum\limits_{i=1}^{N}w_{i}=1$.
4. Repeat previous steps using the newly updated weights, creating a new classifier in each iteration.

# Index
- [[AdaBoost]]


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]