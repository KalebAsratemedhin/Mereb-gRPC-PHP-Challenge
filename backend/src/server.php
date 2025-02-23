<?php

require 'vendor/autoload.php';

use Spiral\GRPC\Server;
use Spiral\RoadRunner\Worker;
use Spiral\Goridge\StreamRelay;
use App\Services\PingService;

$worker = new Worker(new StreamRelay(STDIN, STDOUT));

$server = new Server();
$server->registerService(\Ping\PingServiceInterface::class, new PingService());

$server->serve($worker);