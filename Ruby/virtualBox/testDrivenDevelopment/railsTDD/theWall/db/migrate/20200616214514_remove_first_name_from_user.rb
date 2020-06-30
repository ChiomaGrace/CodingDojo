class RemoveFirstNameFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :firstName, :string
  end
end
