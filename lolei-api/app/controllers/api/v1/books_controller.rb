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
        
        book_in_db = Book.find_by(isbn: params[:isbn])
        book = Book.new(book_data)
        byebug
        
        if !book_in_db.nil?
            user_that_added_book.books << book
            render json: {user: UserSerializer.new(current_user)}
        elsif book.save
            user_that_added_book.books << book
            render json: {user: UserSerializer.new(current_user)}
        else
            render json: {error: 'Oops, something went wrong! This book might alreadyTry another ISBN.'}
        end
    end
end
