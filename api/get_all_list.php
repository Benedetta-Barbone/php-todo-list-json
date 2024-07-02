<?php

header('Content-Type: application/json');
$todoList = file_get_contents('../db/todo_list.json');
echo $todoList;

?>