

export interface SubTopic {
  _id: string;
  name: string;
  topicId: string;
}

export interface CreateSubTopicPayload {
  name: string;
  topicId: string;
}