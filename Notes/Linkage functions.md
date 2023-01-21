---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Clustering (analysis)]]
****
<span class="centerImg">![[LinkageFunctions.png]]</span>

A linkage function is a function for determining distance between clusters.
The selection of linkage function has a significant effect on how the clusters are merged.
<span class="centerImg">![[EffectsOfLinkageFunctions.png]]</span>

# Minimum/Single linkage
$$
d\left(C_1, C_2\right)=\min _{\boldsymbol{x} \in C_1, \boldsymbol{y} \in C_2} d(\boldsymbol{x}, \boldsymbol{y})
$$

Measures the distance as the distance between an observation pair with an observations from each cluster, which has the smallest distance between them.

**Good at:**
- Finding chain clusters/clusters which are internally connected and separated by gaps.

**Bad at:**
- Distinguishing clusters in dense or noisy data
- Clustering outliers.
# Maximum/Complete linkage
$$
d\left(C_1, C_2\right)=\max _{\boldsymbol{x} \in C_1, \boldsymbol{y} \in C_2} d(\boldsymbol{x}, \boldsymbol{y})
$$
Measures the distance as the distance between an observation pair with an observations from each cluster, which has the biggest distance between them.

**Good at:**
- Finding clusters of equal size
- Finding round clusters
- Incorporating outliers

**Bad at:**
- Determining clusters of varying size, odd shapes or defined by being connected
# Average linkage
$$
d\left(C_1, C_2\right)=\frac{\sum_{\boldsymbol{x} \in C_1, \boldsymbol{y} \in C_2} d(\boldsymbol{x}, \boldsymbol{y})}{\left|C_1\right|\left|C_2\right|},
$$
Measures distance as the average distance between all observation pairs between the two clusters.

# Ward's method/linkage / Centroid linkage
<span class="centerImg">![[WardsMethod.png|400]]</span>
Ward's method computes the centroid of each of the existing clusters, then merges the two which provides the smallest increase in:
$$
E=\sum_{i=1}^N \sum_{k=1}^K z_{i k}\left\|\boldsymbol{x}_i-\boldsymbol{\mu}_k\right\|_2^2
$$



# References
- [[Introduction to Machine Learning and Data Mining - 02450]]