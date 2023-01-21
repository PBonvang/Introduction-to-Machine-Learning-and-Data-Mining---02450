---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Tree-based learning]]
****

<span class="centerImg">![[RegressionTreeExample.png]]</span>

Regression trees are simply [[Classification trees]] for continuous data. The "questions" in regression is just intervals or higher or lower questions, like shown below:

<span class="centerImg">![[RegressionTreeSplitExample.png|300]]</span>

The predicted value is then the mean of the observations already in the leaf. 
$$
y(v)=\frac{1}{N(v)} \sum_{i \in v} y_i
$$
and the impurity is computed as
$$
I(v)=\frac{1}{N(v)} \sum_{i \in v}\left(y_i-y(v)\right)^2
$$

Then use [[Hunts algorithm]] to determine the optimal tree.
Potential stop criterion could be stopping once the purity gain is below a certain value.


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]