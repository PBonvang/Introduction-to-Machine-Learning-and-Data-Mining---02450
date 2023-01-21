---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****

Class imbalance refers to the problem of having different numbers of observations per class in a dataset, which at worst can result in the classifier always guessing the class with most observations. 

# Methods
- Resampling:
	- Undersampling: Only taking the number of observations of the smallest class, for every class.
	- Oversampling: Making copies of the underweighted classes
- [[Penalization]]
- Changing the performance metric/measure to one invariant of the imbalance, or one which takes it into account.
	- [[Area under the curve - AUC]]


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]