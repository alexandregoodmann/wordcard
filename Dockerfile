FROM nginx:alpine
COPY dist/wordcard/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
