class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized
    
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = issue_token({user_id: user.id})
            if user.parent? && user.children != []
                render json: {
                    id: user.id,
                    username: user.username,
                    account_type: user.account_type,
                    books: user.books,
                    children: user.children,
                    token: token
                }
            end
        else
            render json: {error: "Account not found!"}, status: 401
        end
    end


    def show
        if current_user
            render json: {
                id: current_user.id,
                username: current_user.username
                }
        else
            render json: {error: "Invalid token!"}, status: 401
        end
    end
end

