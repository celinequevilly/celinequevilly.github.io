<!DOCTYPE html>
<html lang="fr">

<!-- _______________________ HEAD _______________________ -->

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Céline Quevilly</title>
        

        <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700" rel="stylesheet">
        <!-- <link rel="stylesheet" href="scss/base.css">
        <link rel="stylesheet" href="scss/include/logo.css">
        <link rel="stylesheet" href="scss/page/home.css"> -->
        <link rel="stylesheet" href="scss/page/page.css">
        <!-- <link rel="stylesheet" href="scss/nav/nav-burger.css"> -->

        <?php include('include/favicon.php'); ?>

    </head>


<!-- _______________________ BODY _______________________ -->

    <body>

    <!-- ______________________________________________ -->

    <!-- ********* NavBar ********* -->

    <?php include('nav/nav.php'); ?>
    <?php include('nav/nav-burger.php'); ?>

    <!-- End NavBar -->

    <!-- ______________________________________________ -->  

        <!-- ********* Header ********* -->

        <header class="front">

        <!-- ______________________________________________ -->  

            <!-- ********* LOGO ********* -->

            <div class="prez" id="prez-about">

                <?php include('include/logo.php'); ?>

            </div> <!-- .prez -->

        <!-- ______________________________________________ --> 

        </header> <!-- End Header -->

        <!-- ______________________________________________ -->


        <!-- ********* Content ********* -->


        <content class="content">

            <div>  <!-- ********************* -->

                <!-- ********* Nav-dots ********* -->

                <?php include('nav/nav-dots.php'); ?>

                <!-- ********************* -->


                <div id="main" class="main-container">

<!-- _______________________ SLIDE01 _______________________ -->

            
                    <article id="slide01" class="slide fs">

                        <!-- <div class="bcg-me animated fadeIn slow delaystock" id="slideshow-me" ></div> -->

                        <div id="slideshow-me" class="wrapper">

                            <div class="bcg-me" id="me-one" >
                                <img src="./src/img/me/me-anime3.png">
                            </div>

                            <div class="bcg-me" id="me-two" >
                                <img src="./src/img/me/me-anime4.png">
                            </div>

                            <div class="bcg-me" id="me-three" >
                                <img src="./src/img/me/me-anime1.png">
                            </div>

                            <div class="bcg-me" id="me-four" >
                                <img src="./src/img/me/me-anime2.png">
                            </div>
                    
                        </div> <!-- .wrapper -->

                    </article> <!-- article -->
                
<!-- ______________________________________________ -->

                </div> <!-- #main -->


<!-- _______________________ SLIDE02 _______________________ -->


                <article id="cb02" class="content-block">
                    <div class="wrapper">
                    
                    </div> <!-- .wrapper -->
                </article> <!-- article -->

                <article id="slide02" class="slide fs">

                    <div class="bcg"></div>
                    <div class="wrapper">

<!-- _______________________________________________________ -->

                        <div class="section" id="about-me">

                            <h1 class="">
                                À PROPOS
                            </h1>
                            <p class="line" id="">
                                _____
                            </p>
                            <p class="info" id="about-info">
                                Je suis beaucoup moins sage que mon image.
                            </p>

                        <!-- ********* -->

                            <!-- Picto ma vie // temporaire -->
                            <div class="fun" id="about-fun">

                                <div class="part-fun">
                                    <div class="int-photo">
                                        <img src="./src/img/baby.png">
                                    </div>
                                    <div class="int-text">
                                        <p>
                                            5 juillet 1987
                                        </p>
                                    </div>
                                </div> 

                                <div class="part-fun">
                                    <div class="int-photo">
                                        <img src="./src/img/stats.png">
                                    </div>
                                    <div class="int-text">
                                        <p>
                                            5 ans d'expérience
                                        </p>
                                    </div>
                                </div>  

                                <div class="part-fun">
                                    <div class="int-photo">
                                        <img src="./src/img/medal.png">
                                    </div>
                                    <div class="int-text">
                                        <p>
                                            Niveau 6 (Bac+4)
                                        </p>
                                    </div>
                                </div> 

                            </div>  <!-- .fun -->

                        <!-- ********* -->

                            <div class="" id="about-content">
                            
                                <p id="about-text" class="">
                                    Geek de la première heure, je suis passionnée par tout l'univers digital, mes compétences 'touche à tout' dans ce domaine sont mon point fort. Je suis aussi à l’aise avec les clients que derrière un écran. Toujours à la recherche de nouveaux challenges, je recherche actuellement une opportunité professionnelle dans laquelle je pourrais m'épanouir autant techniquement qu'humainement.
                                </p>
                            </div>
                        
                        <!-- ********* -->


                        </div> <!-- .section -->

<!-- _______________________________________________________ -->

                    
                    </div> <!-- .wrapper -->
                </article> <!-- article -->

<!-- _______________________________________________________ -->

<!-- _______________________ SLIDE03 _______________________ -->


                <article id="cb03" class="content-block">
                    <div class="wrapper">
                        
                    </div> <!-- .wrapper -->
                </article> <!-- article -->

                <article id="slide03" class="slide fs">
                    <div class="bcg"></div>
                    <div class="wrapper">

<!-- _______________________________________________________ -->


                    <div class="section" id="work">

                        <h1 class="">
                            PARCOUR PROFESSIONNEL
                        </h1>
                        <p class="line" id="">
                            _____
                        </p>
                        <p class="info" id="work-info">
                            Je ne parlerai qu'en présence d'un recruteur.
                        </p>

                    </div> <!-- .section -->

                <!-- ********* Work Columns ********* -->

                    <div id="line-work">

                    <!-- ********* One ********* -->
                        
                        <div class="column" id="elements-one">

                            <?php include('about/experience-left.php'); ?> 
                          
                        </div>
                        
                <!-- ********* Line ********* -->
                        
                        <div class="line-element">
                        
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>

                        </div>
                        
                <!-- ********* Two ********* -->
                        
                        <div class="column" id="elements-two">

                              <?php include('about/experience-right.php'); ?>   

                        </div>

                    </div>

<!-- _______________________________________________________ -->

                <!-- ********* Work Mobil Columns ********* -->

                    <div class="line-degree">

                    <!-- ********* Line ********* -->
                        
                        <div class="line-element">
                            
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div> 
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div> 
                            <div class="line-time"></div>
                            <div class="line-time"></div>                          

                        </div>
                    
            <!-- ********* Column ********* -->
                    
                        <div id="elements-work-mobil">

                           <?php include('about/experience-mobil.php'); ?> 
                      
                        </div>

                    </div>

                    <!-- </div> -->

<!-- _______________________________________________________ -->


                <?php include('about/ref.php'); ?>

<!-- _______________________________________________________ -->
                    
                </div> <!-- .wrapper -->
            </article>

<!-- _______________________________________________________ -->



<!-- _______________________ SLIDE05 _______________________ -->


            <article id="cb04" class="content-block">
                <div class="wrapper">
                    
                </div> <!-- .wrapper -->
            </article>

            <article id="slide04" class="slide fs">
                <div class="bcg"></div>
                <div class="wrapper">

<!-- _______________________________________________________ -->


                    <div class="section" id="school">

                        <h1 class="">EDUCATION</h1>
                        <p class="line" id="">_____</p>
                        <p class="info" id="school-info">Il y a bien longtemps, dans une jeunesse lointaine...</p>

                    </div>

<!-- _______________________________________________________ -->

                <!-- ********* Education Columns ********* -->

                    <div class="line-degree">

                    <!-- ********* Line ********* -->
                        
                        <div class="line-element">
        
                            <div class="line-time"></div>
                            <div class="round-time"></div> 
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>
                            <div class="line-time"></div>
                            <div class="round-time"></div>
                            <div class="line-time"></div>                            

                        </div>
                    
            <!-- ********* Two ********* -->
                    
                        <div id="elements-degree">

                            <div class="degree">
                    
                                <div class="deg-logo" id="">
                                    <div class="deg-header">
                                        <div class="deg-date left">
                                            <p>- 2015 / 2017 -</p>
                                            <div class="img-degree">
                                                <img src="./src/img/medal.png">
                                            </div>
                                        </div>
                                        <div  class="deg-title">
                                            <p>Master - Chef de projet Web</p>
                                        </div>
                                        <div class="deg-boss">
                                            <p>Chef de projet Web / SEO / Développeur Web / Webdesigner / Community manager</p>
                                        </div>
                                    </div>
                                </div>
                          
                                <p class="deg-text">Institut F2i - Paris - France</p>
                      
                            </div>

                            <div class="degree">
                    
                                <div class="deg-logo" id="">
                                    <div class="deg-header">
                                        <div class="deg-date left">
                                            <p>- 2014 / 2015 -</p>
                                            <div class="img-degree">
                                                <!-- <img src="./src/img/medal.png"> -->
                                            </div>
                                        </div>
                                        <div  class="deg-title">
                                            <p>Certification - Développeur Web</p>
                                        </div>
                                        <div class="deg-boss">
                                            <p>Développeur front-end junior / Intégrateur web</p>
                                        </div>
                                    </div>
                                </div>
                          
                                <p class="deg-text">OC - OpenClassRoom  - Digital School</p>
                      
                            </div>

                            <div class="degree">
                    
                                <div class="deg-logo" id="">
                                    <div class="deg-header">
                                        <div class="deg-date left">
                                            <p>- 2011 / 2012 -</p>
                                            <div class="img-degree">
                                                <img src="./src/img/medal.png">
                                            </div>
                                        </div>
                                        <div  class="deg-title">
                                            <p>Licence professionnelle - Création et gestion multimédia</p>
                                        </div>
                                        <div class="deg-boss">
                                            <p>Production et manager de base de données numérique multimédia</p>
                                        </div>
                                    </div>
                                </div>
                          
                                <p class="deg-text">IUT Michel de Montaigne - Bordeaux - France</p>
                      
                                    </div>

                                    <div class="degree">
                    
                                        <div class="deg-logo" id="">
                                            <div class="deg-header">
                                                <div class="deg-date left">
                                                    <p>
                                                        - 2007 / 2010 -
                                                    </p>
                                                    <div class="img-degree">
                                                        <img src="./src/img/medal.png">
                                                    </div>
                                                </div>
                                                <div  class="deg-title">
                                                    <p>
                                                        DNAT - Dîplome national des Arts Techniques
                                                    </p>
                                                </div>
                                                <div class="deg-boss">
                                                    <p>
                                                        Graphiste / Webdesigner / Directeur Artistique
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                          
                                        <p class="deg-text">
                                            ESAM - Ecole Supérieur des Arts et Médias de Caen - France
                                        </p>
                      
                                    </div>

                      
                                </div>

                            </div>

                        <!-- </div> -->
                    
                        </div> <!-- .wrapper -->
                    </article>

<!-- _______________________________________________________ -->

<!-- _______________________ SLIDE06 _______________________ -->

                    <article id="cb05" class="content-block">
                        <div class="wrapper">
                    
                        </div> <!-- .wrapper -->
                    </article>

                    <article id="slide05" class="slide fs">
                        <div class="bcg"></div>
                        <div class="wrapper">

<!-- _______________________________________________________ -->

                            <div class="section" id="interests">

                                <h1 class="">
                                    intérêts
                                </h1>
                                <p class="line" id="">
                                    _____
                                </p>
                                <p class="info" id="interests-info">
                                    "Le gras c'est la vie!"
                                </p>

<!-- _______________________________________________________ -->

                                <div class="fun">

                                    <div class="interest">
                                        <div class="int-photo">
                                            <img src="./src/img/interest/plane.png">
                                        </div>
                                        <div class="int-text">
                                            <p>
                                                Voyage
                                            </p>
                                        </div>
                                    </div> 

                                    <div class="interest">
                                        <div class="int-photo">
                                            <img src="./src/img/interest/camera.png">
                                        </div>
                                        <div class="int-text">
                                            <p>
                                                Photographie
                                            </p>
                                        </div>
                                    </div>  

                                    <div class="interest">
                                        <div class="int-photo">
                                            <img src="./src/img/interest/confetti.png">
                                        </div>
                                        <div class="int-text">
                                            <p>
                                                Humour
                                            </p>
                                        </div>
                                    </div> 

                                    <div class="interest">
                                        <div class="int-photo">
                                            <img src="./src/img/interest/camera.png">
                                        </div>
                                        <div class="int-text">
                                            <p>
                                                Vidéo
                                            </p>
                                        </div>
                                    </div> 

                                    <div class="interest">
                                        <div class="int-photo">
                                            <img src="./src/img/interest/pet.png">
                                        </div>
                                        <div class="int-text">
                                            <p>
                                                Animaux
                                            </p>
                                        </div>
                                    </div> 

                                    <div class="interest">
                                        <div class="int-photo">
                                            <img src="./src/img/interest/mario.png">
                                        </div>
                                        <div class="int-text">
                                            <p>
                                                Gaming
                                            </p>
                                        </div>
                                    </div>   

                                </div>

                            </div>

<!-- _______________________________________________________ -->

                        </div> <!-- .wrapper -->

                    </article> <!-- article -->

<!-- _______________________________________________________ -->


                </div> <!-- #main-container -->

                <?php include('include/footer.php'); ?>

                
            </div> <!-- #main-container -->
          
        </content> <!-- content -->

<!-- _______________________________________________________ -->

        <script src="js/jquery.min.js"></script>
        <script src="js/script.js"></script>
        <script src="js/nav-burger.js"></script>

<!-- _______________________________________________________ -->

    </body>  <!-- ****************** BODY ****************** -->

<!-- _______________________________________________________ -->

</html>

<!-- _______________________________________________________ -->