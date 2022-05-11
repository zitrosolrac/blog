FROM nginx:alpine
ARG CONTENT_DIR
COPY ${CONTENT_DIR} /usr/share/nginx/html