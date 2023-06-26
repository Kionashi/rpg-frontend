import { SummaryElement } from "./summary-element";
import { Entity } from "./entity"

export interface Character extends SummaryElement, Entity {
    exp: number,
}