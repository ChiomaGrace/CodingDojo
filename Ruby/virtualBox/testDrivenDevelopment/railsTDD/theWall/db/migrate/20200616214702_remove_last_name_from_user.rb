class RemoveLastNameFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :lastName, :string
  end
end
