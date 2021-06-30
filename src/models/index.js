// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "BOOKED": "BOOKED",
  "PENDING": "PENDING",
  "DONE": "DONE"
};

const ScheduleStatus = {
  "OPEN": "OPEN",
  "CLOSED": "CLOSED"
};

const { Receptionist, Patient, Appointment, Prescription, Exam, Doctor, DRUG, Schedule } = initSchema(schema);

export {
  Receptionist,
  Patient,
  Appointment,
  Prescription,
  Exam,
  Doctor,
  Status,
  ScheduleStatus,
  DRUG,
  Schedule
};