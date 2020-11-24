<!DOCTYPE html>
<html lang="fr">

<!-- _______________________ HEAD _______________________ -->

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Céline Quevilly</title>

        <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700" rel="stylesheet">
        <!-- <link rel="stylesheet" href="scss/include/logo.css"> -->
        <link rel="stylesheet" href="scss/page/home.css">
        <!-- <link rel="stylesheet" href="scss/page/page.css"> -->
        <!-- <link rel="stylesheet" href="scss/nav/nav-burger.css"> -->
        
        <?php include('include/favicon.php'); ?>

    </head>

<!-- _______________________ BODY _______________________ -->

    <body>

    <!-- ______________________________________________ -->

        <!-- ********* NavBar ********* -->

        <?php include('nav/nav-burger.php'); ?>

        <!--  ********* Navigation Home *********  -->

        <div id="navBar-home">

            <div class="nav-home gray highlightTextIn">

                <a href="about.php" class="animated stock delayfast fadeInDown" 
                alt="PARCOURS">
                    PARCOURS
                </a>

                <a href="portfolio.php" class="animated stock delayfast fadeInDown" 
                alt="PORTFOLIO">
                    PORTFOLIO
                </a>
                
                <a href="src/cv-celine-2020_small.pdf" class="animated stock delayfast fadeInDown" 
                alt="TÉLÉCHARGER CV">
                    TÉLÉCHARGER CV
                </a>

                <!-- <a href="about.php" class="animated stock delayfast fadeInDown" 
                alt="GESTION DE PROJET">
                    GESTION DE PROJET
                </a>

                <a href="about.php" class="animated stock delayfast fadeInDown" 
                alt="WEB">
                    WEB
                </a>

                <a href="about.php" class="animated stock delayfast fadeInDown" 
                alt="COMMUNICATION">
                    COMMUNICATION
                </a>

                <a href="portfolio.php" class="animated stock delayfast fadeInDown" 
                alt="GRAPHISME">
                    GRAPHISME
                </a>
                
                <a href="about.php" class="animated stock delayfast fadeInDown" 
                alt="EVENEMENTIEL">
                    EVENEMENTIEL
                </a> -->

            </div>

        </div>

    <!-- End NavBar -->

    <!-- ______________________________________________ -->  

        <!-- ********* Header ********* -->

        <header class="front">

            <!-- ********* Image Background ********* -->

            <div class="img-front animated slow delaystock fadeIn"></div>

        <!-- ______________________________________________ -->  

            <!-- ********* LOGO ********* -->

            <div class="prez" id="prez-home">

                <?php include('include/logo.php'); ?>
                
            </div> <!-- .prez -->

        <!-- ______________________________________________ -->  

        </header> <!-- End Header -->

    <!-- ______________________________________________ -->


	<!-- ****************** BODY ****************** -->

    </body>

    <script src="js/jquery.min.js"></script>
    <script src="js/nav-burger.js"></script>


</html>