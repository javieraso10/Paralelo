Feature: demo cucumber

    Demo de como utilizar

    # Scenario: Demo de cucumber
    # Given abrir el navegador
    # When Cargando el nombre rodrigo
    # When cargando el email
    # And cargando la direccion
    # Then validamos el nombre de la pagina

    
    Scenario Outline: Scenario Outline name: Demo de cucumber
    Given abrir el navegador
    When Cargando el nombre <name>
    When cargando el email <email>
    And cargando la direccion
    Then validamos el nombre de la pagina

    Examples:
        | name | email |
        | juan  | juan@gmail.com  |
        | pablo  | pablo@gmail.com  |
        | raul  | raul@gmail.com  |