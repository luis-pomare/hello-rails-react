# ROR class
class GreetingController < ApplicationController
  def greetings_endpoint
    greetings = Comment.all
    @greeting = greetings.sample
    respond_to do |format|
      format.json { render json: @greeting }
    end
  end
end
