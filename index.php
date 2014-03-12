<?php 
$_GET['link'] = urlencode('http://detail.tmall.com/item.htm?spm=a230r.1.14.4.z45bcC&id=13606290858&ad_id=&am_id=&cm_id=140105335569ed55e27b&pm_id=');
$link = urldecode($_GET['link']);
if(!empty($link)){
	$url = parse_url($link);
	if(preg_match("/.+\.tmall|taobao\.com$/i", $url['host'])){
		$result = exec('casperjs getTbkLink.js "' . urlencode($link) . '"');
		header('Location: ' . $result);
	}
}
