class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :firstName
      t.string :lastName
      t.string :emailAddress
      t.integer :age

      t.timestamps null: false
    end
  end
end
