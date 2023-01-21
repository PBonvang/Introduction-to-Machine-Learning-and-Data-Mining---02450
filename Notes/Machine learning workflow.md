---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****
<span class="centerImg">![[MachineLearningWorkflow.png]]</span>

# Step 1 - Determine problem type
When faced with a new problem, the first thing to do is determining the problem type. Is it a [[Supervised machine learning|supervised]] or [[Unsupervised machine learning|unsupervised]] problem? Is it [[linear regression|regression]] or classification?

# Step 2 - Understand available data
Data is the fuel of any machine learning method. Checking if the data is feasible and without to many issues is therefore a good determining factor for the final model. *Shit in. Shit out.*
This is the [[Data mining]] step.

# Step 3 - Select method
Selecting the method is rarely just selecting a method and sticking to it. This is however the step where you experiment with different methods, looking for promising methods. Then training one or more promising models.
This is also the step where the first models $\mathcal{M}_1,\mathcal{M}_2,...$ are created.

# Step 4 - Evaluation
Evaluating the models on previously unseen data is paramount, to determine which model generalizes best.
This is the final model used for a scientific paper or used in an actual system.
In this step we also look at the failures of the models and try to determine the cause and possible corrections. With these findings we might restart the process trying to build and even more accurate model.


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]