<?php
error_reporting(0);
session_start();
date_default_timezone_set('PRC');
define('KEY','2bebb1'); 
define('BASE_PATH',str_replace('\\','/',dirname(__FILE__))."/");
define('ROOT_PATH',str_replace('app/class/','',BASE_PATH));
define('DB',ROOT_PATH.'app/db/ac6d8bf4a274.db');
/*installed*/