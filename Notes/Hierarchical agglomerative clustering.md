---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Hierarchical clustering]]
****
<span class="centerImg">![[HierarchicalAgglomerativeClusteringExample.png|400]]</span>

Where [[K-mean clustering]] relies on $K$ being determined, HAC creates a hierarchy of clusters, by merging sub clusters into bigger and bigger clusters based on the distance between them, finally ending at the top where all observations are gathered in one cluster.

**Dendrogram:** The hierarchical tree structure created by the algorithms, describing how observations are clustered based on different number of clusters.
```python
from scipy.cluster.hierarchy import dendrogram
dendrogram(X, truncate_mode='level')
```

Getting a specific clustering is done by taking the clusters at a specific height of the dendrogram.
# Algorithm
1. Create a cluster per observation
2. Merge the two nearest clusters. The height of the branch indicating the distance between the sub clusters.
3. Repeat step 2 till all observations are in the same cluster

How the nearest cluster is selected depends on the selected [[Linkage functions|Linkage function]].

```python
from scipy.cluster.hierarchy import linkage

cluster_method = 'single'
distance_metric = 'euclidean'

Z = linkage(X, method=cluster_method, metric=distance_metric)
```

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]