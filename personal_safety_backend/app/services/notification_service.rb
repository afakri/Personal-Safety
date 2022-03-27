class NotificationService
  require "faraday"
  require "faraday/net_http"
  Faraday.default_adapter = :net_http

  def send_notification(token)
    conn = Faraday.new
    res = conn.post("https://exp.host/--/api/v2/push/send",
                    {
      "to" => "#{token}",
      "sound" => "default",
      "title" => "Check in",
      "body" => "It's time to check in!",
      "data" => { "someData" => "goes here" },
    }.to_json, {
      "Accept" => "application/json",
      "Accept-encoding" => "gzip, deflate",
      "Content-Type" => "application/json",
    })
  end
end
