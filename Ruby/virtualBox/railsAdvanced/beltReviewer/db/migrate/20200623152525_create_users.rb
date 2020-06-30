class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :emailAddress
      t.string :city
      t.string :state
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
