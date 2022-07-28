#!/bin/bash

# 특정 패키지만 업데이트: https://stackoverflow.com/a/16740711
composer update package/name:{version}

# 경로 지정
composer install --working-dir=/home/someuser/myproject

composer update --working-dir=/path/to/IdeaProjects/service/directory package/name:dev-branch