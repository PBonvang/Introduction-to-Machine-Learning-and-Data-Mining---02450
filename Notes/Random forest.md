---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Classification trees|Decision trees]], [[Ensemble methods]]
****

Random forest is simply using [[Bagging]] in [[Classification trees|Decision]] or [[Regression trees]].

To avoid super correlated trees, we use a subset of the available features $M$ in each tree.
Generally:
- Regression: $\frac{1}{3}M$
- Classification: $\sqrt{M}$

# Python
```python
from sklearn.ensemble import RandomForestClassifier
```

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]