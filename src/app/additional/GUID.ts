export class GUID {
    static id: number = 0;

    static generate() {
        return GUID.id++;
    }
}