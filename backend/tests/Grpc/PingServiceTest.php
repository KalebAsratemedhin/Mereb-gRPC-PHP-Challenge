<?php

declare(strict_types=1);

namespace Tests\Grpc;

use PHPUnit\Framework\TestCase;
use App\Grpc\PingService;
use Ping\PingRequest;
use Ping\PingResponse;
use Spiral\GRPC\ContextInterface;

class PingServiceTest extends TestCase
{
    public function testPingReturnsExpectedResponse(): void
    {
        $service = new PingService();
        
        $request = new PingRequest();
        $request->setMessage('Hello, gRPC!');
        
        $context = $this->createMock(ContextInterface::class);
        
        $response = $service->Ping($context, $request);
        
        $this->assertInstanceOf(PingResponse::class, $response);
        $this->assertEquals('Hello, gRPC!', $response->getMessage());
    }
}
