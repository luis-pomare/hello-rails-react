class GreetingController < ApplicationController
  def index
    greetings = Comment.all
    @greeting = greetings.sample
    respond_to do |format|
      format.json { render json: @greeting }
    end
  end
end
