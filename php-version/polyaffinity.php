<?php
    require_once('parts/head.php');
    require_once('parts/menu.php');
?>
    <div class="header-container">
        <h1 class="header__text">PolyAffinity</h1>
        <img src="images/headers/polyaffinity-header.jpg" alt="polyaffinity-header.jpg" class="header__background">
    </div>

    <div class="intro-container">
        <h2 class="intro__title">What is PolyAffinity?</h2>
        <p class="intro__text">
            PolyAffinity aims to predict the binding affinity of protein-peptide complexes for traditionally hard-to-drug proteins, 
            facilitating in-silco drug design where other tools fail. This is achieved using PolyChord's advanced-sampling technology 
            to sample the energy landscape of the protein-peptide complex even in the presence of dynamic motion of the pair.
        </p>
    </div>

    <div class="polyaffinity-container">
        <div class="polyaffinity__dynamic-container">
            <div class="polyaffinity__dynamic__image-container">
                <img src="images/polyfold/centroid50_error_animation_beta1.0.gif" alt="placeholder.png" class="polyaffinity__dynamic__image">
                <p class="img-description">PolyAffinity's Protien Vibration Visualisation</p>
            </div>
            <div class="polyaffinity__dynamic__info-container">
                <h2 class="polyaffinity__dynamic__info__title">A Protein's Bigger Picture</h2>
                <p class="polyaffinity__dynamic__info__text">
                    Traditional machine-learning-based methods have been shown to be very effective for predicting protein structure, 
                    but they essentially provide a snapshot “photograph” of the protein. In reality, a protein is dynamically moving, 
                    or vibrating, and in many cases (for example, with so-called disordered proteins) it is important to account for this 
                    dynamic motion in making predictions. By fully sampling the energy surface PolyAffinity can account for this.
                </p>
            </div>
        </div>
        <div class="polyaffinity__confidence-container">
            <div class="polyaffinity__confidence__info-container">
                <h2 class="polyaffinity__confidence__info__title">Strengths of a Complete Data Landscape</h2>
                <p class="polyaffinity__confidence__info__text">
                    By fully sampling the energy landscape of the complex, PolyAffinity is also able to identify alternative states to the 
                    native one, and account for them in its prediction of binding affinity. Furthermore, the prediction's temperature can 
                    be adjusted post-analysis to examine how the protein-peptide complex behaves in different environmental conditions.
                </p>
            </div>
            <div class="polyaffinity__confidence__image-container">
                <img src="images/polyfold/temps.png" alt="placeholder.png" class="polyaffinity__confidence__image">
                <p class="img-description-right">PolyFold Capturing Vibrational Motion at Any Temperature</p>
            </div>
        </div>
        <div class="polyaffinity__outro-container">
            <div class="polyaffinity__outro__image-container">
                <img src="images/polyfold/full-atom_energy_surface.gif" alt="placeholder.png" class="polyaffinity__outro__image">
                <p class="img-description">PolyFold's Navigation of Full-Atom Energy Surface</p>
            </div>
            <div class="polyaffinity__outro__info-container">
                <h2 class="polyaffinity__outro__info__title">A Plethora of Insights</h2>
                <p class="polyaffinity__outro__info__text">
                    This exact same method can also be used in refining the structure of individual proteins in a way that accounts for 
                    dynamic motion, misfolds and alternative states. This is just a taste of what PolyAfinity can achieve. To learn more, 
                    head to our <a href="contact.php" class="link">contact us</a> page and shoot us a message for more details.
                </p>
            </div>
        </div>
    </div>
<?php
    require_once('parts/footer.php');
?>