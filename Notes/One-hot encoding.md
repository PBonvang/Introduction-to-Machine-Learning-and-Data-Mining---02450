---
aliases: [One-out-of-k encoding] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Data science]], [[Dataset]]
****
<span class="centerImg">![[one-hot-encoding.png]]</span>

Converting a categorical variable into a column for each of the possible values, setting the column to 1 for the category the observation is in.
The reason this is better than just assigning each categorical value to a integer, is that higher integer numbers might influence the ML model, where as the order of features doesn't.

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]