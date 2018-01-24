class Api::V1::ListsController < ApplicationController

    def update
        list = List.find(params[:id])
        list.favorite = (params[:favorite])
        list.save
        render json: {user: UserSerializer.new(current_user)}
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
        render json: {user: UserSerializer.new(current_user)}
    end


end
