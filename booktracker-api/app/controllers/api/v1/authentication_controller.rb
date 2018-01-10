class Api::V1::AuthenticationController < ApplicationController

    def create
        user = User.find_by(email: params[:username])
        
        if user && user.authenticate(params[:password])
            render json: {
                id: user.id,
                username: user.email
                }
        else
            render json: {error: "Account not found!"}, status: 401
        end
    end


    def show
        if current_user
            user = current_user
            render json: {
                id: current_user.id,
                username: current_user.email
                }
        else
            render json: {error: "Invalid token!"}, status: 401
end
