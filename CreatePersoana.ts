import { InputType, Field } from "type-graphql";

@InputType()
export class CreatePersoana {
  @Field()
  nume: string;

  @Field()
  prenume: string;
}
