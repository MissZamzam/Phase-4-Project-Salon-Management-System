class Removeservicename < ActiveRecord::Migration[7.0]
  def change
    remove_column :appointments, :serviceName, :string

  end
end
