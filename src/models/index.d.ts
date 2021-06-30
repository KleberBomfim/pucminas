import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Status {
  BOOKED = "BOOKED",
  PENDING = "PENDING",
  DONE = "DONE"
}

export enum ScheduleStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}

export declare class DRUG {
  readonly id?: string;
  readonly name: string;
  readonly generic: string;
  readonly manufacturer: string;
  constructor(init: ModelInit<DRUG>);
}

export declare class Schedule {
  readonly status: ScheduleStatus | keyof typeof ScheduleStatus;
  readonly date: string;
  readonly time: string;
  constructor(init: ModelInit<Schedule>);
}

export declare class Receptionist {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Receptionist>);
  static copyOf(source: Receptionist, mutator: (draft: MutableModel<Receptionist>) => MutableModel<Receptionist> | void): Receptionist;
}

export declare class Patient {
  readonly id: string;
  readonly name: string;
  readonly phon: string;
  readonly email: string;
  readonly AppointmentsPatient?: (Appointment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Patient>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

export declare class Appointment {
  readonly id: string;
  readonly created?: number;
  readonly date?: string;
  readonly statu?: Status | keyof typeof Status;
  readonly doctorID?: string;
  readonly patientID?: string;
  readonly Prescriptions?: (Prescription | null)[];
  readonly Exams?: (Exam | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Appointment>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

export declare class Prescription {
  readonly id: string;
  readonly drug?: DRUG[];
  readonly expedited?: number;
  readonly coments?: string;
  readonly appointmentID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Prescription>);
  static copyOf(source: Prescription, mutator: (draft: MutableModel<Prescription>) => MutableModel<Prescription> | void): Prescription;
}

export declare class Exam {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly appointmentID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Exam>);
  static copyOf(source: Exam, mutator: (draft: MutableModel<Exam>) => MutableModel<Exam> | void): Exam;
}

export declare class Doctor {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly CRM: string;
  readonly schedule?: (Schedule | null)[];
  readonly AppointmentsDoctor?: (Appointment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Doctor>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor>) => MutableModel<Doctor> | void): Doctor;
}