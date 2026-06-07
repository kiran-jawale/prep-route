

export interface Topic {
  _id: string;
  name: string;
  subjectId: string;
}

export interface CreateTopicPayload {
  name: string;
  subjectId: string;
}
