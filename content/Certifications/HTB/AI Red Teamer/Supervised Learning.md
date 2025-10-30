## What is supervised learning?
A type of ML where 
- Algorithms learn from labeled data to make predictions on new, unseen data. 
- Each training example has both input features and the correct output label.
## Process
1. **Feed labeled examples** to the algorithm (training data)
2. **Algorithm identifies patterns** between features and labels
3. **Model learns mapping function** from inputs to outputs
4. **Make predictions** on new, unlabeled data and making inference

- **Prediction** = "What will happen?"
- **Inference** = "What does this tell us about how the world works?"

## Subtypes of Supervised learning
There are subtypes of supervised learning where 
1. **Classification**: Predicting categories (spam vs. not spam emails)
2. **Regression**: Predicting continuous values (house prices, stock prices)
	1. Linear 
	2. Logistic 

The key is having quality labeled training data and building models that generalize well to new situations.

## Overfitting/Underfitting
- This leads on well to overfitting where the ML model learns training data too well (including noise)
- **Symptoms**:
    - Excellent training performance
    - Poor performance on new data
- **Cause**: Model memorizes rather than learns patterns
example: Think of a student with perfect photographic memory but poor reasoning skills
- cannot generalize 
###### Occurs when:
- there are too many parameters relative to a training dataset
- not enough training data 
- training for too long which leads to similar results as overfitting as the model memmorizes 
### How to Detect Overfitting?

1. **Performance Gap:** Large difference between training and validation accuracy
2. **Learning Curves:** Training error keeps decreasing while validation error starts increasing
3. **Complexity Signs:** Model has more parameters than you have training examples
### How to prevent this?

1. **More Training Data:** Harder to memorize with thousands of examples
2. **Simpler Models:** Limit model complexity to force pattern learning
3. **Regularization:** Add penalties for overly complex solutions
4. **Cross-Validation:** Test on multiple different data splits
5. **Early Stopping:** Stop training when validation performance stops improving
### Cross validation 
1. **Split your data into pieces** (like dividing a deck of cards into 5 piles)
2. **Train on 4 piles, test on 1 pile**
3. **Repeat this 5 times**, using a different pile for testing each time
4. **Average all the test scores** to get a reliable performance estimate

We do this for multiple reasons:
- **More reliable:** One test might be too easy or too hard
- **Catches overfitting:** If your model only works well on one specific test set, cross-validation will reveal this
- **Better confidence:** Like getting multiple opinions instead of just one

### Regularization
This adds a complexity penalty for the model where the model gets punished for being too complicated 
- this ensures that the model generalizes by keeping things simple and this prevents overfitting
L1 regularisation - Lasso
- Forces some features to be completely ignored (sets them to zero)
L2 regulatisation - Ridge 
- Shrinks all features toward zero but doesn't eliminate them completely
## Key Takeaways

- Building something that works in theory vs. something that works in practice
- Deploying confidently vs. discovering failures after launch
- Think of evaluation as **insurance for your AI system** - it costs time and effort upfront, but it prevents much larger costs and failures down the road
- Success depends heavily on data quality and avoiding overfitting/underfitting

## Types of Supervised Learning 
| Problem Type   | Small Dataset     | Large Dataset       | Need Explanations   |
| -------------- | ----------------- | ------------------- | ------------------- |
| Classification | Naive Bayes       | Random Forest       | Decision Tree       |
| Regression     | Linear Regression | Random Forest       | Linear Regression   |
| Text Analysis  | Naive Bayes       | Logistic Regression | Logistic Regression |

## Decision Trees 
Used among supervised learning algorithms for classification and regression tasks 
- It asks a series of simple questions about your data to reach a final answer.

**The Parts of a Decision Tree:**

- **Root Node**: The first question
- **Internal Nodes**: The follow-up questions 
- **Leaf Nodes**: The final answers 

AI algorithms uses math to figure out which questions are most helpful. It looks for questions that best separate different groups. For example:

- If asking "Is it sunny?" helps separate days when you played tennis from days when you didn't, that's a good question to ask first
### How do does AI determine what questions are good questions and to ask them first?

We can use these 3 methods to figure this out: 

- **Gini Impurity**: Measures how "mixed up" the groups are
- **Entropy**: Measures how uncertain or chaotic the data is
- **Information Gain**: Measures how much a question helps reduce confusion

- **Gini**: Uses squaring (simpler math, faster to compute)
- **Entropy**: Uses logarithms (more theoretically grounded in information theory)


#### Gini impurity
- measuring the diversity of a dataset 
- used in the training of decision trees 
- the number is higher if the diversity of the dataset is higher 
##### Calculation:
$$Gini(S) = 1 - Σ (pi)²$$
- **S** = Your dataset (the box of balls)
- **pi** = The proportion (percentage) of items in category i
- **Σ** = Sum up all the categories
##### Example 
Let's say you have 50 emails in your spam filter:

- 30 are spam emails
- 20 are legitimate emails

**Step 1**: Calculate proportions

- Proportion of spam: p₁ = 30/50 = 0.6 (60%)
- Proportion of legitimate: p₂ = 20/50 = 0.4 (40%)

**Step 2**: Square each proportion

- p₁² = 0.6² = 0.36
- p₂² = 0.4² = 0.16

**Step 3**: Sum them up

- 0.36 + 0.16 = 0.52

**Step 4**: Apply the formula

- Gini = 1 - 0.52 = 0.48
#### Entropy
Another way to meausr ehow mixed up the data is 
- **Low entropy**: Very predictable (like a box that's 95% red balls, 5% blue balls)
- **High entropy**: Very unpredictable (like a box with equal amounts of red, blue, green, yellow balls
$$Entropy(S) = -Σ pi × log₂(pi)$$
- **S** = Your dataset
- **pi** = The proportion of items in category i
- **log₂** = Logarithm base 2 (measures information in "bits")
- **Negative sign** = Makes the result positive (since log of fractions is negative)


Think of entropy like **weather predictability**:

- **Low entropy**: "It's always sunny in San Diego" → Easy to predict
- **High entropy**: "Weather in England changes every hour" → Hard to predict
#### Information Gain 
It measures **how much uncertainty you eliminate** by asking a particular question

How much better can I predict the answer after asking this question?

$$Information Gain(S, A) = Entropy(S) - Σ (|Sv|/|S|) × Entropy(Sv)$$
- **S** = Original dataset
- **A** = Feature/attribute we're considering splitting on
- **Sv** = Subset of data where feature A has value v
- **|Sv|/|S|** = Proportion of data in each subset (weighting factor)

Information Gain = Original Uncertainty - Weighted Average of New Uncertainties

##### Example 
Let's say we have 50 emails and want to decide whether to split on "Contains word 'FREE'":

**Original Dataset (S)**:

- 50 emails total: 30 spam, 20 legitimate
- Original entropy = 0.971 (as calculated before)

**After Split on "Contains FREE"**:

- **Group 1 - Contains FREE**: 20 emails (18 spam, 2 legitimate)
- **Group 2 - No FREE**: 30 emails (12 spam, 18 legitimate)

**Step 1**: Calculate entropy for each group

**Group 1 (Contains FREE)**:

- p₁ = 18/20 = 0.9 (spam)
- p₂ = 2/20 = 0.1 (legitimate)
- Entropy₁ = -(0.9 × log₂(0.9) + 0.1 × log₂(0.1))
- Entropy₁ = -(0.9 × (-0.152) + 0.1 × (-3.322))
- Entropy₁ = -(-0.137 + (-0.332)) = 0.469

**Group 2 (No FREE)**:

- p₁ = 12/30 = 0.4 (spam)
- p₂ = 18/30 = 0.6 (legitimate)
- Entropy₂ = -(0.4 × log₂(0.4) + 0.6 × log₂(0.6))
- Entropy₂ = -(0.4 × (-1.322) + 0.6 × (-0.737))
- Entropy₂ = -(-0.529 + (-0.442)) = 0.971

**Step 2**: Calculate weighted average entropy

- Weight₁ = 20/50 = 0.4 (proportion in Group 1)
- Weight₂ = 30/50 = 0.6 (proportion in Group 2)
- Weighted Entropy = 0.4 × 0.469 + 0.6 × 0.971
- Weighted Entropy = 0.188 + 0.583 = 0.771

**Step 3**: Calculate Information Gain

- Information Gain = 0.971 - 0.771 = 0.200

######  What Does Information Gain = 0.200 Mean?

This means that asking "Contains FREE?" reduces our uncertainty by 0.200 bits. We've made the data significantly more predictable!
##### Comparing Different Splits

Let's compare with another potential split - "Sender domain is .com":

**After Split on "Sender is .com"**:

- **Group 1 - .com domain**: 35 emails (20 spam, 15 legitimate)
- **Group 2 - Other domains**: 15 emails (10 spam, 5 legitimate)

**Group 1 entropy**:

- p₁ = 20/35 = 0.57, p₂ = 15/35 = 0.43
- Entropy₁ ≈ 0.985

**Group 2 entropy**:

- p₁ = 10/15 = 0.67, p₂ = 5/15 = 0.33
- Entropy₂ ≈ 0.918

**Weighted average**: 0.7 × 0.985 + 0.3 × 0.918 ≈ 0.965

**Information Gain**: 0.971 - 0.965 = 0.006

##### Decision Making

The decision tree compares:

- **"Contains FREE"**: Information Gain = 0.200 ✓
- **"Sender is .com"**: Information Gain = 0.006

Since "Contains FREE" has higher information gain, the tree chooses this split first!

###### Intuitive Understanding

Think of Information Gain like **sorting efficiency**:

**High Information Gain (Good Question)**:

- Before: Mixed pile of papers
- After: Two neat piles - one mostly contracts, one mostly invoices
- You eliminated lots of confusion!

**Low Information Gain (Poor Question)**:

- Before: Mixed pile of papers
- After: Two piles that are still pretty mixed up
- You didn't learn much!