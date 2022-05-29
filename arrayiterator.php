<?php

$languagesArray = ["Italian", "Russian "French", "Hindi", "Spanish"];
        
$arrObject = new ArrayObject($languagesArray);
$arrayIterator = $arrObject->getIterator();

while( $arrayIterator->valid() )
{
    echo $arrayIterator->current() . "<br />";
    $arrayIterator->next();
}
