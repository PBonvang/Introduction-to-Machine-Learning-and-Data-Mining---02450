---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]]
****

Cross validation is the industry standard for evaluating models, and ensuring they don't overfit.
In short cross validation is the evaluation method of testing models on observations it wasn't trained on.
Cross validation is used to determine model types and hyper parameters of a model, by estimating different configurations generalization error allowing us to select the model with lowest error.

# Methods
The overall recommendation is 10-fold cross validation.

See also:
- [[Two-layer cross validation]]

## Hold out
Classic train test splitting the dataset.

## K fold
<span class="centerImg">![[KfoldingExample.gif|#invert]]</span>
Splitting the dataset up into $k$ folds, training the model on each fold ensuring the model doesn't overfit to the training test split in the hold out method. 
A fold is a split in the dataset using $k-1$ pieces for training and $1$ for testing. 

The generalization error is computed as the average loss of the fold models.

## Leave-one-out
This is K fold where $K=N$ the number of observations, thus checking every observation against a model trained on the rest of the dataset. This is however enormously time consuming as $N$ models has to be trained. 
# References
- [[Introduction to Machine Learning and Data Mining - 02450]]
