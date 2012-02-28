require 'sinatra'
require "sinatra/reloader"
# require 'sinatra/content_for'

get '/private_consent_1section1' do
  haml :private_consent_one, :format => :html5
end

get '/private_consent_1section2' do
  haml :private_consent_1section2, :format => :html5
end

get '/alcohol_1section1' do
  haml :alcohol_1section1, :format => :html5
end

get '/alcohol_1section2' do
  haml :alcohol_1section2, :format => :html5
end

get '/alcohol_1section3' do
  haml :alcohol_1section3, :format => :html5
end

get '/' do
 haml :index, :format => :html5, :layout => :blank
end