class Api::V1::BooksController < ApplicationController
    skip_before_action :authorized, only: [:byisbn]
 
    def index
        @book = Book.all
        render json: @book
    end

    def byisbn
        book = Book.get_by_isbn('9780544568037')
        render json: book
    end
end
