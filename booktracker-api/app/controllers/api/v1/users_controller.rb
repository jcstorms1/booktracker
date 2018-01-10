class Api::V1::UsersController < ApplicationController

    def create
        @user = User.create(user_params)
    end

    private
    
    def user_params
        params.permit(
            :first_name,
            :last_name,
            :email,
            :password,
            :account_type,
            :parent_id
        )

    end
end


