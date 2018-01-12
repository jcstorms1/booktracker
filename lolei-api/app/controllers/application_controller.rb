class ApplicationController < ActionController::API
    before_action :authorized

    def user_id
        decoded_token.first['user_id']
    end

    def current_user
        @user ||= User.find_by(id: user_id)
    end
    
    def logged_in?
        !!current_user
    end
    
    def authorized
        render json: { message: "Not Authorized" } unless logged_in?
    end

    def issue_token(payload)
        JWT.encode(payload, ENV['secret'], 'HS256')
    end
    
    def decoded_token
        begin
            JWT.decode(
                request.headers['Authorization'],
                ENV['secret'],
                true,
                { :algorithm => 'HS256' })
        rescue JWT::DecodeError
            [{}]
        end
    end
end
