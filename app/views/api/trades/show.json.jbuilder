json.set! @trade.id do
  json.partial! 'trade', trade: @trade
end