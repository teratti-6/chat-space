class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t| #groupsテーブルの作成
      t.string :group_name, null: false #groupテーブルのカラム
      t.timestamps null: false
    end
  end
end
