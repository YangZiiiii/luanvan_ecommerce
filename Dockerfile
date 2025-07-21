# Sử dụng Nginx Alpine (nhẹ và nhanh)
FROM nginx:alpine

# Xoá trang mặc định của Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ website tĩnh vào thư mục phục vụ của Nginx
COPY . /usr/share/nginx/html

# Expose cổng 80 để truy cập web
EXPOSE 80
