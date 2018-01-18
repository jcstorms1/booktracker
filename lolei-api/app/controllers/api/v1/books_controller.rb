class Api::V1::BooksController < ApplicationController
    skip_before_action :authorized, only: [:byisbn]
 
    def index
        @books = Book.all
        render json: @books
    end

    def byisbn
        aws_book = Book.get_by_isbn(params[:isbn])
        book_data = Book.pull_data_from_json(aws_book)
        
        user_that_added_book = User.find(params[:user_id])
        book = Book.find_or_create_by(book_data)
        if book.valid?
            user_that_added_book.books << book
            render json: {user: UserSerializer.new(current_user)}
        else
            render json: {error: 'Oops, something went wrong! This book is most likely in your list already.'}
        end
    end
end
