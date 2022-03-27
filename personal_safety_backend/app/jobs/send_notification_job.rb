class SendNotificationJob < ApplicationJob
  queue_as :default

  def perform(user)
    NotificationService.new.send_notification(user.token)
  end
end
