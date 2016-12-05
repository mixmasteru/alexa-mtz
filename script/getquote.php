<?php
$url = "https://de.wikiquote.org/w/api.php?action=query&prop=extracts&format=json&explaintext=&exsectionformat=plain&redirects=&titles=Mark_Twain";
$json = file_get_contents($url);
$data = json_decode($json,true);

echo $data['query']['pages'][72]['extract'];
