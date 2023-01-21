---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Clustering (analysis)]]
****
<span class="centerImg">![[KMeansExample.png|350]]</span>

K-means is the most common centroid-based cluster analysis algorithm. It uses the mean as centroid and deviation of each cluster to determine when the optimal clusters have been derived.

It's highly recommended to standardize data before using K-means due to the difference if scale of the distances if not done.

# Algorithm
1. Create K clusters and determine K centroids by selecting K random observations in the set. The random observations can also be picked by selecting 1 random, then selecting the next observation as the one furthest away from the random point.
2. Go through each observation assigning it to the cluster which has the centroid it's closest to
	1. For scalar values distance is $|x-c_i|$
	2. For vector/n-dimensional observations distance is often calculated as [[Euclidean distance]]: $|\sqrt{(c_{ix}-x_{ix})^2+(c_{iy}-x_{iy})^2+...+(c_{in}-x_{in})^2}|$
3.  Then the mean value of each cluster is used as centroid for the next assignment iteration. This process ends when two iterations in a row has the same mean value for each cluster.
4.  This process is done a couple of times to find the starting centroids which result in the lowest average cluster deviation.
	1.  ![[ClusterAnalysisClusteringAttempts.png]]
5.  Now determining the optimal K-value/amount of clusters, the clustering process is done for different K values. The optimal K value is the K value right before the curve leans out.
	1.  ![[ClusterAnalysisElbowGraph.png|400]]

# Drawbacks
1. As it relies on the [[Euclidean distance]], it tends to find round clusters of roughly equal size. Making it affected by outliers and simple scaling. Which is why it's recommended to standardize the data first.

# Python
```python
from sklearn.cluster import KMeans
import numpy as np

X = [3,6,7,9,10,11,14]
K = 3
inits = [4, 7, 14]

km = KMeans(n_clusters=K, init=np.array(inits).reshape(-1,1))
km.fit_predict(np.array(X).reshape(-1,1))

print(km.cluster_centers_)
```
# References
- [[Introduction to intelligent systems - 02461]]
- [[Introduction to Machine Learning and Data Mining - 02450]]