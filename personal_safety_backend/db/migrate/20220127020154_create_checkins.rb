class CreateCheckins < ActiveRecord::Migration[6.1]
  def change
    create_table :checkins do |t|
      t.integer :user_id
      t.boolean :checkedin
      t.string :days, array: true, default: []
      t.integer :window
      t.integer :delay

      t.timestamps
    end
  end
end
