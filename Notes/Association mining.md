---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****
$$
X \rightarrow Y
$$
$$
\{\text { koldskål }\} \rightarrow\{\text { kammerjunker }\}
$$

Association mining is as the name suggest trying to determine associations between variables of a dataset. Like figuring out drinking results in hangovers.
More precisely, it's finding rules with higher support and confidence than the user-defined minimum values.
$$
\begin{aligned}
&\operatorname{supp}(X \rightarrow Y)=\operatorname{supp}(X \cup Y) \geq \epsilon \\
&\operatorname{conf}(X \rightarrow Y)=\frac{\operatorname{supp}(X \cup Y)}{\operatorname{supp}(X)} \geq \delta
\end{aligned}
\quad \Longrightarrow \quad
\frac{1}{\delta} \operatorname{supp}(X \cup Y) \geq \operatorname{supp}(X)
$$
$\varepsilon:$ Minimum support value
$\delta:$ Minimum confidence value

Where support:
$$
\begin{aligned}
\operatorname{supp}(X) &=\frac{\{\text { Number of transactions containing } X\}}{N} \\
&=\frac{|\{t \in T \mid X \subseteq t\}|}{N}\\
&=\P(X)\\
\operatorname{supp}(X \cup Y)&=\frac{\{\text { Number of transactions containing both } X~ \&~ Y\}}{N}
\end{aligned}
$$

$T:$ The full set of observations (Transactions in market-basket)

and confidence:
$$\begin{align*}
\operatorname{conf}(X \rightarrow Y)&=\frac{\operatorname{supp}(X \cup Y)}{\operatorname{supp} (X)}\\
&=\frac{\P(X \cup Y)}{\P(X)}\\
&=\P(Y \mid X)\\
&=\frac{\{\text { Number of transactions containing both } X~ \&~ Y\}}{\{\text { Number of transactions containing } X\}}
\end{align*}$$

# In practice
In practice we first use [[The Apriori algorithm]] to determine frequent itemsets $Z$. Then search all subsets $X$ of $Z$, keeping those where $\operatorname{supp}(X) \leq \frac{1}{\delta} \operatorname{supp}(Z)$. These $Y=Z~\backslash~ X$ are guaranteed to satisfy both requirements.
This is speed up using the [[Downwards closure property]], checking big subsets first decreasing the size at each step, stopping a branch once it doesn't satisfy the confidence requirement. Because all subsets of the branch will also unsatisfiable. 
# Index
- [[The Apriori algorithm]]


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]