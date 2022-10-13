puts "seeding service table"

service1 = Service.create(
image_url:"data:image/jpeg;base64,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", 
name: "Face treatments",
description:"Filled with expertly trained staff to get to the bottom of any skin issue, booking in for a facial is an important first step to getting your skin back on track.")
service2 = Service.create(image_url:"data:image/jpeg;base64,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", 
name: "Body treatments",
description:"From tanning to exfoliation treatments, mud wraps to massages. If you're looking to treat your body to some serious pampering,first step in your journey to utter relaxation starts here")
service3 = Service.create(
image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxbdh1xZniZqN90b1SEJ8PoV7rS-qNQwvQQ&usqp=CAU", 
name: "Manicure", description:"Whether you like your nails short and sweet, square, almond or oval, there’s a reason why manicures are up there as one of the most popular beauty treatments for women today. From french to gels, acrylic to paraffin, our professional manis will buff your hands and nails to perfection, and with hundreds of colours to choose from, will put the perfect finishing touch on any outfit.")
service4 = Service.create(
image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmCIqWfwPrS71SweImVnBxyAcQuFwiPmqzw&usqp=CAU", 
name: "Pedicure", 
description:"Perfect for removing hard dead skin cells from your feet, a spoiling pedicure is perfect for keeping your toenails in clean working order. Expect to leave with smooth skin, healthy, shaped toenails and a pop of your favourite nail polish as the finishing touch.")
service5 = Service.create( 
    image_url:"data:image/jpeg;base64,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", 
name: "Massage Salons and Therapists", 
description:"Tense, tight, muscles call for a massage. In the right hands your aches and pains can be massaged away within minutes. If you can’t seem to kick sore shoulders and aching joints, you need to get yourself to our massage salon, asap.")
service6 = Service.create( 
image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2GeDZuzK2j2N8gnuEeHrFAdAzw5PNojAQg&usqp=CAU", 
name: "Hair Colouring", 
description:"Hair colouring can be as subtle or as out there as you want it to be. Best done in salon with a skilled colourist, blondes can go blonder, brunettes can be boosted, greys can be covered, or enhanced with a spot of granny hair. Not to mention every crazy colour from pink to blue to green can be achieved in the right hands.")
service7 = Service.create( 
image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIHl8yMr_4brMPq6dJg68CGM8ig6qTGOq3Q&usqp=CAU", 
name: "Henna & Tatoo", 
description:"Black henna is advertised as a fun, temporary decoration that, because of its dark stain, looks like a real tattoo. It is supposed to last only one to three weeks, but some people are getting a nasty surprise after they've paid for their new look.")
service8 = Service.create(
image_url:"https://static.wixstatic.com/media/11062b_80fd4a7ca5434b9d9fd120fcbce9c017~mv2.jpeg/v1/fill/w_640,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_80fd4a7ca5434b9d9fd120fcbce9c017~mv2.jpeg", 
name: "Skin Clinic", 
description:"Whether you suffer from stubborn acne, have a recurring skin condition or simply want to set yourself up with a personalised skincare regime, our professional skin clinic should be your first stop on the road to a flawless, healthy complexion")
service9 = Service.create(
image_url:"data:image/jpeg;base64,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", 
name: "Eyelash Extensions", 
description:"Always applied by a trained therapist, eyelash extensions are individually applied fibres that are attached to your natural lashes to give temporarily enhanced length and volume. From temporary cluster to Russian Volume, each promise to give you thicker and fuller lashes that last from a few days to well over a month depending on which option you go for!")

puts "seeding customer table"

customer1 = Customer.create(name:"Mercy", email:"mercy@gmail.com", phone_number: "333333"),
customer2 = Customer.create(name:"Sharon", email:"sharon@gmail.com", phone_number: "5333333"), 
customer3 = Customer.create(name:"Olivia", email:"olivia@gmail.com", phone_number: "33333"),
customer4 = Customer.create(name:"Emily", email:"ema6s@gmail.com", phone_number: "333333"),
customer5 = Customer.create(name:"Grace", email:"grace6s@gmail.com", phone_number: "333333"),
customer6 = Customer.create(name:"Audry", email:"audrys@gmail.com", phone_number: "333333")

puts "seeding appointment table"
    appointment1 = Appointment.create(
    service_id: service9.id, customer_id: customer1.id, name:"Jane Michael", email: "JaneMike@gmail.com", appointment_date: "18/11/2022", appointment_time: "1212hrs",service:"Facials")

    appointment2 = Appointment.create(
    service_id: service8.id, customer_id: customer2.id, name:"Halima Ali", email: "Halima@gmail.com", appointment_date: "12/11/2022", appointment_time: "1112hrs",servicename:"Facials")

    appointment3 = Appointment.create( 
    service_id: service4.id, customer_id: customer3.id, name:"Norah James", email: "Noraj@gmail.com", appointment_date: "10/11/2022", appointment_time: "1012hrs",servicename:"Facials")

    appointment4 = Appointment.create( 
    service_id: service3.id, customer_id: customer4.id, name:"Miriam Ali", email: "Miriam@gmail.com", appointment_date: "18/10/2022", appointment_time: "1412hrs",servicename:"Facials")

    appointment5 = Appointment.create( 
    service_id: service7.id, customer_id: customer5.id, name:"Zamzam Hassan", email: "ZamzamH@gmail.com", appointment_date: "09/11/2022", appointment_time: "1010hrs",servicename:"Facials")

    appointment6 = Appointment.create( 
    service_id: service2.id, customer_id: customer6.id, name:"Rose Scofield", email: "rose@gmail.com", appointment_date: "06/11/2022", appointment_time: "1232hrs", servicename:"Facials")

    puts "end of seeding"


