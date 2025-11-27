FROM ubuntu:20.04
LABEL author="isaac"

# Install Nginx

RUN apt update -y
RUN apt install -y nginx

WORKDIR /var/www/html
#copiar html
COPY /src /index.html .

#copiar configuracion nginx
COPY /nginx /etc/nginx/sites-available/
