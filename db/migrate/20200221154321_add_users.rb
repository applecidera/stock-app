class AddUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string  :name, null: false
      t.string  :email, null: false, unique: true
      t.string  :password_digest, null: false, unique: true
      t.string  :session_token, null: false, unique: true
      t.timestamps
    end
    add_index   :users, [:email, :id]
  end
end
