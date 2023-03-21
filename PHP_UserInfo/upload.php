<?php

$uploaddir = 'uploads/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
echo "File is valid, and was successfully uploaded.\n";
} else {
echo "Possible file upload attack!\n";
}

echo 'Here is some more debugging info:';
print_r($_FILES);
?>
You just uploaded this file:
<img src="<?= $uploadfile; ?>" />
<a href="<?= $uploadfile; ?>"><?= basename($_FILES['userfile']['name']); ?></a>