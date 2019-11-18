class CreateGroupMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_member do |t| #group_memberテーブルの作成
      t.references :group, foreign_key: true #外部キーの指定
      t.references :users, foreign_key: true
      t.timestamps null: false
    end
  end
end
