<?php
    require_once('parts/head.php');
    require_once('parts/menu.php');
?>
    <div class="header-container">
        <h1 class="header__text">Contact Us</h1>
        <img src="images/headers/contact-us-header.jpg" alt="contact-us-header.jpg" class="header__background">
    </div>

    <div class="contact-container">
        <div class="contact__info-container">
            <h2 class="contact__info__title">Want to Get in Touch?</h2>
            <p class="contact__info__text">
                Fill out this form giving a brief desciption on what you'd like to discuss and we'll get back to you as soon as possible
            </p>
        </div>
        <div class="form-container">
            <form id="contact-form">
                <div class="contact__form__half-container">
                    <div class="contact__form__container">
                        <label class="contact__form__label" for="form__name">Name</label>
                        <input type="text" class="contact__form__half-field" id="contact__form__name" name="contact__form__name">
                    </div>

                    <div class="contact__form__container">
                        <label class="contact__form__label" for="contact__form__company">Company</label>
                        <input type="text" class="contact__form__half-field" id="contact__form__company" name="contact__form__company">
                    </div>
                </div>

                <div class="contact__form__container">
                    <label class="contact__form__label" for="contact__form__email">Email</label>
                    <input type="text" class="contact__form__field" id="contact__form__email" name="contact__form__email">
                </div>

                <div class="contact__form__container">
                    <label class="contact__form__label" for="contact__form__why-contacting">Why are you getting in touch?</label>
                    <select name="contact__form__why-contacting" id="contact__form__why-contacting">
                        <option value="job">I'm interested in joining the PolyChord team</option>
                        <option value="info">I'd like to get some more information about your products</option>
                        <option value="partnership">I work for a company that's interested in working with you</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="contact__form__container">
                    <label class="contact__form__label" for="contact__form__message">Message</label>
                    <textarea name="contact__form__message" id="contact__form__message" cols="50" rows="10"></textarea>
                </div>

                <div class="g-recaptcha" data-sitekey="6LdugPghAAAAACXLjo_wmuvGr2irAhem898o3Q7Q"></div>

                <button type="submit" class="contact__form__submit">Submit</button>
            </form>
        </div>
    </div>
    <div class="contact-background"></div>
<?php
    require_once('parts/footers.php');
?>