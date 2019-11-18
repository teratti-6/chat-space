class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t| #usersテーブルの作成
      t.string :name, null: false #usersテーブルのカラム
      t.string :email, null: false
      t.string :password, unique: true
      t.timestamps null: false
    end
  end
end
