class EmergencyMailer < ApplicationMailer
  def new_emergency_email
    @user = params[:user]

    @user.emergency_contacts.each do |contact|
      mail(to: contact[:email], subject: "Emergency!!!")
    end
  end
end
