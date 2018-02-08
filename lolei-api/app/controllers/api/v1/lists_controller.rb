class Api::V1::ListsController < ApplicationController

    def update
        list = List.find(params[:id])
        list.favorite = (params[:favorite])
        list.save
        if current_user.parent?
            render json: {user: UserSerializer.new(current_user)}
        else
            render json: {user: UserChildSerializer.new(current_user)}
        end
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
        if current_user.parent?
            render json: {user: UserSerializer.new(current_user)}
        else
            render json: {user: UserChildSerializer.new(current_user)}
        end
    end


end
