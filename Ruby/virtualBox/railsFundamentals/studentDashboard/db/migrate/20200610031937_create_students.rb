class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.references :dojo, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
