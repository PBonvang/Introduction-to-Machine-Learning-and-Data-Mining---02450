---
aliases: [] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Artificial Neural Networks - ANN]]
****

Are very flexible allowing them to model more complex problems, but is also more prone to [[Overfitting]]. It's therefore important to use [[Regularization]] and [[cross validation]] when selecting the parameters of the network.

Neuron: the information processing unit in NNs
Neurons are connected with weighted edges.
Layered structure, which output the output of one on to the next.

**Input layer:** First layer. Must have the same number of "neurons". This is not counted as a layer, so the below image is a 2 layer NN.
**Hidden layer:** Layers between the input and output layer
**Output layer:** The final layer

**Forward pass:** The process of feeding forward the output of one layer to the next, from the input to the output layer

<span class="centerImg">![[SimpleNeuralNetworkEx.png]]</span>

ANN are used to learn a function $f$ which maps $x$ to $y=f(x)$, and is written as
$$
\boldsymbol{f}: \mathbb{R}^M \rightarrow \mathbb{R}^D
$$
where $M$ is the size of the input vector, $D$ the size of the output vector

````ad-example
title: Example 15.1.1 <br> Forward pass of a neural network
collapse: open

<span class="centerImg">![[ForwardPassExample.png]]</span>

Consider the feedforward neural network shown above. The network has no bias weights. Suppose the weights of the neural network after training are
$$w_{31}=0.05, \quad w_{41}=0, \quad w_{32}=0.1$$
$$w_{42}=-0.05, \quad w_{53}=0.1, \quad w_{54}=-10$$
and the activation functions of the neurons in the hidden layer and output layer, i.e., $n_3$, $n_4$, and $n_5$ all are given by the following leaky rectified linear unit
$$
h(x)=\left\{\begin{array}{l}
x \quad \text { if } x>0 \\
\frac{1}{10} x \text { otherwise. }
\end{array}\right.
$$
Suppose the network is evaluated on input $x_1=0.5, x_2=1$, the output is then computed by first evaluating the hidden layer:
$$
\begin{aligned}
&x_3=h\left(x_1 0.05+x_2 0.1\right)=h(1 / 8) \quad=\frac{1}{8}, \\
&x_4=h\left(x_1 0+x_2(-0.05)\right)=h(-1 / 20)=\frac{-1}{200} .
\end{aligned}
$$
and then the output layer:
$$
x_5=h\left(x_3 0.1+x_4(-10)\right)=h(1 / 16)=1 / 16 .
$$

````
^example15-1-1

Each neuron typically also have a bias weight $w_{0}$, which is used in the neuron by extending the input $x$ by adding a 1 in front of the rest of the coordinates.

**Training**
By assuming the true value $y_{i}$ to be normally distributed around the predicted value $f(\boldsymbol{x}_{i},\boldsymbol{w})$ we get the probability density of the observation $y_{i}$:
$$\large
p\left(\boldsymbol{y}_{i} \mid \boldsymbol{x}_{i}, \boldsymbol{w}\right)=\mathcal{N}\left(\boldsymbol{y}_{i} \mid \boldsymbol{f}\left(\boldsymbol{x}_{i}, \boldsymbol{w}\right), I \sigma^{2}\right)=\frac{1}{\left(2 \pi \sigma^{2}\right)^{\frac{K}{2}}} \op{exp}\left(-\frac{\left\|y_{i}-f\left(\boldsymbol{x}_{i}, \boldsymbol{w}\right)\right\|^{2}}{2 \sigma^{2}}\right)
$$
$\boldsymbol{w}:$ The weight matrix of the layers
$K:$ The dimension of the output vector $\boldsymbol{y}$.

The problem is then to maximize $\P(\boldsymbol{w}\mid \boldsymbol{X}, \boldsymbol{y})$, which can be done by minimizing the [[Regularization|regularized]] cost function $E$:
$$
\begin{aligned}
\boldsymbol{w}^* &=\underset{\boldsymbol{w}}{\arg \min } E_\lambda(\boldsymbol{w}) \\
E_\lambda(\boldsymbol{w}) &=\frac{1}{N} \sum_{i=1}^N\left\|\boldsymbol{f}\left(\boldsymbol{x}_i, \boldsymbol{w}\right)-\boldsymbol{y}_i\right\|^2+\lambda \boldsymbol{w}^T \boldsymbol{w}
\end{aligned}
$$

Training is therefore searching for a minimum of $E$/minimizing $\boldsymbol{w}^{*}$
<span class="centerImg">![[ANNMinimizingWeightsExample.png]]</span>

[[Gradient descent]] is a method to minimize the cost.

# Classification
## Binary
In binary classification we assume the probability of an observation to be [[The Bernoulli distribution|Bernoulli]] distributed
$$
p(y \mid \boldsymbol{x}, \boldsymbol{w})=\operatorname{Bernouilli}(y \mid \hat{y})=\hat{y}^y(1-\hat{y})^{1-t}, \quad \hat{y}=\sigma(f(\boldsymbol{x}, \boldsymbol{w}))
$$

And the cost function to minimize is thus:
$$
E_\lambda(\boldsymbol{w})=-\frac{1}{N} \sum_{i=1}^N\left[y_i \log \hat{y}_i+\left(1-y_i\right) \log \left(1-\hat{y}_i\right)\right]+\lambda \boldsymbol{w}^{\top} \boldsymbol{w}, \quad \hat{y}_i=f\left(\boldsymbol{x}_i, \boldsymbol{w}\right)
$$

## Multi class
$$
E_\lambda(\boldsymbol{w})=-\frac{1}{N} \sum_{i=1}^N\left[\sum_{k=1}^C y_{i k} \log \hat{y}_{i k}\right]+\lambda \boldsymbol{w}^{\top} \boldsymbol{w}
$$
$$
\hat{y}_{i k}=\frac{\op{exp}(f_k\left(\boldsymbol{x}_i, \boldsymbol{w}\right))}{\sum_{c=1}^C \op{exp}(f_c\left(\boldsymbol{x}_i, \boldsymbol{w}\right))}
$$

# Multinomial regression
First we prefix our observations with 1 as usual to account for the bias weight. Then the function we wish to determine is 
$$
\boldsymbol{f}\left(\boldsymbol{x}_i, \boldsymbol{W}\right)=\boldsymbol{W} \tilde{\boldsymbol{x}}_i
$$
$$
\boldsymbol{W}=\left[\begin{array}{c}
\boldsymbol{w}_1^{\top} \\
\boldsymbol{w}_2^{\top} \\
\vdots \\
\boldsymbol{w}_{C-1}^{\top}
\end{array}\right]
$$

$\boldsymbol{W}:$ The weight matrix ($C-1\times M$)
$C:$ Number of constants
$M:$ Number of coordinates in input vector
$\boldsymbol{x}_{i}:$ Input vector

The objective is then to minimize:
$$
E(\boldsymbol{W})=-\sum_{i=1}^N\left[\sum_{k=1}^C y_{i k} \log \tilde{y}_{i k}\right]+\lambda \boldsymbol{w}^{\top} \boldsymbol{w}
$$
$$\Large
\tilde{y}_{i k}= \begin{cases}\frac{\op{exp}(\boldsymbol{w}_k^{\top} \tilde{\boldsymbol{x}}_{i})}{1+\sum_{c=1}^{C-1} \op{exp}(\boldsymbol{w}_c^{\top} \tilde{\boldsymbol{x}}_{i})} & \text { if } k \leq C-1 \\ \frac{1}{1+\sum_{c=1}^{C-1} \op{exp}(\boldsymbol{w}_c^{\top} \tilde{\boldsymbol{x}}_{i})} & \text { if } k=C .\end{cases}$$





# References
- [[Introduction to Machine Learning and Data Mining - 02450]]