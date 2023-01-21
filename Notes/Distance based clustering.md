---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Unsupervised machine learning]]
****
<span class="centerImg">![[DistancebasedClusteringTypes.png]]</span>
<span class="centerImg">![[DistancebasedClusteringElaborateTypes.png|400]]</span>
# Types
- **Well-separated:** Each point is closer to all other points in its cluster, than to any other point (in any other cluster).
	- [[Hierarchical clustering]] with max-linkage
- **Center-based:** Each point is closer to the center of its cluster than to any other clusters.
	- [[K-mean clustering]]
	- [[Ward clustering]]
- **Contiguity-based:** Each point is closer to at least one point in its cluster than any point in another cluster.
	- [[Hierarchical clustering]] with min-linkage

- **Density-based:** Clusters are regions of high density separated by regions of low density.
	- [[Gaussian mixture-model - GMM]]
- **Conceptual clusters:** Points in a cluster share some general property that is derived from the entire set of points.

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]