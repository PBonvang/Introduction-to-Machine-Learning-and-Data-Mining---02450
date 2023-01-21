---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Class imbalance]]
****

$$
w_1 \mathrm{TP}+w_2 \mathrm{FN}+w_3 \mathrm{FP}+w_4 \mathrm{TN}
$$

Penalisation is the idea of weighting the components of the [[Confusion matrix]] to give a more meaningful accuracy. Allowing us to weight the importance of certain components. E.g. weighting true classifications of fraud much higher than true classifications of non-fraudulent transactions.

The weights are chosen to fit the problem and can probably be determine using [[Cross validation]].

Alternatively the [[F-score]] can be used.


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]