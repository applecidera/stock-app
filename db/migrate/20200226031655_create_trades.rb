class CreateTrades < ActiveRecord::Migration[6.0]
  def change
    create_table :trades do |t|
      t.datetime :purchase_date, null: false
      t.integer :quantity, null: false
      t.decimal :price, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
