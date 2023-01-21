---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Association mining]]
****

The Apriori algorithm is a way to discover association rules with high support (and high confidence).

$\varepsilon\in~]~0,1~]:$ Minimum support value

**Frequent:** If a itemset $\operatorname{supp}(X)\ge\varepsilon$ it's called frequent.

**Limitations:**
- Bad at determining associations of rare occurrences. Like usually buying white wine when buying lobster, but because lobster is rarely bought this association doesn't satisfy the min. support.
- Assumes every customer has equal preferences. As the algorithm uses the entire dataset it doesn't take customer (group) preferences into account, unless done beforehand by some clustering.
# How it works

Uses the [[Downwards closure property]] to avoid computing every itemset. In the first iteration it finds frequent sets with one element which is larger than $\varepsilon$.
$$
L_1=\{\{i\} \mid \operatorname{supp}(\{i\}) \geq \epsilon\}
$$
Next determining all the frequent sets composed of two frequent items from the first iteration. Repeat this, increasing the size of the sets by one in each iteration, till $L_{k}=\emptyset$ or $k=M$ (number of variables).  
$$
Z=L_1 \cup L_2 \cup \cdots \cup L_k
$$

<span class="centerImg">![[AprioriAlgorithmPseudo.png]]</span>

## With confidence clause
Then search all subsets $X$ of $Z$, keeping those where $\operatorname{supp}(X) \leq \frac{1}{\delta} \operatorname{supp}(Z)$. These $Y=Z~\backslash~ X$ are guaranteed to satisfy both requirements.
This is speed up using the [[Downwards closure property]], checking big subsets first decreasing the size at each step, stopping a branch once it doesn't satisfy the confidence requirement. Because all subsets of the branch will also unsatisfiable. 

# Python
```python
from apyori import apriori

def print_apriori_rules(rules):
    frules = []
    for r in rules:
        for o in r.ordered_statistics:        
            conf = o.confidence
            supp = r.support
            x = ", ".join( list( o.items_base ) )
            y = ", ".join( list( o.items_add ) )
            print("{%s} -> {%s}  (supp: %.3f, conf: %.3f)"%(x,y, supp, conf))
            frules.append( (x,y) )
    return frules
    
rules = apriori( T, min_support=0.8, min_confidence=1)
print_apriori_rules(rules)
```
# References
- [[Introduction to Machine Learning and Data Mining - 02450]]