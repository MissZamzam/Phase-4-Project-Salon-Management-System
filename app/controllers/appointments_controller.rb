class AppointmentsController < ApplicationController
    
    def index 
        appointments = Appointment.all 
        render json: appointments
    end

    def show 
        appointment = Appointment.find(params[:id])
        render json: appointment
    end

    def create
        appointment = Appointment.create(
            customer_id: params[:customer_id],
            service_id: params[:service_id],
            name: params[:name], 
            email: params[:email],
            appointment_date: params[:appointment_date],
            appointment_time: params[:appointment_time])

            render json: appointment, status: :created
        
    
      end
end
