import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  appointmentsRepository: AppointmentsRepository;

  constructor(appointments: AppointmentsRepository) {
    this.appointmentsRepository = appointments;
  }

  execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.find(
      appointmentDate,
    );
    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked!');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
