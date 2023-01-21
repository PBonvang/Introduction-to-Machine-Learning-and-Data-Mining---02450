---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Science]], [[Data science]]
****

A dataset is a collection of observations about the same element. It might include attributes of different cars, attributes of stocks or attributes of some other concept.

A **non-simple** dataset is a dataset with additional structure or complexity, such as:
- **Temporal:** Observations are made sequentially over time
- **Varying number of features/attributes** 
- **Self-referential structure:** Ex: a social graph.

# Attributes
Attributes of a dataset refers to the features of the observations.

In general there's three genres:
- **Continuous:** Features with a continuous value, including text
- **Discrete:** Integer values, including categorical
- **Binary:** True/false (0,1)

**Types:**
- **Norminal:** Nonordered variables where only uniqueness matters, like country of origin or an id.
- **Ordinal:** Ordered variables (can be compared)
- **Interval:** Ordered variables with a physical meaning which is arbitrarily selected, like year, day, gps location, celsius.
  Check: Would aliens set the intervals 0 at the same point? e.g. year is arbitrarily set by humans, but could be at any point. Which is why celsius is a interval but Kelvin isn't.
- **Ratio:** Variables with a physical meaning, which is comparable. I.e. it makes sense to say that: "one value is twice as large". Like volume, ratings. 
  Check: If 0 has a meaningful physical meaning, which could have been selected by aliens not influenced by us.

The attribute type is always the most specific (lowest level).

| Level | Choices             |
| ----- | ------------------- |
| 1     | Ratio or Interval   |
| 2     | Norminal or Ordinal | 


# Imputation
Imputation is replacing missing values by guessing the value.
This can be done by taking the average of the existing values, guessing the most seen value in the dataset or using the rest of the observations variables to make an educated guess.

# Feature transformation
There's 3 reasons for why we'd transform the features:
1. To better fit machine-learning methods which are sensitive to outliers or features that reside on a different scale, such as principal component analysis and K-means, it may therefore be a good idea to standardize  features.
2. Computing new features from existing ones using expert knowledge, with the aim of making a simpler ML method more powerful
3. Categorical values might not be appropriately encoded as integers.


# Terminology
| Term    | Explanation                                                                |
| ------- | -------------------------------------------------------------------------- |
| Outlier | Observations very different to the majority.                               |
| Impute  | To impute missing data, is to replace the missing value with natural guess. | 

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]