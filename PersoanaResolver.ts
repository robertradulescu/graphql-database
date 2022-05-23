import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Persoana } from "../models/Persoana";
import { CreatePersoana } from "../inputs/CreatePersoana";


@Resolver()
export class PersoanaResolver {
  @Query(() => [Persoana])
  persoane() {
    return Persoana.find();
  }

  @Query(() => Persoana)
  persoana(@Arg("id") id: string) {
    return Persoana.findOne({ where: { id } });
  }

  @Mutation(() => Persoana)
  async createPersoana(@Arg("data") data: CreatePersoana) {
    const persoana = Persoana.create(data);
    await persoana.save();
    return persoana;
  }



}
