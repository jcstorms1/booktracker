class Book < ApplicationRecord
    has_many :lists
    has_many :users, through: :list

    def self.get_by_isbn(isbn)

        params = {
            "Service" => "AWSECommerceService",
            "Operation" => "ItemLookup",
            "AWSAccessKeyId" => ENV['aws_access'],
            "AssociateTag" => ENV['awstag'],
            "ItemId" => isbn.to_s.gsub('-',''),
            "IdType" => "ISBN",
            "ResponseGroup" => "Images,ItemAttributes",
            "SearchIndex" => "Book",
            "Condition" => "New"
        }

        params['Time'] = params["Timestamp"] = Time.now.gmtime.iso8601 if !params.key?("Timestamp")
        unsigned_string = self.generate_string(params)
        string_to_sign = "GET\n#{"webservices.amazon.com"}\n#{"/onca/xml"}\n#{unsigned_string}"
        signature = self.get_signature(string_to_sign)
        signed_url = self.generate_url(unsigned_string, signature)
        xml = RestClient.get(signed_url)
        json = Hash.from_xml(xml).to_json
    end


    def self.generate_string(params)
        params.sort.collect do |key, val|
            [URI.escape(
                key.to_s,Regexp.new("[^#{URI::PATTERN::UNRESERVED}]")), 
                URI.escape(val.to_s, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))].join('=')
        end.join('&')
    end

    def self.get_signature(string_to_sign)
        Base64.encode64(OpenSSL::HMAC.digest(OpenSSL::Digest.new('sha256'), ENV['aws_secret'], string_to_sign)).strip()
    end

    def self.generate_url(unsigned_string, signature)
        "http://#{"webservices.amazon.com"}#{"/onca/xml"}?#{unsigned_string}&Signature=#{URI.escape(signature, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))}"
    end
end

