<?php

declare(strict_types=1);

namespace App\Grpc;

use Ping\PingServiceInterface;
use Spiral\GRPC\ContextInterface;
use Spiral\GRPC\ServiceInterface;
use Ping\PingRequest;
use Ping\PingResponse;

class PingService implements PingServiceInterface, ServiceInterface
{
    public function Ping(ContextInterface $ctx, PingRequest $request): PingResponse
    {
        $reply = new PingResponse();
        $reply->setMessage($request->getMessage());

        return $reply;
    }
}
