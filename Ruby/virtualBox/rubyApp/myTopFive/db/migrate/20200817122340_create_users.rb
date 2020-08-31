class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :passwordConfirmation

      t.timestamps null: false
    end
  end
end
