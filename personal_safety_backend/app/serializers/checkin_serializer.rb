class CheckinSerializer
  include JSONAPI::Serializer
  attributes :user_id, :checkedin, :days, :delay, :checkin_name
end
