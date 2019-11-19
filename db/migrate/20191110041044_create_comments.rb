class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t| #commentsテーブルの作成
      t.string :comment, null: false
      t.references :group, foreign_key: true #外部キーの指定
      t.references :users, foreign_key: true
      t.timestamps null: false
    end
  end
end
