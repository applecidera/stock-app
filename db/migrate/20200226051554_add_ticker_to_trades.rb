class AddTickerToTrades < ActiveRecord::Migration[6.0]
  def change
    add_column :trades, :ticker, :string
  end
end
