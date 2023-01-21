---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Class imbalance]]
****
<span class="centerImg">![[AUCExample.png]]</span>

$$\mathrm{AUC}(f)=\int_{a}^{b}\mathrm{TPR}(\mathrm{FPR}(\theta)) ~d\theta$$

$\mathrm{TPR}(\mathrm{FPR}(\theta)):$ **Receiver operator characteristic (ROC)**, the TPR as a function of the FPR, which both are a function of the threshold $\theta$. 

Area under the curve (AUC) refers to the measure being the area under the graph/curve produced by using different parameters for the classifier.
Most commonly used for [[Logistic regression]], there the threshold parameter $\theta \in [0,1]$, determining when an observation is 1 and when it's 0 can, have a significant impact on the performance measure.

AUC is the integration of the graph of the True positive rate ($\mathrm{TPR}_{\theta}$) as a function of the False positive rate ($\mathrm{FPR}_{\theta}$) in the range of the parameter $\theta$. 

$$
\begin{aligned}
\mathrm{FPR}_\theta &=\frac{\mathrm{FP}_\theta}{\mathrm{FP}_\theta+\mathrm{TN}_\theta}, \\
\mathrm{TPR}_\theta &=\frac{\mathrm{TP}_\theta}{\mathrm{TP}_\theta+\mathrm{FN}_\theta}
\end{aligned}
$$

Note that the rates themselves are a function of the parameter $\theta$.

# Computing
Use`sklearns.metrics` `roc_curve` or `roc_auc_score` to compute it.
```python
from sklearn.metrics import roc_curve, roc_auc_score

y = [] # Class indices
p = # Probability of getting a positive observation in the dataset

fpr, tpr, thresholds = metrics.roc_curve(y,p)
AUC = metrics.roc_auc_score(y, p)
```

# ROC
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def ROC_plot(x, y, threshold = [0,1], title = "ROC"):
    start, end = threshold
    rates = []
    for theta in [start] + x + [end]:
        preds = (np.array(x) > theta).astype(int)
        
        TP = np.sum((preds == y) & (preds == 1))
        FP = np.sum((preds != y) & (preds == 1))
        TN = np.sum((preds == y) & (preds == 0))
        FN = np.sum((preds != y) & (preds == 0))

        TPR = TP/(TP + FN)
        FPR = FP/(FP + TN)

        rates.append([FPR, TPR])
    
    rates = pd.DataFrame(rates, columns=["FPR","TPR"])

    plt.plot(rates.FPR, rates.TPR)
    plt.title(title)
    plt.show()
```

# References
- [[Introduction to Machine Learning and Data Mining - 02450]]