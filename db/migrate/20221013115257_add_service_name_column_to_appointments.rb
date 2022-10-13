class AddServiceNameColumnToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :serviceName, :string
  end
end
