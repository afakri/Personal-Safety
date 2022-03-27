class EmergencyMailerPreview < ActionMailer::Preview
  def new_emergency_email
    user = User.new(first_name: "Joe", last_name: "Smith", email: "joe@gmail.com", phone_number: "090-7777-8888", emergency_contacts: [{ email: "test@gmail.com", phone_number: "0636728393" }])

    EmergencyMailer.with(user: user).new_emergency_email
  end
end
