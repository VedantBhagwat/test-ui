export class Todo {
    constructor(
        public id: string,
        public task: string,
        public is_completed: boolean,
        public creator: string,
        public created_at: Date,
        public updated_at: Date
    ) {

    }
}