class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized
    
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = issue_token({user_id: user.id})
            if user.parent? #&& user.children != []
                render json: {
                    user: UserSerializer.new(user),
                    token: token
                }
            elsif user.child?
                render json: {
                    user: UserChildSerializer.new(user),
                    token: token
                }
            end
        else
            render json: {error: "Account not found!"}, status: 401
        end
    end


    def show
        if current_user && current_user.parent?
            render json: {
                user: UserSerializer.new(current_user)
                }
        elsif current_user && current_user.child?
            render json: { user: UserChildSerializer.new(current_user)}
        else
            render json: {error: "Invalid token!"}, status: 401
        end
    end
end

