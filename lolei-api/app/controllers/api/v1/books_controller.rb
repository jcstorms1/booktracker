class Api::V1::BooksController < ApplicationController
    skip_before_action :authorized, only: [:byisbn]
 
    def index
        @books = Book.all
        render json: @books
    end

    def byisbn
        book = Book.get_by_isbn(params[:isbn])
        data_to_render = Book.pull_data_from_json(book)
        
        render json: book
    end
end
