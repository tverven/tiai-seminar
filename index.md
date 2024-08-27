---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# title: Theory of Interpretable AI Seminar
layout: home
---

The seminar is an international online event focused on exploring the theoretical foundations of interpretable and explainable AI. Its goal is to exchange ideas and form a supportive community for those interested in the topic. 

## Practicalities

* Monthly seminar, 15.00 Central European Time (CET) /
  9.00 am Eastern Standard Time (EST)
* Zoom link: [https://uva-live.zoom.us/j/87120549999](https://uva-live.zoom.us/j/87120549999)
* Sign up:
    * [E-mail announcements](https://list.uva.nl/mailman/listinfo/tiai-seminar)
    * [Google calendar](https://calendar.google.com/calendar/u/1?cid=NTlhNjNhZDQ5ZmUxYmM5MmRmZTMwNzkwOWZhYjMyNTRhMzA4OGYwZTAxY2Q5MGU3NzQ2YjRlNWE0NzhmMzFkMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
* [YouTube channel](https://www.youtube.com/@TheoryofInterpretableAISeminar) 

### Organizers:
* [Michal Moshkovitz](https://sites.google.com/view/michal-moshkovitz/home)
* [Suraj Srinivas](https://suraj-srinivas.github.io/)
* [Tim van Erven](https://www.timvanerven.nl/)

## Schedule

### 2024/2025

<table>
<tr>
<td>November&nbsp;7 (tentative)</td>
<td><a href="https://www.andrew.cmu.edu/user/aristesk/">Andrej Risteski</a></td>
<td>...</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>...</p>
    </details>
</td>
</tr>

<tr>
<td>October&nbsp;10</td>
<td><a href="http://tml.cs.uni-tuebingen.de/team/luxburg/">Ulrike von Luxburg</a></td>
<td>...</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>...</p>
    </details>
</td>
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
