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

### Organizers:
* [Michal Moshkovitz](https://sites.google.com/view/michal-moshkovitz/home)
* [Suraj Srinivas](https://suraj-srinivas.github.io/)
* [Tim van Erven](https://www.timvanerven.nl/)

## Schedule

### 2024/2025

<table>
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
<td><a href="https://users.cs.duke.edu/~lesia/">Lesia Semenova</a></td>
<td>...</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>...</p>
    </details>
</td>
</tr>
</table>

### 2023/2024

<table>
<tr>
<td>July&nbsp;11</td>
<td><a href="https://cseweb.ucsd.edu/~dasgupta/">Sanjoy Dasgupta</a></td>
<td>...</td>
<td>
    <details>
        <summary>Abstract</summary>
        <p>...</p>
    </details>
</td>
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
