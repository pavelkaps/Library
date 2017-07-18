export class ID {
    static id: number = 0;

    static generate() {
        return ID.id++;
    }
}