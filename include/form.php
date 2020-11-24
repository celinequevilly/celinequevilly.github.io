<section id="form">
    <!-- <h1>Contact Me</h1> -->
    
    <div id="contactResponse"></div>
    <div id="errorMessage">Veuillez remplir tous les champs</div>
    
    <form>
        <div class="field-form name-form">
            <input type="text" id="name" placeholder=" ..."/>
            <label for="name">Nom</label>
            <span class="ss-icon">ok</span>
        </div>

        <div class="field-form email-form">
            <input type="text" id="email" placeholder=" ..."/>
            <label for="email">Email</label>
            <span class="ss-icon">ok</span>
        </div>

        <div class="field-form msg-form">
            <textarea id="msg" rows="4" placeholder=" ..."/></textarea>
            <label for="msg">Message</label>
            <span class="ss-icon">ok</span>
        </div>

        <input id="buttonSend" class="button" type="submit" value="Envoyer" />
    </form>

</section>
