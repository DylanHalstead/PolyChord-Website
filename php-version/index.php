<?php
    require_once('parts/head.php');
    require_once('parts/menu.php');
?>
  <div id="homepage-intro-container">
        <div id="homepage-intro__info-container">
            <h1 id="homepage-intro__header">Making Sense of Sensors</h1>
            <h4 id="homepage-intro__text">Deep-tech-optimised Network Design & Actionable Sensor Interpretations</h4>
        </div>
        <video autoplay muted loop poster id="homepage-intro__background">
            <source src="images/headers/placeholder-intro.mp4" type="video/mp4">
        </video>
    </div>


    <h1 id="applicaitons-header">Applications in Action</h1>
    <div class="glide-container">
        <div class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide">
                        <a href="midas.html" class="application__link">
                            <div class="applicaiton">
                                <img src="images/icons/sensor.png" alt="sensor.png" class="application__icon">
                                <h4 class="application__title">
                                    MIDAS
                                </h4>
                                <p class="application__intro">
                                    Optimising the placement of transmitters/receivers in networks to minimise costs and guarantee robustness.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="glide__slide">
                        <a href="polytrack.html" class="application__link">
                            <div class="applicaiton">
                                <img src="images/icons/train.png" alt="train.png" class="application__icon">
                                <h4 class="application__title">
                                    PolyTrack
                                </h4>
                                <p class="application__intro">
                                    Providing more informed maintenance regimes for infrastructure through data-driven methods.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="glide__slide">
                        <a href="polystructure.html" class="application__link">
                            <div class="applicaiton">
                                <img src="images/icons/bridge.png" alt="bridge.png" class="application__icon">
                                <h4 class="application__title">
                                    PolyStructure
                                </h4>
                                <p class="application__intro">
                                    Providing smarter maintenance<br>regimes for infrastructure through data-driven methods.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="glide__slide">
                        <a href="polynet.html" class="application__link">
                            <div class="applicaiton">
                                <img src="images/icons/neural.png" alt="neural.png" class="application__icon">
                                <h4 class="application__title">
                                    PolyNet
                                </h4>
                                <p class="application__intro">
                                    Offering unique insights into modern machine learning, using principled Bayesian inference to build explainable systems
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="glide__slide">
                        <a href="polyaddinity.html" class="application__link">
                            <div class="applicaiton">
                                <img src="images/icons/protien.png" alt="protien.png" class="application__icon">
                                <h4 class="application__title">
                                    PolyAffinity
                                </h4>
                                <p class="application__intro">
                                    Capturing protein flexibility, calculating binding affinities, and predicting novel binding sites.
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
    
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left application__btn application__btn-prev" data-glide-dir="<"><img src="images/icons/arrow-back.svg" alt="arrow-back.svg" class="application__btn__img"></button>
                <button class="glide__arrow glide__arrow--right application__btn application__btn-next" data-glide-dir=">"><img src="images/icons/arrow-forward.svg" alt="arrow-forward.svg" class="application__btn__img"></button>
            </div>
        </div>
    </div>


    <div id="why-polychord-container">
        <div>
            <img src="images/graphs/himmelblau.gif" alt="himmelblau.gif" id="why-polychord-img">
            <p class="img-description">PolyChord Algorithm Parsing Himmelblau Function</p>
        </div>
        <div id="why-polychord__info-container">
            <h2 id="why-polychord__header">Why PolyChord?</h2>
            <p id="why-polychord__text">
                PolyChord Ltd brings together true academic excellence in data science with commercial expertise to help you optimise your 
                use of sensors. Unlike other data-science companies, we have genuinely unique tools to enhance the placement of sensors 
                in a network and extract useful information from noisy data sets. 
            </p>
        </div>
    </div>

    <div id="facts-container-outer">
        <div id="facts-container">
            <div class="fact">
                <h1 class="fact__header">
                    £1.5M
                </h1>
                <p class="fact__text">
                    In Total Funding from Grants and Investments
                </p>
            </div>
            <div class="fact__divider"></div>
            <div class="fact">
                <h1 class="fact__header">
                    30+ Years
                </h1>
                <p class="fact__text">
                    Years of Hands-On Experience in Data Science
                </p>
            </div>
            <div class="fact__divider"></div>
            <div class="fact">
                <h1 class="fact__header">
                    3x Growth
                </h1>
                <p class="fact__text">
                    Of our Data Science Team in the Past Year
                </p>
            </div>
            <div class="fact__divider"></div>
            <div class="fact">
                <h1 class="fact__header">
                    100%
                </h1>
                <p class="fact__text">
                    Of our Data Scientists are Postdoctoral Research Physicists
                </p>
            </div>
        </div>
    </div>

    <div id="strengths-container">
        <div class="strength">
            <img src="images/icons/filter.png" alt="filter.png" class="strength__image">
            <div class="strength__info-container">
                <h3 class="strength__header">Dependable Data Even if Noisy or Incomplete</h3>
                <p class="strength__text">Data collection is often the most resource-intensive part of the process of engaging with machine learning. PolyChord can handle “dirty” or even incomplete data sets without any lengthy preparation periods, allowing you to leverage the value of your existing datasets.</p>
            </div>
        </div>
        <div class="strength__divider"></div>
        <div class="strength">
            <img src="images/icons/percent.svg" alt="percent.png" class="strength__image">
            <div class="strength__info-container">
                <h3 class="strength__header">Quantitative, Reliable Computations</h3>
                <p class="strength__text">PolyChord gives you concrete percentages stating “how good” the solution it has created is. These calculations are done simultaneously with the solutions, and are vital in many applications where safety regulations are paramount. In Machine Learning or Neural Networks, you never have any certainty how good those answers are. This is a key strength for PolyChord.</p>
            </div>
        </div>
        <div class="strength__divider"></div>
        <div class="strength">
            <img src="images/icons/gears.png" alt="hears.png" class="strength__image">
            <div class="strength__info-container">
                <h3 class="strength__header">Maximally informative</h3>
                <p class="strength__text">Unlike other sampling tools, PolyChord does not require tuning. PolyChord effectively maps the entire “data landscape” in a single run, as opposed to doing many short, random, and incomplete explorations of the landscape (like other tools). This makes it more a comprehensive, concrete sampling of a data landscape.</p>
            </div>
        </div>
    </div>
<?php
    require_once('parts/footer.php');
?>