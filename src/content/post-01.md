---
title: "Laravel in Subdirectory"
date: "2020-01-26"
draft: false
path: "/blog/laravel-in-subdirectory"
description: "We work through how to put a Laravel application in a subdirectory of another Laravel application in Nginx."
---

In this artical, we work through how to put a Laravel application in a subdirectory of another Laravel application in Nginx.

For example, we may have an application running at `example.org` but need a second application running at `example.org/blog`.

## TL;DR

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/example.org/public;

    index index.html index.htm index.php;

    server_name _;

    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    location /blog {
        alias var/www/blog/public;
        try_files $uri $uri/ @blog;

        location ~ \.php$ {
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $request_filename;
            fastcgi_pass 127.0.0.1:9000;
        }
    }

    location @blog {
        rewrite /blog/(.*)$ /blog/index.php?/$1 last;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_index index.php;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
    }
}
```

## How This Works

Let's cover some details of the above configuration to see what's going on.

## Project Locations

In this example, the application files of the two applications don't actually exist within one another. The application top exists in `/var/www/example.org` while the "blog" application lives in `/var/www/blog`.
