import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Event {


    @PrimaryGeneratedColumn()
    id:number


    @Column()
    eventName:string


    @Column()
    description:string

    @Column()
    eventType:string

   @Column()
    numberOfTicket:number


     @CreateDateColumn()
       createdAt:Date;

       @UpdateDateColumn()
        updatedAt:Date
   
        @Column({nullable:true})
        eventProfilePhoto:string

        @Column("text",{nullable:true,array:true})
         eventCoverPhoto: string[]
    

    @ManyToOne(() => User, (user) => user.events,  {eager:true, onDelete:"CASCADE", onUpdate:"CASCADE"}) // Many events to one user
    user: User;
}
    