class Api::V1::ListsController < ApplicationController

    def update
        list = List.find(params[:id])
        list.favorite = (params[:favorite])
        list.save
    end

end
