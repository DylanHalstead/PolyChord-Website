    <footer>
        <div class="footer-container">
            <div class="footer__socials-container">
                <a href="https://twitter.com/polychordcouk" target="_blank" class="social__link" rel="noopener noreferrer">
                    <img src="images/icons/twitter.png" alt="twitter.png" class="social__img">
                </a>
                <a href="https://www.linkedin.com/company/polychord-ltd/" target="_blank" class="social__link" rel="noopener noreferrer ">
                    <img src="images/icons/linkedin.png" alt="linkedin.png" class="social__img">
                </a>
                <a href="https://www.youtube.com/channel/UCeTdzBWCAklZFQk9dv-XrnQ" target="_blank" class="social__link" rel="noopener noreferrer ">
                    <img src="images/icons/youtube.png" alt="youtube.png" class="social__img">
                </a>
            </div>
            <div class="footer__info-container">
                <a href="privacy-policy.html" class="footer__text-link">
                    <p class="footer__text">Privacy Policy</p>
                </a>
                <div class="footer__bullet"></div>
                <p class="footer__text">©2022 PolyChord Ltd</p>
                <div class="footer__bullet"></div>
                <a href="contact.html" class="footer__text-link">
                    <p class="footer__text">Contact Page</p>
                </a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
    <script src="js/carousel.js"></script>
    <script>
        function updatemenu() {
        if (document.getElementById('responsive-menu').checked == true) {
            document.getElementById('menu').style.borderBottomRightRadius = '0';
            document.getElementById('menu').style.borderBottomLeftRadius = '0';
        }else{
            document.getElementById('menu').style.borderRadius = '10px';
        }
        }
    </script>
</body>
</html>