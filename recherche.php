<?php

    $nom = $_GET["nom"];

    $db = new PDO('mysql:host=127.0.0.1;dbname=classicmodels', 'root', '');
 $sql="SELECT * FROM customers WHERE customerName  LIKE '%".$nom."%'";
    $requeteSelection = $db->query($sql);

    $clients = $requeteSelection->fetchAll();
   
 //   var_dump($_POST);
//    var_dump($_REQUEST);
    $nombre = count($clients);
     '<h1> ' .$nombre .'</h1>';
 //   echo $clients;

function ret() {
    
global $clients;
return $clients;

}
var_dump(ret());
 

 die();

    