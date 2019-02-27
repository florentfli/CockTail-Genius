<?php
/**
 * Created by PhpStorm.
 * User: josephazar
 * Date: 2/3/19
 * Time: 11:20 PM
 */
header('Content-Type: application/json');
if (isset($_GET["i"])){
    try{
        // Initialize CURL:
        $ch = curl_init("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" .$_GET["i"]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Store the data:
        $json = curl_exec($ch);
        curl_close($ch);

        // Decode JSON response:
        $api_result = json_decode($json, true);

        // Output the "capital" object inside "location"
        echo $json;
    }catch(Exception $error){
        echo $error->getMessage();
    }

}
if (isset($_GET["c"])){
    try{
        // Initialize CURL:
        $ch = curl_init("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" .$_GET["c"]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Store the data:
        $json = curl_exec($ch);
        curl_close($ch);

        // Decode JSON response:
        $api_result = json_decode($json, true);

        // Output the "capital" object inside "location"
        echo $json;
    }catch(Exception $error){
        echo $error->getMessage();
    }

}
if (isset($_GET["a"])){
    try{
        // Initialize CURL:
        $ch = curl_init("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" .$_GET["a"]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Store the data:
        $json = curl_exec($ch);
        curl_close($ch);

        // Decode JSON response:
        $api_result = json_decode($json, true);

        // Output the "capital" object inside "location"
        echo $json;
    }catch(Exception $error){
        echo $error->getMessage();
    }

}