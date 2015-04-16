# Slider Jquery v1.0

Ce plugin vous permettra de faire simplement des sliders entre deux images au survol de la souris.
Vous pouvez également accéder à une démo en ligne sur http://guillaumebriday.fr/demo/Slider.

## Table des matières

* Membre(s)
* Dépendance
* Comment s'en servir
* Informations complémentaires


## Membre(s)

* "Guillaume Briday" <guillaumebriday@gmail.com>

## Dépendance

Le plugin a besoin de Jquery pour fonctionner.

## Comment s'en servir

1. Inclure le css :

    ```html
        <link rel="stylesheet" href="js-slider.min.css">    
    ```
    
2. Inclure Jquery et le plugins:

    ```html
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="js-slider.min.js"></script>
    ```

3. Coller la structure HTML du plugin où vous le souhaitez :

    Vous devrez adapter le lien des images pour y mettre les votres.

    ```html
        <div class="js-slider-container">
            <img src="img/before.jpg" class="js-slider-first" />
            <div class="js-slider-last-container">
                <img src="img/after.jpg" class="js-slider-last">
            </div>
        </div>  
    ```


4. Appelez le plugin en Jquery:

    ```javascript
        (function($){
            $(".js-slider-container").compare();
        })(jQuery);
    ```

    Vous pouvez également rajouter une option : "callback", qui permet de faire revenir automatiquement ou non le slider au milieu lorsque la souris ne survole plus les images. 

    ```javascript
        (function($){
            $(".js-slider-container").compare({
                "callback" : false // default : true
            });
        })(jQuery);
    ```  

## Informations complémentaires

N'hésitez pas à me contacter pour avec des informations complémentaires ou me remonter un bug.
