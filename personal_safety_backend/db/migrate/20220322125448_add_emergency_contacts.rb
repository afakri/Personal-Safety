class AddEmergencyContacts < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :emergency_contacts, :string, default: [], array: true
  end
end
