<?php
function cipher($ch, $key)
{
	if (!ctype_alpha($ch))
		return $ch;

	$offset = ord(ctype_upper($ch) ? 'A' : 'a');
	return chr(fmod(((ord($ch) + $key) - $offset), 26) + $offset);
}

function encipher($input, $key)
{
	$output = "";

	$inputArr = str_split($input);
	foreach ($inputArr as $ch)
		$output .= Cipher($ch, $key);

	return $output;
}

function decipher($input, $key)
{
	return encipher($input, 26 - $key);
}

$text = "The quick brown fox jumps over the lazy dog";
$cipherText = encipher($text, 3);
$plainText = decipher($cipherText, 3);

// Source: https://www.programmingalgorithms.com/algorithm/caesar-cipher/php/
