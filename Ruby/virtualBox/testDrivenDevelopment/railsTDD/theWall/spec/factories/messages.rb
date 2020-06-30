FactoryBot.define do
  factory :message do
    message { "This is a message post." }
    user
  end
end
