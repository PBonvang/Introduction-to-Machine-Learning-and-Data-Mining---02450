---
aliases: [P norm distance] # Searchable synonyms and translations
---
Modified: `$= dv.current().file.mtime`
Tags: []
Subjects: [[Machine learning]], [[Measures of distance]]
****

$$
d_p(\boldsymbol{x}, \boldsymbol{y})=\|\boldsymbol{x}-\boldsymbol{y}\|_p= \begin{cases}\left(\sum_{i=1}^M\left|x_i-y_i\right|^p\right)^{\frac{1}{p}} & \text { if } 1 \leq p<\infty \\ \max \left\{\left|x_1-y_1\right|,\left|x_2-y_2\right|, \ldots,\left|x_M-y_M\right|\right\} & \text { if } p=\infty\end{cases}
$$

# Special case - p < 1
$$
d_p(\boldsymbol{x}, \boldsymbol{y})=\left|x_1-y_1\right|^p+\left|x_2-y_2\right|^p+\cdots+\left|x_M-y_M\right|^p
$$

# Python

```python
def p_distance(x: np.array, y: np.array, p:float) -> float:
    if p == 0:
        return len(x)
    
    if p == np.inf:
        return np.max(x-y)

    return np.sum((x-y)**p)**(1/p)
```


# References
- [[Introduction to Machine Learning and Data Mining - 02450]]