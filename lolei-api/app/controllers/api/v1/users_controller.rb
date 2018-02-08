class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def index
        @user = User.first
        render json: @user
    end


    def create
        user = User.create({
            
            :first_name => user_params[:firstName].capitalize,
            :last_name => user_params[:lastName].capitalize,
            :username=> user_params[:username],
            :password => user_params[:password],
            :account_type => user_params[:accountType],
            :parent_id => user_params[:parentId]
        })
        
        if user.valid? && user.child?
            render json: {user: UserSerializer.new(current_user)}          
        elsif user.valid? && user.parent?
            payload = {user_id: user.id}
            token = issue_token(payload)
            render json: {user: user, token: token}
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    private
    
    def user_params
        params.require(:user).permit(
            :firstName,
            :lastName,
            :username,
            :password,
            :accountType,
            :parentId
        )

    end
end


