---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# title: Theory of Interpretable AI Seminar
layout: home
---

The seminar is an international online event focused on exploring the theoretical foundations of interpretable and explainable AI. Its goal is to exchange ideas and form a supportive community for those interested in the topic. 

## Practicalities

* Monthly seminar, 16.00 Central European Time (CET) /
  10.00 am Eastern Standard Time (EST)
* Zoom link: [https://uva-live.zoom.us/j/87120549999](https://uva-live.zoom.us/j/87120549999)
* Sign up:
    * [E-mail announcements](https://list.uva.nl/postorius/lists/tiai-seminar.list.uva.nl/)
    * [Google calendar](https://calendar.google.com/calendar/u/1?cid=NTlhNjNhZDQ5ZmUxYmM5MmRmZTMwNzkwOWZhYjMyNTRhMzA4OGYwZTAxY2Q5MGU3NzQ2YjRlNWE0NzhmMzFkMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
* [YouTube channel](https://www.youtube.com/@TheoryofInterpretableAISeminar) 

### Organizers:
* [Michal Moshkovitz](https://sites.google.com/view/michal-moshkovitz/home)
* [Suraj Srinivas](https://suraj-srinivas.github.io/)
* [Tim van Erven](https://www.timvanerven.nl/)

## Schedule

### 2025/2026

<table>
    <tr>
    <td>September&nbsp;9</td>
    <td><a href="https://tleemann.de/">Tobias Leemann</a></td>
    <td></td>
    <td>
        <details>
            <summary>Abstract</summary>
            <p></p>
        </details>
    </td>
  </tr>
</table>

### 2024/2025

<table>
    <tr>
    <td>June&nbsp;3</td>
    <td><a href="https://zbh2047.github.io/">Bohang Zhang</a></td>
    <td></td>
    <td>
        <details>
            <summary>Abstract</summary>
            <p></p>
        </details>
    </td>
  </tr>

  <tr>
    <td>May&nbsp;6</td>
    <td><a href="https://gunnarkoenig.com/">Gunnar König</a></td>
    <td>Disentangling Interactions and Dependencies in Feature Attribution</td>
    <td>
        <details>
            <summary>Abstract</summary>
            <p>In explainable machine learning, global feature
            importance methods try to determine how much each individual
            feature contributes to predicting the target variable,
            resulting in one importance score for each feature. But
            often, predicting the target variable requires interactions
            between several features (such as in the XOR function), and
            features might have complex statistical dependencies that
            allow to partially replace one feature with another one. In
            commonly used feature importance scores these cooperative
            effects are conflated with the features' individual
            contributions, making them prone to misinterpretations.</p>

            <p>In the talk, I will introduce DIP, a new mathematical
            decomposition of individual feature importance scores that
            disentangles three components: the standalone contribution
            and the contributions stemming from interactions and
            dependencies. The decomposition is unique under mild
            assumptions and entails a simple estimation procedure. Along
            with the decomposition we suggest a new visualization of
            feature importance scores that clearly illustrates the
            different contributions.</p>
        </details>
    </td>
  </tr>

  <tr>
    <td>April&nbsp;8</td>
    <td><a href="https://muttimirco.github.io/">Mirco Mutti</a></td>
    <td>A Classification View on Meta Learning Bandits</td>
    <td>
        <details>
            <summary>Abstract</summary>
            <p>Contextual multi-armed bandits are a popular choice to model
sequential decision-making. E.g., in a healthcare application we may
perform various tests to assess a patient's condition (exploration)
and then decide on the best treatment to give (exploitation). When
human design strategies, they aim for the exploration to be fast,
since the patient’s health is at stake, and easy to interpret for a
physician overseeing the process. However, common bandit algorithms
are nothing like that: The regret caused by exploration scales with
sqrt(H) over H rounds and decision strategies are based on opaque
statistical considerations. In this paper, we use an original
classification view to meta learn interpretable and fast exploration
plans for a fixed collection of bandits M. The plan is prescribed by
an interpretable decision tree probing decisions’ payoff to classify
the test bandit. The test regret of the plan in the stochastic and
contextual setting scales with O(lambda^{−2}C_lambda(M) log^2(mH)),
being m the size of M, lambda a separation parameter over the
bandits, and C_lambda(M) a novel classification-coefficient that
fundamentally links meta learning bandits with classification. Through
a nearly matching lower bound, we show that C_lambda(M) inherently
captures the complexity of the setting.</p>
        </details>
    </td>
  </tr>

  <tr>
    <td>March&nbsp;12</td>
    <td><a href="https://atticusg.github.io/">Atticus Geiger</a></td>
    <td>The Current State of Interpretability and Ideas for Scaling Up</td>
    <td>
        <details>
            <summary>Abstract</summary>
            <p> Interpretability has delivered us tools that researchers can use to predict, control, and understand the behavior of deep learning models in limited domains. Now is the time to automate and scale these methods in order to provide a more comprehensive understanding of general purpose capabilities. However, the current paradigm of sparse autoencoders fails to make good on the tools and theories from causality that are key for mechanistic understanding. I argue for an alternative route that leverages interventional data (i.e., hidden representations after an intervention has been performed) to scale the task of controlling and understanding a deep learning model. </p>
        </details>
    </td>
    <td><a href="https://youtu.be/UniigyFegEk">Video recording</a></td>
    </tr>
  
  <tr>
    <td>February&nbsp;4</td>
    <td><a href="https://sites.google.com/view/jsulam">Jeremias Sulam</a></td>
    <td>Testing Semantic Importance via Conditional Independence and Betting</td>
    <td>
        <details>
            <summary>Abstract</summary>
            <p>In recent years, the demand for interpretable machine
            learning models has surged, particularly in high-stakes
            domains, and a growing collection of methods exist to
            attempt to ‘explain’ off-the-shelf predictors. Yet, it often
            remains unclear how to interpret the reported importance of
            features or concepts. This talk reexamines interpretability
            through the lens of conditional independence tests, offering
            answers with precise statistical guarantees, including
            control over type 1 error and false discovery rate. We
            introduce methods based on online testing—or testing by
            betting—to rank importance across both input features and
            semantic constructs, and explore connections to
            game-theoretic approaches for explanation.</p>
        </details>
    </td>
<td><a href="https://youtu.be/cx7wTtRdhnA">Video recording</a></td>
    </tr>

  <tr>
<td>January&nbsp;16</td>
<td><a href="https://www.tau.ac.il/~mansour/">Yishay Mansour</a></td>
<td>A Theory of Interpretable Approximations</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>Can a deep neural network be approximated by a small decision tree based on simple features? This question and its variants are behind the growing demand for machine learning models that are *interpretable* by humans. In this work we study such questions by introducing *interpretable approximations*, a notion that captures the idea of approximating a target concept c by a small aggregation of concepts from some base class H. In particular, we consider the approximation of a binary concept c by decision trees based on a simple class H (e.g., of bounded VC dimension), and use the tree depth as a measure of complexity. Our primary contribution is the following remarkable trichotomy. For any given pair of H and c, exactly one of these cases holds: (i) c cannot be approximated by H with arbitrary accuracy; (ii) c can be approximated by H with arbitrary accuracy, but there exists no universal rate that bounds the complexity of the approximations as a function of the accuracy; or (iii) there exists a constant k that depends only on H and c such that, for *any* data distribution and *any* desired accuracy level, c can be approximated by H with a complexity not exceeding k. This taxonomy stands in stark contrast to the landscape of supervised classification, which offers a complex array of distribution-free and universally learnable scenarios. We show that, in the case of interpretable approximations, even a slightly nontrivial a-priori guarantee on the complexity of approximations implies approximations with constant (distribution-free and accuracy-free) complexity. We extend our trichotomy to classes H of unbounded VC dimension and give characterizations of interpretability based on the algebra generated by H.</p>
    </details>
</td>
<td><a href="https://youtu.be/uOwuho2er58">Video recording</a></td>
</tr>
  
  <tr>
<td>December&nbsp;5 </td>
<td><a href="https://depenm.github.io">Depen Morwani</a></td>
<td>Feature emergence via margin maximization: case studies in algebraic tasks</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>Understanding the internal representations learned by neural networks is a cornerstone challenge in the science of machine learning. While there have been significant recent strides in some cases towards understanding how neural networks implement specific target functions, this paper explores a complementary question -- why do networks arrive at particular computational strategies? Our inquiry focuses on the algebraic learning tasks of modular addition, sparse parities, and finite group operations. Our primary theoretical findings analytically characterize the features learned by stylized neural networks for these algebraic tasks. Notably, our main technique demonstrates how the principle of margin maximization alone can be used to fully specify the features learned by the network. Specifically, we prove that the trained networks utilize Fourier features to perform modular addition and employ features corresponding to irreducible group-theoretic representations to perform compositions in general groups, aligning closely with the empirical observations of Nanda et al. and Chughtai et al. More generally, we hope our techniques can help to foster a deeper understanding of why neural networks adopt specific computational strategies. </p>
    </details>
</td>
<td><a href="https://youtu.be/mNEIYjY0TkY?si=hjNQCD_RkxSeG-Ly">Video recording</a></td>
</tr>

<tr>
<td>November&nbsp;18</td>
<td><a href="https://www.andrew.cmu.edu/user/aristesk/">Andrej Risteski</a></td>
<td>Discernible patterns in trained Transformers: a view from simple linguistic sandboxes</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>Inspecting learned models for intelligible patterns has
        become a common way to try to reverse-engineer the algorithm
        that a model is implementing. In this talk, I will present two
        case studies, in which we analyze the patterns that emerge when
        training Transformer-based models on data isolating simple
        linguistic abstractions of semantics and syntax: topic models
        and context-free grammars. Concretely, topic models are a simple
        bag-of-words model in which co-occurrence patterns of words
        capture a simple notion of semantic correlation; context-free
        grammars are a formal language encoding parsing structure
        induced by grammatical rules. In the former case, we show that
        simple, one-layer attention Transformers trained with gradient
        descent learn to encode the co-occurrence structure in a natural
        way in the attention patterns, as well as the value matrix. In
        the latter case, we show that the set of optima of the standard
        autoregressive loss---<em>even</em> for very simple Transformer models,
        <em>even</em> with "natural" choices of token embeddings --- is
        qualitatively rich. In particular, the attention pattern of a
        single layer can be “nearly randomized”, while preserving the
        functionality of the network --- rendering "myopic" methods of
        inspecting individual heads or weight matrices in the
        Transformer misleading.
        <br>
        Based on
        <a href="https://arxiv.org/abs/2303.04245">https://arxiv.org/abs/2303.04245</a> and
        <a href="https://arxiv.org/abs/2312.01429">https://arxiv.org/abs/2312.01429</a>.</p>
    </details>
</td>
<td><a href="https://youtu.be/KAhpAtf469k">Video recording</a></td>
</tr>

<tr>
<td>October&nbsp;17</td>
<td><a href="https://robibhatt.github.io/">Robi Bhattacharjee</a></td>
<td>Auditing Local Explanations is Hard</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>In sensitive contexts, providers of machine learning algorithms are  
increasingly required to give explanations for their algorithms'  
decisions. However, explanation receivers might not trust the  
provider, who potentially could output misleading or manipulated  
explanations. In this work, we investigate an auditing framework in  
which a third-party auditor or a collective of users attempts to  
sanity-check explanations: they can query model decisions and the  
corresponding local explanations, pool all the information received,  
and then check for basic consistency properties. We prove upper and  
lower bounds on the amount of queries that are needed for an auditor  
to succeed within this framework. Our results show that successful  
auditing requires a potentially exorbitant number of queries --  
particularly in high dimensional cases. Our analysis also reveals that  
a key property is the ``locality'' of the provided explanations -- a  
quantity that so far has not been paid much attention to in the  
explainability literature. Looking forward, our results suggest that  
for complex high-dimensional settings, merely providing a pointwise  
prediction and explanation could be insufficient, as there is no way  
for the users to verify that the provided explanations are not  
completely made-up.</p>
    </details>
</td>
<td><a href="https://youtu.be/40XZ_QAU1Mw">Video recording</a></td>
</tr>

<tr>
<td>September&nbsp;5</td>
<td><a href="https://scholar.google.com/citations?user=0O3TE70AAAAJ">Lesia Semenova</a></td>
<td>On the existence of simpler-yet-accurate machine learning models</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>In high-stakes decision domains such as healthcare, lending,
        and criminal justice, the predictions made by deployed AI
        systems can significantly impact human lives. Understanding why
        models make specific predictions is as crucial as ensuring their
        good performance, making interpretability a key component of a
        trustworthy decision-making process. However, there has been a
        longstanding belief in the community that there is a trade-off
        between accuracy and interpretability. In this talk, I will
        formally demonstrate that such a trade-off does not hold for
        many datasets in high-stakes decision domains and that simpler
        models often perform as well as black-box models. Specifically,
        I will present a mechanism of the data generation process,
        combined with the choices typically made by analysts during the
        learning process, that leads to the existence of
        simpler-yet-accurate models.</p>

        <p><strong>Bio:</strong> Lesia Semenova is a postdoctoral researcher at Microsoft
        Research, NYC. She completed her PhD at Duke University and,
        prior to that, worked at the Samsung R&D Institute Ukraine. Her
        research interests span interpretable machine learning,
        responsible and trustworthy AI, reinforcement learning,
        reasoning, and AI in healthcare. The student teams she has
        coached won the ASA Data Challenge Expo twice and placed third
        in a competition on scholarly document processing. She was
        selected as one of the 2024 Rising Stars in Computational and
        Data Sciences.</p>
    </details>
</td>
<td><a href="https://youtu.be/PtUauSBcHuc">Video recording</a></td>
</tr>
</table>

### 2023/2024

<table>
<tr>
<td>July&nbsp;11</td>
<td><a href="https://cseweb.ucsd.edu/~dasgupta/">Sanjoy Dasgupta</a></td>
<td>Recent progress on interpretable clustering</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>The widely-used k-means procedure returns k clusters that have arbitrary
convex shapes. In high dimension, such a clustering might not be easy
to understand. A more interpretable alternative is to constrain the
clusters to be the leaves of a decision tree with axis-parallel splits;
then each cluster is a hyper-rectangle given by a small number of features.

Is it always possible to find clusterings that are intepretable in this
sense and yet have k-means cost that is close to the unconstrained optimum?
A recent line of work has answered this in the affirmative and moreover
shown that these interpretable clusterings are easy to construct.

I will give a survey of these results: algorithms, methods of analysis,
and open problems.</p>
    </details>
</td>
<td><a href="https://youtu.be/WzzZXLIhVtk">Video recording</a></td>
</tr>

<tr>
<td>June&nbsp;20</td>
<td><a href="http://www.blairbilodeau.ca/">Blair Bilodeau</a></td>
<td>Impossibility Theorems for Feature Attribution</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>Despite a sea of interpretability methods that can produce 
          plausible explanations, the field has also empirically seen 
          many failure cases of such methods. In light of these results,
          it remains unclear for practitioners how to use these methods 
          and choose between them in a principled way. In this paper, we 
          show that for moderately rich model classes (easily satisfied 
          by neural networks), any feature attribution method that is 
          complete and linear—for example, Integrated Gradients and SHAP—can
          provably fail to improve on random guessing for inferring model 
          behaviour. Our results apply to common end-tasks such as 
          characterizing local model behaviour, identifying spurious 
          features, and algorithmic recourse. One takeaway from our work is
          the importance of concretely defining end-tasks: once such an 
          end-task is defined, a simple and direct approach of repeated 
          model evaluations can outperform many other complex feature 
          attribution methods.
          Paper: 
          <a href="https://arxiv.org/abs/2212.11870">https://arxiv.org/abs/2212.11870</a>  
  </p>
    </details>
</td>
<td><a href="https://youtu.be/tmNb_FNpbYY">Video recording</a></td>
</tr>

<tr>
<td>May&nbsp;7</td>
<td><a href="https://hidde-fokkema.com/">Hidde Fokkema</a></td>
<td>Attribution-based Explanations that Provide Recourse Cannot be Robust</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>Since most machine learning systems are not inherently
        interpretable, a class of explainable machine learning methods
        try to attribute importance of the input features to the outcome
        of the model. We show that two often proposed requirements of
        good attribution-based explanations are actually mathematically
        incompatible. The first requirement is to provide recourse to
        users: if the user is unhappy with the decision, the explanation
        should tell them what they would need to change to improve the
        decision. The second requirement is robustness: small changes in
        a user's features (e.g. due to rounding or measurement errors)
        should not cause large changes in the explanations. We show that
        no method can always provide recourse and be robust, even though
        both properties can be guaranteed individually. For some
        restricted set of models, it is still possible for an
        attribution method to be robust and provide recourse and I will
        discuss some examples where this occurs. However, the message
        will be that these classes are often simple enough that they do
        not warrant an explanation. I will further illustrate our
        findings with counterexamples to at least one of the
        requirements for popular explanation methods like SHAP, LIME,
        Integrated Gradients and SmoothGrad.
        <br>
        This talk is based on joint work with Rianne de Heide and Tim van Erven.
        <br>
        Paper: 
        <a href="https://jmlr.org/papers/v24/23-0042.html">https://jmlr.org/papers/v24/23-0042.html</a>
        </p>
    </details>
</td>
<td><a href="https://youtu.be/EwwllG40XZM">Video recording</a></td>
</tr>


<tr>
<td>April&nbsp;4</td>
<td><a href="https://sites.google.com/view/damien-garreau/home">Damien Garreau</a></td>
<td>
A Sea of Words: An In-Depth Analysis of Anchors for Text Data
</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>
        Anchors (Ribeiro et al., 2018) is a post-hoc, rule-based
        interpretability method. For text data, it proposes to explain a
        decision by highlighting a small set of words (an anchor) such
        that the model to explain has similar outputs when they are
        present in a document. In this talk, I will present a first
        attempt to theoretically understand Anchors, considering that
        the search for the best anchor is exhaustive. I will give
        explicit results on shortcut models and linear models when the
        vectorization step is TF-IDF, and word replacement is a fixed
        out-of-dictionary token. 
        <br>
        Paper: <a href="https://proceedings.mlr.press/v206/lopardo23a.html">https://proceedings.mlr.press/v206/lopardo23a.html</a>
        </p>
    </details>
</td>
</tr>

</table>
