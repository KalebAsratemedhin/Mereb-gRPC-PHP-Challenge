FROM ubuntu:noble-20250127

RUN apt-get update && apt-get install -y \
    software-properties-common \
    curl \
    git \
    zip \
    unzip \
    && add-apt-repository ppa:ondrej/php \
    && apt-get update \
    && apt-get install -y \
    php8.3-cli \
    php8.3-zip \
    php8.3-xml \
    php8.3-mbstring \
    php8.3-curl \
    && rm -rf /var/lib/apt/lists/*



WORKDIR /app

RUN curl -L -o rr-grpc.tar.gz https://github.com/spiral-modules/php-grpc/releases/download/v1.6.0/rr-grpc-1.6.0-linux-amd64.tar.gz \
    && tar -xvzf rr-grpc.tar.gz \
    && mv rr-grpc-1.6.0-linux-amd64/rr-grpc /usr/local/bin/ \
    && rm -rf rr-grpc-1.6.0-linux-amd64 rr-grpc.tar.gz \
    && chmod +x /usr/local/bin/rr-grpc

COPY . .

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer 

RUN composer install && composer update


CMD ["/usr/local/bin/rr-grpc", "serve", "-v", "-d"]
