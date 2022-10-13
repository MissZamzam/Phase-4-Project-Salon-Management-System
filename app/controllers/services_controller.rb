class ServicesController < ApplicationController

    skip_before_action :authorized, only: [:index, :show]

    def index 
        services = Service.all 
        render json: services
    end

    def show 
        service = Service.find(params[:id])
        render json: service
    end
end
