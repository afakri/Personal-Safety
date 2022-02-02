class UpdateCheckinSchema < ActiveRecord::Migration[6.1]
  def change
    add_column :checkins, :checkin_name, :string
  end
end
