import { get } from "@loopback/rest";
export class MarcuiController {
  @get("/marcui")
  hello(): string {
    return "Hello marcui!";
  }
}
