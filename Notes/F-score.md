---
aliases: [F-measure] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[ML performance metrics]]
****

$$
F_1=\left(0.5\left(\text { Precision }^{-1}+\text { Recall }^{-1}\right)\right)^{-1}=\frac{2 \text { Precision } \cdot \text { Recall }}{\text { Precision }+\text { Recall }}
$$

[[Recall]], [[Precision]]

The F-score/measure is a ML performance metric which avoids problems of [[Class imbalance]].
Where recall in itself can be maximised by always predicting "positive", precision would decreased. The F-score is the harmonic mean of these metrics, which balances the metrics giving a better measure of performance, though still focusing mostly on the positive.   


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]