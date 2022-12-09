class ApplicationController < ActionController::Base
  include ActionController::Cookies

  before_action :authorized

  def authorized
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end
  
end
