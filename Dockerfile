FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
RUN rm -f /usr/share/nginx/html/50x.html
EXPOSE 80
