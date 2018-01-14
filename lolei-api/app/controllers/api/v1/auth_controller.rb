class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized
    
    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            token = issue_token({user_id: user.id})
            render json: {
                id: user.id,
                username: user.email,
                token: token
                }
        else
            render json: {error: "Account not found!"}, status: 401
        end
    end


    def show
        if current_user
            render json: {
                id: current_user.id,
                username: current_user.email
                }
        else
            render json: {error: "Invalid token!"}, status: 401
        end
    end
end