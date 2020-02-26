
@trades.each do |trade|
  json.set! trade.date do
    json.partial! 'trade', trade: trade
  end
end