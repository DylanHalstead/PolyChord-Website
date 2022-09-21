<?php
    require_once('parts/head.php');
    require_once('parts/menu.php');
?>
    <div class="header-container">
        <h1 class="header__text">PolyTrack</h1>
        <img src="images/headers/polytrack-header.jpg" alt="polytrack-header.jpg" class="header__background">
    </div>

    <div class="intro-container">
        <h2 class="intro__title">What is PolyTrack?</h2>
        <p class="intro__text">
            PolyTrack is a maintenance tool for train/tram operators, using bogie-mounted sensor technology aboard passenger vehicles 
            to analyse track health. This technology is currently in use on West Midlands Metro trams.
        </p>
    </div>

    <div class="polytrack-train-container">
        <div class="polytrack-train__image-container">
            <div class="polytrack-train__image__legend">
                <span class="polytrack-train__image__legend__sensor" id="polytrack-vis__image__sensor-1"></span>
                <p class="polytrack-train__image__legend__text">
                    Sensors to Measure Vibration, Shift, and Yaw
                </p>
            </div>
            <div class="polytrack-train__image__vis-container">
                <img src="images/icons/train-side.png" alt="train-side.png" class="polytrack-vis__image__train">
            </div>
        </div>
        <div class="polytrack-train__info-container">
            <p class="polytrack-train__info__text">
                PolyChord analyses sensor data to supply maintenance crews with actionable information on the health of the track, 
                enabling targeted maintenance strategies which reduce down-time of service and overall maintenance costs. Using cutting-edge 
                data science, PolyTrack creates an app of likely areas of damage or increased risk, which can be accessed by maintenance 
                crews on a regular smartphone. This enables targeted maintenance, replacing laborious and hazardous manual checking of the 
                full track and the potentially detrimental 'blanket' maintenance with tamping machines.
            </p>
        </div>
    </div>

    <div class="polytrack-filtering-container">
        <div class="polytrack-filtering__image-container">
            <img src="images/graphs/polytrack-filtering.png" alt="placeholder.png" class="polytrack-filtering__image">
            <p class="img-description">PolyTrack Computing Accelerometer Outiers</p>
        </div>
        <div class="polytrack-filtering__info">
            <h2 class="polytrack-filtering__title">Filtering Out The Noise</h2>
            <p class="polytrack-filtering__text">
                Bogie-mounted sensors collect useful, but messy data. PolyChord explores the data landscape to make judgements about 
                the surface and texture of the rail infrastructure. These judgements are then compared against the “real-world” physical 
                geometry of the rail. Using time-series data mapping, PolyChord computes this data to make judgements about where similar 
                faults will occur in the future.
            </p>
        </div>
    </div>

    <div class="outro-container">
        <h2 class="outro__title">Real-Time Maintenance</h2>
        <p class="outro__text">
            Using 5G technology from Comera and British Telecom, the aim of this project is to give near real-time information on the health 
            of the track, reducing downtime of service, use of expensive equipment, and the manual intervention necessary in more traditional 
            track maintenance methods.
        </p>
        <p class="outro__text">
            We are currently seeking a commercial partner in the rail industry, to adjust PolyTrack to be suitable for use on traintracks as 
            well as trams. To learn more, head to our <a href="contact.php" class="link">contact us</a> page and shoot us a message for more 
            details.
        </p>
    </div>
<?php
    require_once('parts/footer.php');
?>