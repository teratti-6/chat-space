# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# chat-spaceテーブル定義

## usersテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|unique: true|
|created_at|timestamps|null: false|
|updates_at|timestamps|null: false|
### Association
- has_many :group_mamber
- has_many :comments

## groupsテーブル
|column|Type|Options|
|------|----|-------|
|groups_name|string|null: false|
|created_at|timestamps|null: false|
|updates_at|timestamps|null: false|
### Association
- has_many :group_mamber
- has_many :comments

## group_mamberテーブル
|column|Type|Options|
|------|----|-------|
|group_id|references|foreign_key|
|users_id|references|foreign_key|
|created_at|timestamps|null: false|
|updates_at|timestamps|null: false|
### Association
- belongs_to :groups
- belongs_to  :users

## commentsテーブル
|column|Type|Options|
|------|----|-------|
|comment|string|null: false|
|group_id|references|foreign_key|
|users_id|references|foreign_key|
|created_at|timestamps|null: false|
|updates_at|timestamps|null: false|
### Association
- has_many :groups
- has_many :users
