class UserSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :email, :token, :phone_number, :emergency_contacts
  has_many :checkins, dependent: :destroy
end
