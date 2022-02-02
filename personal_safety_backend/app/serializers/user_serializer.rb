class UserSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :email
  has_many :checkins, dependent: :destroy
end
