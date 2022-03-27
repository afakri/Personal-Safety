class ChangeColumnType2 < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :emergency_contacts, :text
  end
end
