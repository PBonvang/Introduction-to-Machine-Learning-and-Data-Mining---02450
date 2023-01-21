---
aliases: [Decision trees] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Tree-based learning]]
****
<span class="centerImg">![[DecisionTreeAnimalExample.png|300]]</span>

Classification/Decision trees separate the observations/classes into branches by "asking questions" about the observation, and branching based on the possible answers.

In [[Machine learning]] these branches are determined using [[Hunts algorithm]].

````ad-example
title: Example <br> Breast cancer
collapse: open

Given a dataset of $N(r)=306$ observations. In the dataset 81 survived after 5 years (i.e. $y=1$), and 225 died (i.e. $y=0$).

We'd like to build a decision tree and consider using the positive axillary nodes detected (PAN) attribute condition for the root.
The split:

- For the $N(v_{1})=170$ subjects that had positive axillary nodes detected $N(y=1\mid v_{1})=62$ survived.
- For the $N(v_{2})=136$ subjects that did not have positive axillary nodes $N(y=1\mid v_{2})=19$ survived.

What's the gain $\Delta$ according to whether a subject had positive axillary nodes (PAN) using the Gini impurity function?

$$\begin{align*}
\Delta&=I(r)-\sum_{k=1}^2 \frac{N\left(v_k\right)}{N(r)} I\left(v_k\right)\\
&=1-\left(\left(\frac{81}{306}\right)^{2} + \left(\frac{225}{306}\right)^{2}\right)\\
&- \frac{170}{306} \left(1-\left(\left(\frac{62}{170}\right)^{2} + \left(\frac{170-62}{107}\right)^{2}\right)\right)\\
&- \frac{136}{306} \left(1-\left(\left(\frac{19}{136}\right)^{2} + \left(\frac{136-19}{136}\right)^{2}\right)\right)\\
&\approx0.025
\end{align*}$$

```python
def gini(x,n):
    return 1 - (x/n)**2 - ((n-x)/n)**2

N = 306
gain = gini(81,N) - 170/N*gini(62,170) - 136/N*gini(19,136)
#0.024999999999999883
```
````
^example

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]