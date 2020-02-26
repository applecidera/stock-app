
@trades.each do |trade|
  json.set! trade.purchase_date do
    json.partial! 'trade', trade: trade
  end
end