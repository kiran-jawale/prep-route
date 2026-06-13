export type PublishMode = "immediate" | "scheduled";

export type AvailabilityMode =
  | "always"
  | "1week"
  | "2weeks"
  | "3weeks"
  | "1month"
  | "custom";

export interface PublishForm {
  publishMode: PublishMode;

  scheduledDate: string;

  scheduledTime: string;

  availability: AvailabilityMode;

  availableUntilDate: string;

  availableUntilTime: string;
}
