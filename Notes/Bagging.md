---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Ensemble methods]] 
****
<span class="centerImg">![[baggingDiagram.png|500]]</span>

The simplest ensemble method which weights the predictions of the different models equally, and the sub-training set are chosen at random with replacement. This makes it fairly naive but still better than just using the best classifier.
Using random sampling with replacement each sub-training set will on average contain $63 \%$ of the entire training set.

Using multiple classifiers provide the possibility to model non-linear data, as the average will bend the predictions.
<span class="centerImg">![[baggingExample.png|400]]</span>


# Regression
$$
y=\frac{1}{T} \sum_{t=1}^T f_t(\boldsymbol{x})
$$
The actual mean of the predictions.


# Classification
$$
f(\boldsymbol{x})=\underset{c=1, \ldots, C}{\arg \max }\left\{\text { Number of classifiers which output } f_t(\boldsymbol{x})=c\right\},
$$
The most predicted class / The majority vote.

If **independent** classifiers which each have an accuracy of $p$, the accuracy of the majority vote is:
$$
\begin{aligned}
P(\text { Majority voting is correct }) &=\sum_{t=\lceil T / 2\rceil} P(\{t \text { classifiers are correct }\}) \\
&=\sum_{t=\lceil T / 2\rceil}^T\left(\begin{array}{c}
T \\
t
\end{array}\right) p^t(1-p)^{T-t},
\end{aligned}
$$
However we rarely have independent classifiers in the real world. However combining multiple, especially once base on different assumptions generally result in better performing models. 

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]