class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]

    def index
        @user = User.first
        render json: @user
    end


    def create
        user = User.create({
            :first_name => user_params[:firstName].capitalize,
            :last_name => user_params[:lastName].capitalize,
            :username=> user_params[:email],
            :password => user_params[:password],
            :account_type => user_params[:accountType]
        })

        if user.valid?
            payload = {user_id: user.id}
            token = issue_token(payload)
            render json: {user: user, token: token}
        else
            render json: {errors: user.errors.full_messages}
        end
        
    end

    private
    
    def user_params
        params.permit(
            :firstName,
            :lastName,
            :email,
            :password,
            :accountType,
            :parent_id
        )

    end
end


