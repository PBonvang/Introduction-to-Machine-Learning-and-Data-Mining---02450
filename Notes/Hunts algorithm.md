---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Tree-based learning]]
****

Hunt's algorithm is used to determine the optimal branching in [[Tree-based learning]] models.

# How it works
Starting from a root node the algorithm "grows" a tree selecting the best "question" based on some [[#Purity gain]] measure, and stops the growth of a branch once a **stop criterion** is meet.
In practice this means standing at some node it'll try different splits of the sub observations based on different properties and perhaps intervals, selecting the one with highest purity gain, then call the algorithm recursively till the stop criterion is reached.

The **stop criterion** can have multiple clauses, e.g. it always stops when a branch is pure (Only have observations of one class in it), but we're often interested in stopping the method earlier to avoid a overfitted model like:
<span class="centerImg">![[OverfittedTreebasedlearningmodelExample.png]]</span>

## Purity gain
**Balance:** How evenly the number of observations in the subsets are split.

**Purity:** How "pure" splits are, meaning how good the split is at separating classes from each other. So a split which makes a leaf with only one class of observations is called a pure.

The impurity of the root node minus the summed and weighted/balanced impurity of the split:
$$
\Delta=I(r)-\sum_{k=1}^K \frac{N\left(v_k\right)}{N(r)} I\left(v_k\right)
$$
$I(r):$ Impurity of the root
$I(v_{k}):$ Impurity of the subset $v_{k}$
$\frac{N\left(v_k\right)}{N(r)}:$ Weight, which makes the gain focus on larger groups in the split.
$N(v_{k}):$ Number of observations in a certain subset
$N(r):$ Number of observations of the root.

## Impurity functions $I$
$$
\begin{aligned}
\operatorname{Entropy}(v) &=-\sum_{c=1}^C p(c \mid v) \log _2 p(c \mid v), \\
\operatorname{Gini}(v) &=1-\sum_{c=1}^C p(c \mid v)^2 \\
\operatorname{ClassError}(v) &=1-\max _c p(c \mid v)
\end{aligned}
$$
For regression trees:
$$
I(v)=\frac{1}{N(v)} \sum_{i \in v_1}\left(y_i-y(v)\right)^2
$$
$y(v):$ Average of the y values for the observations in $v_{1}$, where $v_{1}$ is the subset of a split.

$p(c\mid v)=\frac{N(c\mid v)}{N(v)}:$ The probability of some class $c$ being in the data/subdata $v$.

## Avoiding overfit
### Early stopping
The simples way to control the complexity of the grown tree is to stop the algorithm before it encounters pure splits. Examples of stop criterions:
- Stop splitting when a branch contains less than a specific number of observations.
- Stop splitting if a certain depth of the tree is reached.
- Stop splitting if purity gain $\Delta$ for the best split is below a certain value.

Determining the hyperparameters for these is done using [[Cross validation]].
### Pruning
Pruning first grows the full tree with no or very little early stopping, then selects which branches in the tree should be replaced by a single leaf.
How the subtrees are selected depends on the pruning strategy.

### Cost complexity pruning
Cost complexity pruning is a pruning strategy which uses the series of trees $T_0, \cdots, T_m$ produced while growing the full tree. 
Then for every tree in the series starting from the almost full, it tries to collapse each subtree of a node into one node measuring the relative increase in error per removed node.
Once the cost complexity is computed for each internal branch, the branch with the lowest cost complexity is collapsed. The new tree is saved for later.
Once pruned trees have been made for every tree in the series, the one with the lowest generalization (i.e. test) error is selected.
Estimating the generalization error is done using two-layer [[Cross validation]]

**Pseudo:**
CostComplexityPruning($T_0$, \[$T_0, T_1, \cdots, T_m$\] )
for $i=1,2, \cdots$ and $T_i$ is not only the root:
	- for each subtree $t$ of $T_{i-1}$:
		- - Compute the cost-complexity error corresponding to collapsing tree $t$ :
		- - $C_t=\frac{E(\operatorname{Prune}(T, t))-E(T)}{|T|-|\operatorname{Prune}(T, t)|}$
	- Let $t$ be the subtree of $T_{i-1}$ which minimizes $C_t$ 
	- Set $T_i=\operatorname{Prune}(\mathrm{T}, \mathrm{t})$

return min($T_i$)

**Parameters:**
$T_{0}:$  Initial full tree produced by Hunt's algorithm
\[$T_0, T_1, \cdots, T_m$\]: a sequence of increasingly more pruned trees


# Pseudo code
**Parameters:**
- Initial tree $T$ only containing the root node
- $D_r$ : Dataset associated with the current branch. Initially just the full dataset


If the stop criterion is met then
Add a leaf node to the tree which assigns every observation to the most prevalent class in $D_r$ else
Try a number of different splits on $D_r$. For each split, compute the purity gain and select the split $D_r=\left\{D_{v_1}, \ldots, D_{v_K}\right\}$ with the highest purity gain.
Recursively call the method on $D_{v_1}, \ldots, D_{v_K}$ end if

```pseudo
Hunts_algo(root, data):
	if stop criterion is met:
		Add leaf node to root, which contains all of the remaining data
	else:
		Try different splits on data, computing the purity gain.
		Select split with highest gain.
		Create nodes for each subset of the split
		For each (subnode, subdata):
			connect subnode to root
			Hunts_algo(subnode, subdata)
```

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]