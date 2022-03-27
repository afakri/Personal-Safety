class ChangeColumnType < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :emergency_contacts, :text, default: [], array: true
  end
end
