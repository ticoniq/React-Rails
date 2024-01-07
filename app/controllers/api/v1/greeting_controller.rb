class Api::V1::GreetingController < ApplicationController
  def random_greeting
    @random_greeting = Greeting.order('RANDOM()').first
    render json: { message: @random_greeting.message }
  end
end
