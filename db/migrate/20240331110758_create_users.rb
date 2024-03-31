class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :color
      t.string :car

      t.timestamps
    end
  end
end
