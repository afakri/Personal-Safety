class User < ApplicationRecord
  serialize :emergency_contacts, Array

  # - RELATIONS
  has_many :friendships, dependent: :destroy
  has_many :invitations, dependent: :destroy
  has_many :checkins, dependent: :destroy
  has_many :friends, through: :friendships

  def active_friends
    invitations.select { |invitation| !invitation.friend.eql?(self) }
  end

  def pending_friends
    invitations.select { |invitation| invitation.friend.eql?(self) }
  end

  def is_checked_in
    checkins.select { |checkin| checkin.checkedin == true }
  end
end
