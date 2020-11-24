<!DOCTYPE html>
<html lang="fr">

  <!-- ****************** HEAD ****************** -->

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Céline Quevilly</title>

        <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700" rel="stylesheet">
        <!-- <link rel="stylesheet" href="scss/base.css"> -->
        <!-- <link rel="stylesheet" href="scss/page/page.css"> -->
        <!-- <link rel="stylesheet" href="scss/nav/nav-burger.css"> -->
        <link rel="stylesheet" href="scss/page/contact.css">

        <?php include('include/favicon.php'); ?>

    </head>



  <!-- ****************** BODY ****************** -->

    <body>

        <!-- ********* NavBar ********* -->

        <?php include('nav/nav.php'); ?>

        <?php include('nav/nav-burger.php'); ?>

        <!-- End NavBar -->


        <content class="content">

            <div>  <!-- ********************* -->


                <div id="main" class="main-container">

<!-- _______________________________________________________ -->


                    
                    <div id="before"></div>

                    <div class="section">

                        <h1 class="">CONTACTEZ MOI</h1>
                        <p class="" id="line">_____</p>
                        <!-- <p class="" id="port-info"></p> -->
                        <?php include('include/form.php'); ?>
                        
                        <!-- ********* -->


                    </div>                   

<!-- _______________________________________________________ -->


                </div> <!-- #main-container -->

            <?php include('include/footer.php'); ?>
                
            </div>
          
        </content>

<!-- _______________________________________________________ -->


<!-- _______________________________________________________ -->
                    
        <script src="js/jquery.min.js"></script>
        <script src="js/contact.js"></script>
        <script src="js/nav-burger.js"></script>

    </body>

</html>