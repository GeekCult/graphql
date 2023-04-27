import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { AppointmentModel } from "../dtos/models/appointment-model";

@Resolver()
export class AppointmentsResolver{
    @Query( () => [AppointmentModel])
    async appointments () {
        return []
    };

    @Mutation(() => AppointmentModel)
    async createAppointment(@Arg('data') data: CreateAppointmentInput ){
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt
        }
        return appointment
    }

}