<?php

namespace App\Services;

use Spiral\GRPC\ContextInterface;
use Ping\PingServiceInterface;
use Ping\PingRequest;
use Ping\PingResponse;

class PingService implements PingServiceInterface
{
    public function Ping(ContextInterface $ctx, PingRequest $in): PingResponse
    {
        $response = new PingResponse();
        $response->setMessage($in->getMessage()); 
        return $response;
    }
}