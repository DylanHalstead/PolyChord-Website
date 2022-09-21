<?php
    require_once('parts/head.php');
    require_once('parts/menu.php');
?>
    <div class="header-container">
        <h1 class="header__text">PolyStructure</h1>
        <img src="images/headers/polystructure-header.jpg" alt="polystructure-header.jpg" class="header__background">
    </div>

    <div class="intro-container">
        <h2 class="intro__title">What is PolyStructure?</h2>
        <p class="intro__text">
            <a href="https://accupredict.io/" class="link">AccuPredict</a> and PolyChord Ltd have come together to bring you PolyStructure, a simple, low-cost computed inspection regime using 
            risk analysis based on real-world sensor measurements. Taking AccuPredict's next-level sensors and PolyChord's ability to 
            predict a structure's life span, PolyStructure will supply the operator of an infrastructure with quantitative grounds for the 
            ranking of maintenance strategies and the optimisation of resource allocation.
        </p>
    </div>

    <div class="polystructure-prioritization-container">
        <div class="polystructure-prioritization__image-container">
            <img src="images/logos/accupredict.jpeg" alt="placeholder.png" class="polystructure-prioritization__image">
        </div>
        <div class="polystructure-prioritization__info">
            <h2 class="polystructure-prioritization__title">Prioritise for Your Exact Needs</h2>
            <p class="polystructure-prioritization__text">
                Compared to traditional “judgemental” methods of assessing bridges, PolyStructure is backed by statistical evidence rather 
                than "guessing" the integrity of a bridge/structure. A key strength from this is in PolyStructure's ability to prioritise 
                features when calculating structural integrity. For example, one could give maintenance priority to the assets at the 
                highest risk, reducing insurance costs, reducing costs associated with bridge failures, and optimising the assignment of 
                maintenance budgets.
            </p>
        </div>
    </div>

    <div class="polystructure-confidence-container">
        <div class="polystructure-confidence__info">
            <h2 class="polystructure-confidence__title">Computed Confidence</h2>
            <p class="polystructure-confidence__text">
                PolyStructure compares distributions of direct and indirect measurements and draws confidence levels on the existence of 
                faults and the progression rate of said faults. Together this will provide the operator with confidence levels on the 
                remaining “safe life” of a structure.
            </p>
        </div>
        <div class="polystructure-confidence__image-container">
            <img src="images/graphs/confidence-graph.png" alt="placeholder.png" class="polystructure-confidence__image">
            <p class="img-description-right">Bridge Lifespan Projections</p>
        </div>
    </div>

    <div class="outro-container">
        <h2 class="outro__title">Want to Learn More?</h2>
        <p class="outro__text">
            With a the sensor expertise of AccuPredict and the revolutionary science backing PolyChord's data science, PolyStructure is ready 
            to change the way people inspect structures. To learn more, head to our <a href="contact.php" class="link">contact us</a> page and shoot us 
            a message for more details.
        </p>
    </div>
<?php
    require_once('parts/footers.php');
?>