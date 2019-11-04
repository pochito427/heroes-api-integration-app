import { Powerstats } from "./powerstats";
import { Appearance } from "./appearance";
import { Biography } from "./biography";
import { Work } from "./work";
import { Connections } from "./connections";
import { Images } from "./images";

export class Hero{
    id: number;
  name: string;
  slug: string;
  powerstats : Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}