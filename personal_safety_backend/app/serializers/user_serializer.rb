class UserSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :email, :token, :phone_number
  has_many :checkins, dependent: :destroy
end
