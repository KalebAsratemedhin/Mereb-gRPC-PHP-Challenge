#!/usr/bin/env php
<?php


use Spiral\GRPC\Server;
use Spiral\Goridge\StreamRelay;
use Spiral\RoadRunner\Worker;
use App\Grpc\PingService;
use Ping\PingServiceInterface;

require __DIR__ . '/../vendor/autoload.php';

$server = new Server(null, [
    'debug' => true,
]);

$server->registerService(PingServiceInterface::class, new PingService());

$worker = new Worker(new StreamRelay(STDIN, STDOUT));
$server->serve($worker);