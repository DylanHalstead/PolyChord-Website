<?php
    require_once('parts/head.php');
    require_once('parts/menu.php');
?>
    <div class="header-container">
        <h1 class="header__text">MIDAS</h1>
        <img src="images/headers/midas-header.jpg" alt="midas-header.jpg" class="header__background">
    </div>

    <div class="intro-container">
        <h2 class="intro__title">What is MIDAS?</h2>
        <p class="intro__text">
            The placement of sensors in a network is a complex, constantly changing data-science problem. While many think guesswork is a 
            good enough answer, PolyChord thought otherwise. After a 3-year work programme with the UK Ministry of Defence, Polychord has 
            created MIDAS (Maximum Information Deployment Assessment Strategy) - a unique technology that calculates the best placement of 
            transmitters in a network. 
        </p>
    </div>

    <div class="with-midas-container">
        <div>
            <video autoplay muted loop id="with-midas__vis">
                <source src="images/midas/with-without-midas.mp4" type="video/mp4">
            </video>
        </div>
        <div class="with-midas__info">
            <h2 class="with-midas__title typewriter"></h2>
            <p class="with-midas__text">
                You can see the dramatic increase in coverage compared to the too-common strategy of guessing the best placement. 
                Compared to machine learning, a fancier version of guessing, MIDAS also gives you quantitative answers so you know 
                exactly why your placement is best.
            </p>
        </div>
    </div>

    <div class="midas-strengths">
        <div class="midas-strength-container">
            <div>
                <img src="images/midas/robustness-midas.png" alt="robustness-midas.png" class="midas-strength__vis">
            </div>
            <div class="midas-strength__info">
                <h2 class="midas-strength__title">Optimising a Network for "Robustness"</h2>
                <p class="midas-strength__text">
                    If we find an optimal network layout, but most of the coverage comes from a single sensor, the network isn't very 
                    robust, as a failure of that one sensor would massively disrupt the entire network. Instead, it's sometimes better 
                    to design a network that is resistant to individual sensor failures whilst delivering “good enough” coverage.
                </p>
            </div>
        </div> 
        <div class="midas-strength-container">
            <div class="midas-strength__info-right">
                <h2 class="midas-strength__title-right">Built to Fit Your Exact Needs</h2>
                <p class="midas-strength__text-right">
                    With MIDAS, you can choose which parameters are most important for your network layout - e.g. best possible coverage, 
                    the most cost-effective solution, the most “aesthetically pleasing” placement, etc. MIDAS can easily deal with many 
                    complex constraints. 
                </p>
            </div>
            <div>
                <video autoplay muted loop class="midas-strength__vis">
                    <source src="images/midas/increasing-sensors-midas.mp4" type="video/mp4">
                </video>
            </div>
        </div> 
        <div class="midas-strength-container midas-strength-container-final">
            <div>
                <video autoplay muted loop class="midas-strength__vis">
                    <source src="images/midas/constraints-midas.mp4" type="video/mp4">
                </video>
            </div>
            <div class="midas-strength__info">
                <h2 class="midas-strength__title">Multiparametric & Flexible</h2>
                <p class="midas-strength__text">
                    MIDAS can also easily deal with several complex constraints. For example, there might be a building in the area upon 
                    which we cannot place a transmitter. MIDAS can easily adjust and get the best possible outcome, without needing to 
                    recalculate the entire solution.
                </p>
            </div>
        </div> 
    </div>

    <div class="outro-container">
        <h2 class="outro__title">Want to Learn More?</h2>
        <p class="outro__text">
            This is just the tip of the iceberg for what MIDAS can do. From optimising the local wireless network in a business to 
            optimising the locations of 5G masts in a large city, MIDAS is a vast, wide-ranging piece of software practical for an 
            amplitude of telecommunication scenarios. To learn more, head to our <a href="contact.php" class="link">contact us</a> 
            page and shoot us a message for more details.
        </p>
    </div>
<?php
    require_once('parts/footers.php');
?>