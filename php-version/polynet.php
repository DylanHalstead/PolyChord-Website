<?php
    require_once('parts/head.php');
    require_once('parts/menu.php');
?>
    <div class="header-container">
        <h1 class="header__text">Polynet</h1>
        <img src="images/headers/polynet-header.jpg" alt="polynet-header.jpg" class="header__background">
    </div>

    <div class="intro-container">
        <h2 class="intro__title">PolyNet: Explainable AI</h2>
        <p class="intro__text">
            A fundamental step in using machine learning to model some system or process is the training of the network. This involves 
            finding the network parameter settings that produce the best predictions of some training data, commonly achieved by using 
            gradient descent to minimise the difference between prediction and training data. PolyNet uses the PolyChord engine to fully 
            sample all possible parameter settings of a network, allowing one to leverage the full predictive power of a given network 
            architecture, rather than just using a single or small handful of predictions.
        </p>
    </div>

    <div class="polynet-box-container">
        <div class="polynet-box__image-container">
            <img src="images/graphs/rastrigin.gif" alt="placeholder.png" class="polynet-box__image">
            <p class="img-description">PolyChord Algorithm Parsing Rastrigin Fuction</p>
        </div>
        <div class="polynet-box__info">
            <h2 class="polynet-box__title">Opening the Black Box</h2>
            <p class="polynet-box__text">
                This full sampling makes for more efficient networks since a smaller network that leverages all its predictions will 
                do substantially better than one that does not. It also provides uncertainties on the predictions, which makes the 
                network explainable and less of a black box. Furthermore, the resulting predictions are far more generalisable, which 
                combines with the uncertainty to mitigate the risk of false positives/negatives, providing unprecedented trust in PolyNet's 
                predictions.
            </p>
        </div>
    </div>

    <div class="outro-container">
        <h2 class="outro__title">Network Architecture Design</h2>
        <p class="outro__text">
            Importantly, using the model-selection power of the PolyChord technology, PolyNet can be used in network design by allowing 
            the user to rate the performance of different types of network. To learn more, head to our 
            <a href="contact.php" class="link">contact us</a> page and shoot us a message for more details.
        </p>
    </div>
<?php
    require_once('parts/footers.php');
?>