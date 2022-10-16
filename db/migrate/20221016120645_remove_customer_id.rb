class RemoveCustomerId < ActiveRecord::Migration[7.0]
  def change
    remove_column :appointments, :customer_id, :integer
    remove_column :appointments, :service_id, :integer

  end
end
